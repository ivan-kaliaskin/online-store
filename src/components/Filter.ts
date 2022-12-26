import filterItemRender from "./FilterItemRender"

function createFilter(): HTMLElement {

  const categoryList: string[] = ['smartphones', 'laptops', 'fragrances','skincare','groceries','home-decoration','furniture','tops','womens-dresses','womens-shoes','mens-shirts','mens-watches','womens-watches','womens-bags','womens-jewellery','sunglasses','automotive','motorcycle','lighting']

  const brandList: string[] = ['Apple','Samsung', 'Huawei', 'Microsoft Surface','Infinix','HP Pavilion','Impression of Acqua Di Gio','Royal_Mirage','Fog Scent Xpressio','Al Munakh','Lord - Al-Rehab',`L'Oreal Paris`,'Hemani Tea','Dermive','ROREC White Rice','Fair & Clear','Saaf & Khaas','Bake Parlor Big','Baking Food Items','fauji','Dry Rose','Boho Decor','Flying Wooden','LED Lights','luxury palace','Golden']
  
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

  filter.append(category, brand)

  return filter
}

export default createFilter