document.addEventListener("DOMContentLoaded", function(){
  const element = document.querySelector('#target');

  const chartersCount = document.querySelector('#charters');
  const expirience = document.querySelector('#years');
  const passengers = document.querySelector('#passengers');

  const waiter = (ms = 1000) => {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(true);
          }, ms);  
      });
  };

  const statsAnimator = async (elemsArray, timing = 300) => {
      await waiter(800);
      for await (elem of elemsArray) {
        const endVal = +elem.innerHTML;
          if(endVal > 100) {
            for(let i = 0; i <= endVal/100; i++){
              await waiter(timing/endVal);
              elem.innerHTML = i*100;
            };
            return;
          } else {
            for(let i = 0; i <= endVal; i++){
                await waiter(timing/endVal);
                elem.innerHTML = i;
            };
          }
      }
  }

  statsAnimator([chartersCount, expirience, passengers], 800);

});