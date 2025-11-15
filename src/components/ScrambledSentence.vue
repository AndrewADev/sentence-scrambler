<template>
  <div class="sentence-row">
    <template v-for="(part, idx) in scrambled" :key="idx">
      <p class="display-inline">
        {{ part }}
      </p>
      <slot name="separator"> / </slot>
    </template>
  </div>
  <div class="answer-block"></div>
</template>

<script setup lang="ts">
import { simpleScramble } from '@/utils/scramble';

const props = defineProps<{
  parts: string[];
}>();

// TODO: probably do this elsewhere
const scrambled = simpleScramble(props.parts);
</script>

<style scoped lang="postcss">
@import 'tailwindcss' reference;

.answer-block {
  @apply border-b border-solid border-black;

  height: 1rem;
}

@media (prefers-color-scheme: dark) {
  .answer-block {
    @apply border-white;
  }
}

.display-inline {
  display: inline;
}
</style>
