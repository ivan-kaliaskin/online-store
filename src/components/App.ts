// здесь собирается приложение
import '../styles/main.css'
import Header from './header'
import PageContainer from './PageContainer'
import Footer from './footer'
import createConfirmBuyModal from './ConfirmBuyModal'

function createApp(): HTMLDivElement {
    const appContainerEl: HTMLDivElement = document.createElement('div')
    appContainerEl.setAttribute('id', 'app-container')
    appContainerEl.classList.add('app-container')
    appContainerEl.append(Header(), PageContainer(), Footer(), createConfirmBuyModal())
    return appContainerEl
}

export default createApp