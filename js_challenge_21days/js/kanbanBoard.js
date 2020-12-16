(() => {

    let draggingElem;

    function onDragStart(){
        draggingElem = this;
        // console.log(this);
    }
    
    function onDrop(){
        this.append(draggingElem);
        draggingElem = null;
    }

    function onDragOver(event){
        event.preventDefault();
    }

    function onDragEnter(event){
        event.preventDefault();
    }

    function run(){
        const taskElem = Array.from(document.querySelectorAll('.task'));
        const dropZoneElem = Array.from(document.querySelectorAll('.drop-zone'));
        // console.log(taskElem);

        taskElem.forEach((taskElem) => {
            taskElem.addEventListener('dragstart', onDragStart);
        })

        dropZoneElem.forEach((dropZoneElem) => {
            dropZoneElem.addEventListener('drop', onDrop);
            dropZoneElem.addEventListener('dragover', onDragOver);
            dropZoneElem.addEventListener('dragenter', onDragEnter);
        })
    }
    run();
})();