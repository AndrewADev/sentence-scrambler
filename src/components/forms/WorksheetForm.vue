<template>
  <textarea
    v-model="editableSentences"
    @change="onChange"
    placeholder="Enter your text here"
    class="entry"
  >
  </textarea>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { joinSentences } from '@/utils/sentences';

const props = withDefaults(
  defineProps<{
    sentences: string[][];
  }>(),
  {
    sentences: () => [],
  },
);

const emit = defineEmits<{
  (e: 'update:sentences', sentences: string[][]): void;
}>();

const editableSentences = ref(joinSentences(props.sentences));

// TODO: test!
const parsedInput = computed(() => {
  return editableSentences.value.split(/\n/).map((sent) => sent.split(','));
});

const splitInputToSentences = (rawText: string) =>
  rawText.split(/\n/).map((sent) => sent.split(','));

watch(
  () => parsedInput,
  () => {
    emit('update:sentences', parsedInput.value);
  },
);

const onChange = (e: Event) => {
  emit('update:sentences', splitInputToSentences((e.target as HTMLTextAreaElement).value));
};
</script>

<style scoped>
.entry {
  width: 95%;

  @media (prefers-color-scheme: dark) {
    background: var(--vt-c-black);
  }
}
</style>
