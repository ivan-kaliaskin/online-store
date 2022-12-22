import render from "../services/renderHomePageContent";

let items: Array<string> = [/*{ name: 'hardcode item 1' }, { name: 'hardcode item 2' }*/]
fetch('https://dummyjson.com/products')
    .then(res => {
        const result = res.json()
        return result
    })
    .then(result => {
        items = (result).products.map((product) => product.title)
        render(items)
    })
    .catch();

export default items