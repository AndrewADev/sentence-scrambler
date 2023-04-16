<template>
  <div class="border-div">
    <WorksheetForm v-model:sentences="inputSentences" />
  </div>
  <div class="border-div">
    {{ inputSentences }}
  </div>
  <div class="border-div">
    <ScrambledSentence v-for="(sentence, idx) in inputSentences" :parts="sentence" :key="idx" />
  </div>
</template>

<script setup lang="ts">
import WorksheetForm from '@/components/forms/WorksheetForm.vue';
import ScrambledSentence from '@/components/ScrambledSentence.vue';
import { ref } from 'vue';

// TODO: Move to better location (state default?)
const sentences = [
  ['The quick brown fox', 'jumps', 'over', 'the lazy dog.'],
  ['The', 'waiter', 'brings', 'us', 'our', 'food.'],
  ['The', 'girl', 'rides', 'her', 'bike'],
  ['The', 'bird', 'flies'],
  ['A', 'hush', 'falls', 'over', 'the', 'crowd.'],
];

const inputSentences = ref(sentences);
</script>

<style scoped>
.border-div {
  @apply border border-solid p-2 mt-4;
}
</style>
