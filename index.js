const form = document.querySelector('form#flickForm')

const createList = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value + f.actorName.value

  const item = document.createElement('li')
  item.textContent += flickName

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', createList)