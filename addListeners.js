function addListeners(elements, listeners) {
  elements.forEach((element) => {
    Object.entries(listeners).forEach(([event, listener]) => {
      element.addEventListener(event, listener);
    });
  });
}

addListeners(
  elementsArray,
  {
    event.type: listener,
    event.type: listener,
    event.type: listener,
    //and so on
  }
);