// здесь собирается приложение
function createApp() {
    const aEl = document.createElement('a')
    aEl.setAttribute('id', 'a')
    aEl.innerText = 'aaa'
    const body = document.getElementById('body')
    body.append(aEl)
    return body
}


export default createApp