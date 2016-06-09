//import orderBy from 'lodash/orderby'
// import sortedIndex from 'lodash/sortedIndex'
const rule = [
  {
    'levelname': 'สมาชิกใหม่',
    'score': 0
  },
  {
    'levelname': 'ผู้เริ่มต้น',
    'score': 20
  },
  {
    'levelname': 'นักปลูกฝึกหัด',
    'score': 80
  },
  {
    'levelname': 'นักปลูกสามัญ',
    'score': 150
  },
  {
    'levelname': 'นักปลูกสามัญพิเศษ',
    'score': 250
  },
  {
    'levelname': 'นักปลูกมืออาชีพ',
    'score': 400
  }
]
const lvl = (rule, score) => {
  length = rule.length
  // console.log(length, rule, score)
  // console.log(rule[1])
  for (let i = 1;i < length - 1; i++) {
    if (rule[i].score < score && score < rule[i + 1].score) {
      return { name: rule[i].levelname, lvl: i + 1 }
    }
  }
  return {name: rule[length-1].levelname, lvl: length}
}

const check = score => {
  //const orderRule = orderBy(rule, 'score')
  const orderRule=rule
  // console.log(orderRule)
  const level = lvl(orderRule, score)
  // console.log('lvl:', level)
  return level
}
// console.log('check :', check(30))
// console.log('check :', check(120))
// console.log('check :', check(410))
export { check }
