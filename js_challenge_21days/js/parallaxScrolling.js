(() =>{
    function onScroll(){
        const moonElem = document.querySelector('.moon');
        const wishElem = document.querySelector('.wish');

        moonElem.style.transform = `translate(${window.scrollY * 1.3}%, ${window.scrollY * -1.3}%)`;
        wishElem.style.transform = `translateY(${window.scrollY * -2.9}%)`;

        // console.log(window.scrollY);
    }

    function run(){
        document.addEventListener('scroll', onScroll);
    }
    run();
})();