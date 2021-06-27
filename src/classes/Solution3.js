import { Solution } from './Solution'

class Solution3 extends Solution {
  Solve () {
    const propsToKeep = ['firstName', 'lastName', 'details']
    const obj = {}
    propsToKeep.forEach(e => {
      obj[e] = this.questionData[e]
    })
    return obj
  }
}

export { Solution3 }
