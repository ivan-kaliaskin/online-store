function createLogo(): HTMLElement {
  const logoContainer: HTMLDivElement = document.createElement('div')
  logoContainer.classList.add('logo')

  const link: HTMLAnchorElement = document.createElement('a')
  link.classList.add('logo-link')
  link.setAttribute('href', '#')

  const logoImage: HTMLDivElement = document.createElement('div')
  logoImage.classList.add('logo-image')
  logoImage.innerHTML = '🛍'

  const logoText: HTMLHeadingElement = document.createElement('h1')
  logoText.classList.add('logo-title')
  logoText.innerHTML = 'Online Store'

  link.append(logoImage, logoText)

  logoContainer.append(link)

  return logoContainer
}

export default createLogo