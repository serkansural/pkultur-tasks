<template>
  <div class="wrapper">
    <div class="side data">
      <div class="title">Select data</div>
      <div class="nav">
        <div class="nav-item" :class="{'selected':index===questionIndex}" @click="SelectData(index)"
             v-for="(qData,index) in questionData" :key="qData">
          {{ index + 1 }}
        </div>
      </div>
      <div class="question">
        <Question :data="Question"></Question>
      </div>
    </div>
    <div class="side solution">
      <div class="title">
        Apply solution
      </div>
      <div class="nav">
        <div class="nav-item" :class="{'selected':index===solutionIndex}" @click="SelectSolution(index)"
             v-for="(solution,index) in solutions" :key="solution">
          {{ index + 1 }}
        </div>
      </div>
      <template v-if="IsSolutionGeneric">
        <Solution :solution="Solution"></Solution>
      </template>
      <template v-else>
        <div class="reset-wrapper">
          <div class="reset" @click="ResetData()"> Reset</div>
        </div>
        <seven :data="Question" ref="seven"></seven>
      </template>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'
import Solution from './Solution'
import Seven from './Seven'

export default {
  name: 'Master',
  components: {
    Seven,
    Solution,
    Question
  },
  inject: ['qService', 'solutions'],
  data () {
    const questionData = this.qService.GetData()

    return {
      questionData,
      questionIndex: 0,
      solutionIndex: 0,
      solutions: this.solutions
    }
  },
  methods: {
    SelectData (index) {
      this.questionIndex = index
      this.solutionIndex = index
    },
    SelectSolution (index) {
      this.solutionIndex = index
    },
    ResetData () {
      this.$refs.seven.Reset()
    }
  },

  computed: {
    Solution () {
      const sol = new this.solutions[this.solutionIndex](this.questionData[this.questionIndex])
      return sol
    },
    Question () {
      return this.questionData[this.questionIndex]
    },
    IsSolutionGeneric () {
      return this.solutionIndex < this.solutions.length
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 1;
  flex-shrink: 0;

  .side {
    width: 50%;
    padding: 10px;

    &:first-child {
      background-color: #ededed;
    }

    .title {
      font-weight: bold;
      padding: 5px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 5px;
    }

    .nav {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;

      .nav-item {
        cursor: pointer;
        border: 1px solid #9f9f9f;
        padding: 5px 10px;
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 5px;

        &.selected {
          background-color: #1f1f3f;
          color: #fff;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &.data {
    }
  }

  .reset-wrapper {
    display: flex;
    padding: 5px;
    justify-content: flex-end;

    .reset {
      padding: 5px;
      background-color: #2c3e50;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
