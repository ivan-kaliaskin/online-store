function onNavClick(event) {
    if (!event.target.classList.contains('a')) { return }
    const pageContainer = document.getElementById('page-container')
    console.log(event.target.id)
    switch (event.target.id) {
        case 'home':
            pageContainer.innerText = 'Home'
            break;
        case 'cart':
            pageContainer.innerText = 'Cart'
            break;
        default:
            pageContainer.innerText = '404'
            break;
    }
}

export default onNavClick