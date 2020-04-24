var fizzElement = document.createElement('ul')







function fizzbuzz () {
  console.log('hello IN fizzbuzz fn')

  for (let index = 0; index < 1001; index++) {
   // console.log ('index', index)
    if (index % 3 && index % 5)
    console.log('fizzbuzz')
    } else if (index % 3) {
      console.log('fizz')
    } else if (index % 5) {
      console.log('buzz')
    } else {
      console.log('i got nothing')
    }
  }
}