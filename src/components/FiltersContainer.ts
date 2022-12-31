import filterItemRender from "./FilterItemRender"
import attributeRender from "./AttributeRender"
import Filter from "./Filter"

function createFilter(): HTMLElement {

  const categoryList: string[] = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration', 'furniture', 'tops', 'womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-watches', 'womens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses', 'automotive', 'motorcycle', 'lighting']

  const brandList: string[] = ['Apple', 'Samsung', 'Huawei', 'Microsoft Surface', 'Infinix', 'HP Pavilion', 'Impression of Acqua Di Gio', 'Royal_Mirage', 'Fog Scent Xpressio', 'Al Munakh', 'Lord - Al-Rehab', `L'Oreal Paris`, 'Hemani Tea', 'Dermive', 'ROREC White Rice', 'Fair & Clear', 'Saaf & Khaas', 'Bake Parlor Big', 'Baking Food Items', 'fauji', 'Dry Rose', 'Boho Decor', 'Flying Wooden', 'LED Lights', 'luxury palace', 'Golden']

  const filter: HTMLDivElement = document.createElement('div')
  filter.classList.add('filters')

  const category: HTMLDivElement = document.createElement('div')
  category.classList.add('filters-category')

  const categoryTitle: HTMLHeadingElement = document.createElement('h3')
  categoryTitle.classList.add('filter-title')
  categoryTitle.innerHTML = 'Category'

  category.append(categoryTitle)

  const brand: HTMLDivElement = document.createElement('div')
  brand.classList.add('filters-brand')

  const brandTitle: HTMLHeadingElement = document.createElement('h3')
  brandTitle.classList.add('filter-title')
  brandTitle.innerHTML = 'Brand'

  brand.append(brandTitle)

  filterItemRender(categoryList, category)
  filterItemRender(brandList, brand)

  const price: HTMLDivElement = document.createElement('div')
  price.classList.add('filters-price')

  const priceTitle: HTMLHeadingElement = document.createElement('h3')
  priceTitle.classList.add('filter-title')
  priceTitle.innerHTML = 'Price'

  const priceInner: HTMLDivElement = document.createElement('div')
  priceInner.classList.add('filter-price-inner')

  const priceSliderInput: HTMLInputElement = document.createElement('input')
  priceSliderInput.classList.add('filter-price-input')
  attributeRender(priceSliderInput, { 'id': 'min-price', 'inputmode': 'decimal', 'name': 'min-price', 'placeholder': 'min' })

  const priceSliderInput2: HTMLInputElement = document.createElement('input')
  priceSliderInput2.classList.add('filter-price-input')
  attributeRender(priceSliderInput2, { 'id': 'max-price', 'inputmode': 'decimal', 'name': 'max-price', 'placeholder': 'max' })

  const separator: HTMLDivElement = document.createElement('div')
  separator.classList.add('filter-price-separator')

  priceInner.append(priceSliderInput, separator, priceSliderInput2)
  price.append(priceTitle, priceInner)

  const btns: HTMLDivElement = document.createElement('div')
  btns.classList.add('filter-btns-wrapper')

  const btnReset: HTMLButtonElement = document.createElement('button')
  btnReset.classList.add('filter-btn', 'btn-reset')
  btnReset.innerHTML = 'Reset Filters'

  const btnCopy: HTMLButtonElement = document.createElement('button')
  btnCopy.classList.add('filter-btn', 'btn-copy')
  btnCopy.innerHTML = 'Copy Link'

  btns.append(btnReset, btnCopy)

  filter.append(category, brand, price, btns)

  return filter
}

export default createFilter