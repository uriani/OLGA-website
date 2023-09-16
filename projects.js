import {createPhotos} from './createPhotos.js'

document.querySelectorAll('.photo-container').forEach(function(el, i) {
    createPhotos(el, `/images/${i + 1}.jpg`);
})

document.querySelectorAll('.projects').forEach(function(e) {
    e.addEventListener('click', function() {
        
    })
})