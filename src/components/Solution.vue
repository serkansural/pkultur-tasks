<template>
  <pre>{{ solved }}</pre>
</template>

<script>
export default {
  name: 'Solution',
  props: ['solution'],
  data () {
    return {}
  },
  methods: {
    format (jsObject) {
      return JSON.stringify(jsObject, null, '\t')
    }
  },
  computed: {
    solved () {
      try {
        return this.format(this.solution.Solve())
      } catch (ex) {
        console.error('Data is not valid for solution', ex)
      }
      return []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
