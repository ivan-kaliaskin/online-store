function createFooter() {

  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')
  footer.classList.add('footer')

  const container = document.createElement('div')
  container.classList.add('container', 'footer-container')

  footer.append(container)

  return footer
}

export default createFooter