const body = document.querySelector('body')

let names = prompt('Ismingizni kriting')

let h1 = document.createElement('h1')

h1.innerHTML = `${names}`

body.appendChild(h1)

h1.style.fontSize = '72px'

h1.style.color = 'gold'

h1.style.marginTop = '350px'

body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.backgroundColor = 'green'

h1.style.fontFamily = 'Roboto'