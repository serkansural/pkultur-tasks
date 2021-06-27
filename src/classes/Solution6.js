import { Solution } from './Solution'

class Solution6 extends Solution {
  calculateDowntime (downtimeArr) {
    const overlaps = []
    downtimeArr.map(c => {
      overlaps.push([new Date(c.start_date), new Date(c.finish_date)])
    })

    overlaps.sort((a, b) => {
      return a[0] - b[0]
    })

    let index = 0
    while (index < overlaps.length - 1) {
      const current = overlaps[index]
      const next = overlaps[index + 1]
      if (current[1] >= next[0]) {
        next[0] = current[0]
        next[1] = new Date(Math.max(current[1].getTime(), next[1].getTime()))
        overlaps.splice(index, 1)
      } else {
        index++
      }
    }

    return overlaps
  }

  Solve () {
    const keys = Object.keys(this.questionData)
    const overlaps = []
    for (const key of keys) {
      const data = this.questionData[key]
      overlaps.push({
        title: key,
        downTimes: this.calculateDowntime(data)
      })
    }
    return overlaps
  }
}

export { Solution6 }
