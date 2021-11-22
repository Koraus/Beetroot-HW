function isTen(a){
    if(a === 10){
      return true;
    }
  }
  
  function isTenInDiapazonChysel(firstN, endN) {

    let b; 
    
    for (let i = firstN ; i <= endN ; i++ ){
      
        if (isTen(i) == true) {
          
            c =  'Is';  
          console.log(c);
        } else { 
              c = 'nema';
              console.log(c);
               };
  
   } 
  }
  let c;
    console.log(isTenInDiapazonChysel (9, 12));
    console.log(c);