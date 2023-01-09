import Options from "../interfaces_and_types/TypeOptions";

function attributeRender(element: HTMLElement, options: Options) {
  Object.keys(options).forEach(function (attr) {
    element.setAttribute(attr, options[attr as keyof Options]);
  })
}

export default attributeRender