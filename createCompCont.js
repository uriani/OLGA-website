export const createCompContainer = function() {
    const createElem = function(type, parentElem, className, data) {
        const newElem = document.createElement(type);
        document.querySelector(parentElem).appendChild(newElem);
        newElem.classList.add(className);
        newElem.dataset.num = data
    }
   

    createElem('div', '.photo-container', 'comp-container', '0');

    // create 2 columns
    createElem('div', '.comp-container', 'column--1', '1');
    createElem('div', '.comp-container', 'column--2', '2');
    createElem('div', '.comp-container', 'column--3', '3')

}