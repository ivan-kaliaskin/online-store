import Nav from './Nav'
import Logo from './Logo'

function Header(): HTMLElement {
    const body: HTMLElement | null = document.getElementById('body')
    const header: HTMLElement = document.createElement('header')
    header.setAttribute('id', 'header')
    header.classList.add('header')

    const container: HTMLDivElement = document.createElement('div')
    container.classList.add('header-container', 'container')

    const price: HTMLDivElement = document.createElement('div')
    price.classList.add('price')

    const spanText: HTMLSpanElement = document.createElement('span')
    spanText.classList.add('price-text')
    spanText.innerHTML = 'Cart total:'

    const spanNumber: HTMLSpanElement = document.createElement('span')
    spanNumber.classList.add('price-number')
    spanNumber.innerHTML = '€0.00'

    price.append(spanText, spanNumber)

    container.append(Logo(), price, Nav())

    header.append(container)

    return header
}

export default Header