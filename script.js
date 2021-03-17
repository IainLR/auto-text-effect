const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const textArr = ['My name is Iain', 'Welcome', 'This is Fine']
// const text = 'My name is Iain'
let textChoice = 0
// let text = textArr[textChoice]
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  let text = textArr[textChoice]
  textEl.innerText = text.slice(0, idx)
  idx++

  if (idx > text.length) {
    console.log(textChoice)

    idx = 1
    if (textChoice >= textArr.length - 1) {
      textChoice = 0
    }
    textChoice++
  }

  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
