function viewBtns(event: Event) {

  const target = event.target
  const viewBarChilds = (event.target as HTMLDivElement).closest('.view-bar')!.childNodes
  const item = (target as HTMLDivElement).closest('.view-bar-button')
  const productsContainer: HTMLElement | null = document.querySelector('.home-page-items-container')

  if (item) {
    if (!item.classList.contains('view-bar-button--active')) {
      viewBarChilds.forEach(element => {
        (element as HTMLDivElement).classList.remove('view-bar-button--active')
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