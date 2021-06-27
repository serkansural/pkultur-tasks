<template>
  <master></master>
</template>

<script>
import Master from './components/Master.vue'
import QuestionService from './services/QuestionService'
import Solutions from './services/SolutionService'

export default {
  name: 'App',
  provide: {
    qService: new QuestionService(),
    solutions: Solutions
  },
  components: {
    Master
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
