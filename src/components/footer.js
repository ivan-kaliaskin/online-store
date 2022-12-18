function createFooter() {

  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')
  footer.classList.add('footer')

  const container = document.createElement('div')
  container.classList.add('container', 'footer-container')

  const text = document.createElement('p')
  text.classList.add('footer-text')
  text.innerHTML = 'Online Store 2022'

  container.append(text)
  footer.append(container)

  return footer
}

export default createFooter