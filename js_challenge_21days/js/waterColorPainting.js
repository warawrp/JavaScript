(() =>{
    const canvas = document.getElementById('painting');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');
    // จุดเริ่มต้น
    let previousPoint = {x: 0, y: 0};

    // คำนวณระยะทางระหว่างจุดสองจุด
    function getDistance(previousPoint, currentPoint){
        return Math.sqrt((previousPoint.x - currentPoint.x)**2 +(previousPoint.y - currentPoint.y)**2)
    }

    function onMouseMove({ pageX, pageY }){
        const currentPoint = {x: pageX, y: pageY};
        
        // จุดปัจจุบัน
        context.beginPath();

        // style
        // จุดจบเส้นเป็นวงกลม
        context.lineCap = 'round';

        // จุดตัดของเส้นสองเส้น
        context.lineJoin = 'round';

        // ระยะห่างระหว่างจุดสองจุด
        const distance = getDistance(previousPoint, currentPoint);

        // ความกว้างของเส้น
        // ขนาดเส้นวาดคงที่
        // context.lineWidth = 20;
        // ขนาดเส้นวาดไม่คงที่
        context.lineWidth = Math.random() / distance *20;
        
        // ค่า opacity สูงสุด
        const opacity = Math.min(0.5, 1/distance);
        context.strokeStyle = `rgba(70, 130, 180,${opacity})`;

        // จุดเริ่มต้นที่เริ่มวาด จุดที่เมาท์อยู่อันก่อน
        context.moveTo(previousPoint.x, previousPoint.y);
        //วาดไปจุดที่เมาท์อยู่ปัจจุบัน
        context.lineTo(currentPoint.x, currentPoint.y);

        context.stroke();
        context.closePath();

        previousPoint = currentPoint;
    }
    function onMouseEnter({pageX, pageY}){
        previousPoint.x = pageX;
        previousPoint.y = pageY;
    }

    function run(){
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseenter', onMouseEnter);
    }
    run();
})();