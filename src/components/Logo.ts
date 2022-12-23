function createLogo(): HTMLElement {
  const logoContainer: HTMLDivElement = document.createElement('div')
  logoContainer.classList.add('logo')

  const link: HTMLAnchorElement = document.createElement('a')
  link.classList.add('logo-link')
  link.setAttribute('href', '#')

  const logoText: HTMLHeadingElement = document.createElement('h1')
  logoText.classList.add('logo-title')
  logoText.innerHTML = 'Online Store'

  link.append(logoText)

  logoContainer.append(link)

  return logoContainer
}

export default createLogo