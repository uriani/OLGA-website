export const createPadContainer = function() {
    const createElem = function(type, parentElem, className, data) {
        const newElem = document.createElement(type);
        document.querySelector(parentElem).appendChild(newElem);
        newElem.classList.add(className);
        newElem.dataset.num = data
    }
   

    createElem('div', '.photo-container', 'pad-container', '0');

    // create 2 columns
    createElem('div', '.pad-container', 'column--1', '1');
    createElem('div', '.pad-container', 'column--2', '2')

    

}