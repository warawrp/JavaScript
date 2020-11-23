(() => {
    // 1. Asynchronous code works in js
        //  function asynAPI(text, timeout){
        //     setTimeout(() => console.log(text,timeout));
        //  }
        //  asynAPI('A', 1000);
        //  asynAPI('B', 500);
        //  asynAPI('C', 100);

    // 2. Callback
        // function asynAPI(text, timeout, callback){
        //     setTimeout(() => {
        //         console.log(text) 
                
        //         if(callback){
        //             callback();
        //         };
        //     },timeout);
        // }
        // asynAPI('A', 1000, ()=>{
        //     asynAPI('B', 500, ()=>{
        //         asynAPI('C', 100)
        //     });
        // });
    // 3. Promise
        // function asynAPI(text, timeout){
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             if(text === 'B') return reject('B got rejected');
        //             console.log(text);
        //             resolve();
        //         }, timeout);
        //     });
        // }
        // asynAPI('A', 1000)
        //     .then(() => {
        //        return asynAPI('B', 500);
        //     })
        //     .then(() => {
        //         return asynAPI('C', 100);
        //      })
        //     .catch((error) => {
        //         console.error(error);
        //     })

    // 4. Async/Await
        function asynAPI(text, timeout){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    // if(text === 'B') return reject('B got rejected');
                    console.log(text);
                    resolve();
                }, timeout);
            });
        }
        async function run(){
            try{
                await asynAPI('A', 1000);
                await asynAPI('B', 500);
                await asynAPI('C', 100);
            }catch(error){
                console.error(error);
            }
        }
        run();
})();