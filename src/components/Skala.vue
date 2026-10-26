<script setup lang="ts">
// A measuring cylinder whose water level the learner reads off, for the task of the number seed. It is the input of
// the task: it emits the number typed with answer (undefined while there is none), and the explainer draws "Prüfen",
// checks it with Skala.ts and gives the feedback; Enter in the field checks too.
import { computed, ref, watch } from "vue";
import { generate, parse, type Props } from "./Skala.ts";

const props = defineProps<{
  seed: number;
  frage: string;
  einheit: string;
  eingabe: string;
}>();
const emit = defineEmits<{ answer: [number | undefined] }>();

const asProps = (): Props => ({ ...props });
const task = computed(() => generate(props.seed, asProps()));
const input = ref("");

const top = 20;
const bottom = 300;
const ticks = computed(() => {
  const list: { y: number; label: string | null }[] = [];
  for (let i = 0; i <= 20; i++) {
    const v = i * task.value.step;
    list.push({ y: bottom - (v / task.value.max) * (bottom - top), label: i % 5 === 0 ? String(v) : null });
  }
  return list;
});
const levelY = computed(() => bottom - (task.value.value / task.value.max) * (bottom - top));

watch(input, (typed) => emit("answer", parse(typed)));
</script>

<template>
  <div class="skala">
    <svg
      viewBox="0 0 200 320"
      width="200"
      height="320"
      role="img"
      :aria-label="`Messzylinder, Skala 0 bis ${task.max} ${einheit}`"
    >
      <rect x="60" :y="levelY" width="50" :height="bottom - levelY" fill="#6aa9e9" />
      <rect x="60" :y="top" width="50" :height="bottom - top" fill="none" stroke="currentColor" stroke-width="2" />
      <g stroke="currentColor">
        <line v-for="(t, i) in ticks" :key="i" :x1="110" :y1="t.y" :x2="t.label ? 128 : 120" :y2="t.y" />
      </g>
      <g fill="currentColor" font-size="11" font-family="sans-serif">
        <text v-for="(t, i) in ticks.filter((x) => x.label)" :key="i" :x="132" :y="t.y + 4">{{ t.label }}</text>
        <text x="132" :y="bottom + 16">{{ einheit }}</text>
      </g>
    </svg>
    <p>{{ frage }}</p>
    <label>
      {{ eingabe }}
      <input v-model="input" type="text" inputmode="decimal" autocomplete="off" />
      {{ einheit }}
    </label>
  </div>
</template>
