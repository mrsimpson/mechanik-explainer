import { expect, test } from "vite-plus/test";
import { about, check, describe as describeTask, generate, reason, solution, wrong, type Props } from "./Skala.ts";

const props: Props = {
  seed: 1,
  frage: "Wie viel Wasser ist im Messzylinder?",
  einheit: "ml",
  eingabe: "Antwort",
  pruefen: "Prüfen",
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
  expect(reason(task, solution(task))).toBe("");
});

test("the description holds the task but not the answer as a number of its own", () => {
  const task = generate(2, props);
  const text = describeTask(task, props, "de");
  expect(text.task).toContain(`${task.above} Teilstriche`);
  expect(text.solution).toBe(`${task.value} ml`);
  expect(about.mistakes.length).toBeGreaterThan(0);
});
