export const footerIntersecting = function() {
    let intersecting ;
    const footer = document.querySelector('footer');

    const obsCall = function(entries, observe) {
        const [entry] = entries;
        if(entry.isIntersecting) {
            return  true
        }else {
            return  false
        }

    }

    const obsOpt = {
        root: null,
        threshold: 1
    }

    const footerIntersecting = new IntersectionObserver(
        obsCall, obsOpt
    );

    footerIntersecting.observe(footer);
    
}