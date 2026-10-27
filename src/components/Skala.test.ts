import { expect, test } from "vite-plus/test";
import {
  about,
  check,
  describe as describeTask,
  generate,
  mistakes,
  params,
  parse,
  reason,
  show,
  solution,
  template,
  wrong,
  type Props,
} from "./Skala.ts";

const props: Props = {
  seed: 1,
  frage: "Wie viel Wasser ist im Messzylinder?",
  einheit: "ml",
  eingabe: "Antwort",
};

test("the same seed gives the same task", () => {
  for (let seed = 1; seed <= 50; seed++) {
    expect(generate(seed, props)).toEqual(generate(seed, props));
  }
});

test("the solution passes and the typical mistake fails", () => {
  for (let seed = 1; seed <= 50; seed++) {
    const task = generate(seed, props);
    expect(check(task, solution(task))).toBe(true);
    expect(check(task, wrong(task))).toBe(false);
    expect(task.n % 5).not.toBe(0);
    expect(task.value).toBe(task.n * task.step);
  }
});

test("the water level lies between two labelled marks", () => {
  for (let seed = 1; seed <= 50; seed++) {
    const task = generate(seed, props);
    expect(task.base % task.label).toBe(0);
    expect(task.value).toBeGreaterThan(task.base);
    expect(task.value).toBeLessThan(task.base + task.label);
  }
});

test("counting marks gets its own reason", () => {
  const task = generate(3, props);
  expect(reason(task, wrong(task))).toContain("Teilstriche gezählt");
  expect(reason(task, task.base)).toContain("beschrifteten Strich");
  expect(reason(task, solution(task))).toBeUndefined();
});

test("the description holds the task but not the answer as a number of its own", () => {
  const task = generate(2, props);
  const text = describeTask(task, props, "de");
  expect(text.task).toContain(`${task.above} Teilstriche`);
  expect(text.solution).toBe(`${task.value} ml`);
  expect(about.mistakes.length).toBeGreaterThan(0);
});

test("the typed number, with a comma or a point; none while the field is empty or no number", () => {
  expect(parse(" 26 ")).toBe(26);
  expect(parse("2,5")).toBe(2.5);
  expect(parse("")).toBeUndefined();
  expect(parse("zwölf")).toBeUndefined();
});

test("for a tutor: the task once, what sets it, and the typical mistakes check rejects", () => {
  const task = generate(1, props);
  let text = template(props, "de");
  for (const [name, value] of Object.entries(params(task, props, "de")))
    text = text.replace(`{${name}}`, String(value));
  expect(text).toBe(describeTask(task, props, "de").task);
  for (const answer of mistakes(task)) expect(check(task, answer)).toBe(false);
  expect(show(2.5, task, props, "de")).toBe("2,5 ml");
});
