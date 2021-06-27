<template>
  <div class="question-wrapper">
    <pre class="question-data">
      {{ format(data) }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['data', 'solution'],
  methods: {
    format (jsObject) {
      return JSON.stringify(jsObject, null, '\t')
    }
  }
}
</script>

<style lang="scss" scoped>
.question-wrapper {
  display: flex;
  flex-wrap: nowrap;

  .question-data {
    width: 50%;
  }
}
</style>
