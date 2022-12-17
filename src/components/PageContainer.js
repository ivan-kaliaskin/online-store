import onNavClick from "../services/onNavClick"

function PageContainer() {
    const main = document.createElement('main')
    main.setAttribute('id', 'page-container')
    main.innerText = 'text'
    return main
}

export default PageContainer