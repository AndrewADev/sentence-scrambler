<template>
  <div class="border-div">
    <ScrambledSentence v-for="(sentence, idx) in sentences" :parts="sentence" :key="idx" />
  </div>
</template>

<script setup lang="ts">
import ScrambledSentence from '@/components/ScrambledSentence.vue';

const sentences = [
  ['The quick brown fox', 'jumps', 'over', 'the lazy dog.'],
  ['The', 'waiter', 'brings', 'us', 'our', 'food.'],
  ['The', 'girl', 'rides', 'her', 'bike'],
  ['The', 'bird', 'flies'],
  ['A', 'hush', 'falls', 'over', 'the', 'crowd.'],
];
</script>

<style scoped>
.border-div {
  @apply border border-solid p-2 mt-4;
}
</style>
