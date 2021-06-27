import { Solution } from './Solution'

class Solution4 extends Solution {
  Solve () {
    return this.questionData.filter(p => {
      return p.details?.age > 16
    })
  }
}

export { Solution4 }
