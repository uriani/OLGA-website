export const createPadPlaceholder = function() {
    const createElem = function(type, parentElem, className, data) {
        const newElem = document.createElement(type);
        document.querySelector(parentElem).appendChild(newElem);
        newElem.classList.add(className);
        newElem.dataset.num = data
    }
    
    
}