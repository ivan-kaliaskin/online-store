function createHeader() {
    const body = document.getElementById('body')
    const header = document.createElement('header')
    header.setAttribute('id', 'header')

    const nav = document.createElement('nav')
    nav.setAttribute('id', 'nav')

    const a1 = document.createElement('a')
    a1.setAttribute('id', 'a1')
    a1.setAttribute('href', '')
    a1.innerText = 'main'
    const a2 = document.createElement('a')
    a2.setAttribute('id', 'a2')
    a2.setAttribute('href', '')
    a2.innerText = 'shop cart'

    nav.append(a1, a2)
    header.append(nav)
    body.append(header)
}

export default createHeader