import onNavClick from "../services/onNavClick"

function Nav(): HTMLElement {
    const nav: HTMLElement = document.createElement('nav')
    nav.setAttribute('id', 'nav')
    nav.addEventListener('click', onNavClick)

    const a1: HTMLAnchorElement = document.createElement('a')
    a1.setAttribute('id', 'home')
    a1.classList.add('a')
    a1.setAttribute('href', '#')
    a1.innerText = 'home'
    const a2: HTMLAnchorElement = document.createElement('a')
    a2.setAttribute('id', 'cart')
    a2.classList.add('a')
    a2.setAttribute('href', '#')
    a2.innerText = 'cart'

    nav.append(a1, a2)

    return nav
}

export default Nav