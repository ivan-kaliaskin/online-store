import Nav from "./Nav"

function Header() {
    const body = document.getElementById('body')
    const header = document.createElement('header')
    header.setAttribute('id', 'header')

    header.append(Nav())

    return header
}

export default Header