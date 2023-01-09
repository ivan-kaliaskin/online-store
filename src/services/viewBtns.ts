function viewBtns(event) {

  const target = event.target
  const viewBarChilds = event.target.closest('.view-bar').childNodes
  const item = target.closest('.view-bar-button')
  const productsContainer: HTMLElement | null = document.querySelector('.home-page-items-container')

  if (item) {
    if (!item.classList.contains('view-bar-button--active')) {
      viewBarChilds.forEach( element => {
        element.classList.remove('view-bar-button--active')
      })
      item.classList.add('view-bar-button--active')
    }

    if (item.classList.contains('view-bar-button--big')) {
      productsContainer?.classList.remove('grid-small')
      productsContainer?.classList.add('grid-standart')
    }

    if (item.classList.contains('view-bar-button--small')) {
      productsContainer?.classList.remove('grid-standart')
      productsContainer?.classList.add('grid-small')
    }
  }

}

export default viewBtns