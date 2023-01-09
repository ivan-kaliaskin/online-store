import elements from "../constants/elements"
import onNavClick from "../services/onNavClick"
import setPageContent from "../services/setPageContent"

function Nav(): HTMLElement {
  const nav: HTMLElement = document.createElement('nav')
  nav.setAttribute('id', 'nav')
  nav.addEventListener('click', onNavClick)

  const cartIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none"><path stroke="#FF9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M22 54a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM50 54a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 10h8l6 34h32"/><path stroke="#FF9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 36h31.18a1 1 0 0 0 .981-.804l3.6-18A.999.999 0 0 0 54.78 16H16"/></svg>`

  const cartLink: HTMLAnchorElement = document.createElement('a')
  cartLink.setAttribute('id', 'cart')
  cartLink.addEventListener('click', () => setPageContent('cart'))

  cartLink.classList.add('header-cart')
  cartLink.setAttribute('href', '#')
  cartLink.innerText = 'cart'
  cartLink.innerHTML = cartIcon

  const cartTotal: HTMLDivElement = document.createElement('div')
  cartTotal.classList.add('header-cart__total')
  elements.cartTotal = cartTotal
  cartTotal.innerText = '0'

  cartLink.append(cartTotal)

  nav.append(cartLink)

  return nav
}

export default Nav