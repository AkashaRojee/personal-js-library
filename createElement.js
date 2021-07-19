function createElement(elementType, classNames = '', attributes = {}, innerHTML = '', properties = {}) {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  Object.keys(properties).forEach((property) => {
    elementObject[property] = properties[property];
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}

/*

createElement(

  tag name,
  
  'class1 class2 class3 ...',
  
  {
    attribute name: attribute value,
    attribute name: attribute value,
    attribute name: attribute value,
    ...
  },
  
  'innerHTML',
  
  {
    property name: property value,
    property name: property value,
    property name: property value,
    ...
  }

)

*/