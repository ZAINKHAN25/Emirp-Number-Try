function emirpNum(num) {

    let numString = num.toString().split(" ").reverse().join() - 1 + 1;

    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      } else {

        for (let si = 2; si < numString; si++) {
          if (numString % si === 0) {
            return `${false}, Reverse the Num ${numString} ${si}`;
          }
        }


      }
    }


    return true;
  }

  for(let index = 1; index <= 100; index++){
    if(emirpNum(index) === true){
      console.log(index);
    }
  }
