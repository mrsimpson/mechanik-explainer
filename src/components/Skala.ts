export type Props = {
  seed: number;
  frage: string;
  einheit: string;
  eingabe: string;
  pruefen: string;
};

export type Task = {
  step: number;
  label: number;
  n: number;
  max: number;
  value: number;
  base: number;
  above: number;
};

const STEPS = [2, 5, 10, 20];
const TICKS_PER_LABEL = 5;
const TICKS_TOTAL = 20;

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A measuring cylinder with a water level between two labelled marks. */
export function generate(seed: number, _props: Props): Task {
  const random = mulberry32(Math.imul(seed, 2654435761) ^ 0x9e3779b9);
  const step = STEPS[Math.floor(random() * STEPS.length)] ?? 2;
  const candidates: number[] = [];
  for (let n = 1; n < TICKS_TOTAL; n++) {
    if (n % TICKS_PER_LABEL !== 0) candidates.push(n);
  }
  const n = candidates[Math.floor(random() * candidates.length)] ?? 1;
  const above = n % TICKS_PER_LABEL;
  const base = (n - above) * step;
  return {
    step,
    label: step * TICKS_PER_LABEL,
    n,
    max: step * TICKS_TOTAL,
    value: n * step,
    base,
    above,
  };
}

export function check(task: Task, answer: number): boolean {
  return Math.abs(answer - task.value) < 1e-9;
}

export function solution(task: Task): number {
  return task.value;
}

/** The typical mistake: the learner counts the marks and ignores what one mark is worth. */
export function wrong(task: Task): number {
  return task.n;
}

export function reason(task: Task, answer: number): string {
  if (check(task, answer)) return "";
  if (answer === task.n) {
    return `Du hast die Teilstriche gezählt. Ein Teilstrich ist aber ${task.step} ml, nicht 1 ml.`;
  }
  if (answer === task.base) {
    return `Du hast nur den beschrifteten Strich bei ${task.base} ml abgelesen. Zähle die Teilstriche darüber dazu.`;
  }
  return `Zähle die Teilstriche über dem beschrifteten Strich bei ${task.base} ml. Jeder Teilstrich ist ${task.step} ml.`;
}

export function describe(task: Task, props: Props, _lang: string): { task: string; solution: string } {
  return {
    task:
      `Ein Messzylinder hat eine Skala von 0 bis ${task.max} ${props.einheit}. Beschriftet ist alle ${task.label} ${props.einheit}, ` +
      `ein Teilstrich ist ${task.step} ${props.einheit}. Der Wasserstand liegt ${task.above} Teilstriche über dem Strich bei ` +
      `${task.base} ${props.einheit}. ${props.frage}`,
    solution: `${task.value} ${props.einheit}`,
  };
}

export const about = {
  task: "Ein Messzylinder mit Skala: Lernende lesen den Wasserstand ab. Beschriftet ist nur jeder fünfte Strich, der Wasserstand liegt dazwischen.",
  answer:
    "Eine Zahl in ml: der Wert des beschrifteten Strichs unter dem Wasserstand plus die Teilstriche darüber mal dem Wert eines Teilstrichs.",
  correct: "Jede Zahl, die dem Wasserstand entspricht, mit Komma oder Punkt geschrieben.",
  mistakes: [
    "Die Teilstriche werden gezählt, ohne zu beachten, wie viel ein Teilstrich ist.",
    "Nur der beschriftete Strich unter dem Wasserstand wird abgelesen.",
  ],
};
