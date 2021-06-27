import { Solution } from './Solution'

class Solution2 extends Solution {
  Solve () {
    const list = []
    this.questionData.forEach(e => {
      list.push(`${e.firstName} ${e.lastName}`)
    })
    return list
  }
}

export { Solution2 }
