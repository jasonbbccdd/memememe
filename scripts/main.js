// JQUERY ELEMENTS
const $header = $('#header')
const $container = $('#container')
const $popTexts = $('#container p')
const $navLinks = $('.nav-link')

// CONSTANCE
const DEFAULT_IMAGE = 'https://i.imgur.com/sZbhFmk.png'
const GAME_BACKGROUNDS = [
  ['https://i.imgur.com/hn4JpVH.jpg', 'https://i.imgur.com/dK2r72x.jpg', 'bird'],
  ['https://i.imgur.com/mm4i5kB.jpg', 'https://i.imgur.com/qrZjLZB.jpg', 'axe'],
  ['https://i.imgur.com/zFII8bT.jpg', 'https://i.imgur.com/KBk6Twp.jpg', 'btc'],
  ['https://i.imgur.com/hIEofnQ.jpg', 'https://i.imgur.com/cTcCUGN.jpg', 'tag']
]

// GLOBAL VARIABLES
let currentGame = 0

// EVENT LISTENERS
const handleMouseDown = () => {
  $header.css('background-image', `url(${GAME_BACKGROUNDS[currentGame][1]})`)
  $popTexts.hide()
}

const handleMouseUp = () => {
  $header.css('background-image', `url(${GAME_BACKGROUNDS[currentGame][0]})`)
}

const handleNavClick = (e) => {
  const $elem = $(e.target)
  const targetID = $elem.data('target')

  $popTexts.hide()
  $(`#${targetID}`).show()

  currentGame = $elem.data('game')
  $container.removeAttr('class').addClass(GAME_BACKGROUNDS[currentGame][2])
  $header.css('background-image', `url(${GAME_BACKGROUNDS[currentGame][0]})`)
}

const init = () => {
  $header.on('mousedown', handleMouseDown)
  $header.on('mouseup', handleMouseUp)

  $navLinks.on('click', handleNavClick)
}

init()

/*
$('#solution-input').keypress(function(){
  setInterval(myTimer, 1000)
  */

/*
Anonymous Function
const nameOfFunction = function() {

}

// Or
// ES6 Anonymous Function with no return
const nameOfFunction = () => {
  // function body
}

// Or
// ES6 Anonymous Function with return
const nameOfFunction = () => (
  // Return Value
)

// This is same as
const nameOfFunction = function() {
  return (
    // Return Value
  )
}
*/
// const photosBeforeClick = new Array()
// const photosAfterClick = new Array()

// const calcSubtotal = (price, quantity) => {
//   return (quantity * (price * 100)) / 100
// }

/*
https://i.imgur.com/sZbhFmk.png
Game 0

https://i.imgur.com/hn4JpVH.jpg
https://i.imgur.com/dK2r72x.jpg
Game 1

https://i.imgur.com/mm4i5kB.jpg
https://i.imgur.com/qrZjLZB.jpg


https://i.imgur.com/zFII8bT.jpg
https://i.imgur.com/KBk6Twp.jpg

*/



// photosBeforeClick.push('https://i.imgur.com/sZbhFmk.png')
// photosAfterClick.push('https://i.imgur.com/sZbhFmk.png')

// const on = () => {
//   document.getElementById("overlay").style.display = "inline";
// }

// const off = () =>{
//   document.getElementById("overlay").style.display = "none";
// }

/*
function Student(initName, initAge) {
  this.name = initName
  let age = initAge

  this.introduce = function() {
    return `My name is ${this.name}. I am ${age} years old`
  }

  Object.defineProperties(this, {
    isAdult: {
      get: function() {
        return age > 18
      }
    },
    age: {
      get: function() {
        return age
      },
      set: function(newAge) {
        age = newAge
      }
    }
  })
}

const student = new Student("Denis", 30)
console.log(student.age) // 30
console.log(student.isAdult) // true
console.log(student.introduce()) // "My name is Denis. I am 30 years old"

student.age = 10
console.log(student.age) // 10
console.log(student.isAdult) // false
console.log(student.introduce()) // "My name is Denis. I am 10 years old"

*/
