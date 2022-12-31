function attributeRender(element: HTMLElement, options ) {
  Object.keys(options).forEach(function (attr) {
    element.setAttribute(attr, options[attr]);
  })
}

export default attributeRender