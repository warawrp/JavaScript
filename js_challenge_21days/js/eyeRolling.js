(() => {

    function run(){
        const bodyElem = document.querySelector('body');
        const eyeElems = document.querySelectorAll('.eye');

        function onMouseMove({pageX, pageY}){
            eyeElems.forEach((eyeElem) => {
                const {left, top} = eyeElem.getBoundingClientRect();

                const eyeCenterX = left + eyeElem.offsetWidth / 2;
                const eyeCenterY = top + eyeElem.offsetHeight / 2;
                const radain = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
                const angle = radain * 180 / Math.PI * -1;
                eyeElem.style.transform = `rotate(${angle}deg)`;
                // console.log(angle);
            });
            // console.log(pageX, pageY);
        }
        bodyElem.addEventListener('mousemove',onMouseMove);
    }
    run();
})();