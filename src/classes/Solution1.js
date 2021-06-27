import { Solution } from './Solution'

class Solution1 extends Solution {
  Solve () {
    super.Solve()
    return this.questionData.filter(item => ('id' in item))
  }
}

export { Solution1 }
