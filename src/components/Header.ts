import Nav from "./Nav"

function Header(): HTMLElement {
    const body: HTMLElement | null = document.getElementById('body')
    const header: HTMLElement = document.createElement('header')
    header.setAttribute('id', 'header')

    header.append(Nav())

    return header
}

export default Header