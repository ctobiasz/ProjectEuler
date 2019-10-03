function multiples(){
var sum = 0;
   for(let i=0; i<1000; i++){
     if((i % 3 == 0) || (i % 5 == 0)){
      console.log(i);
      sum = sum +=i;
    };
  }
  console.log(sum);
}
