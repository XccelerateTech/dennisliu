const reverse = (number) => {
    var num = [];
    var string = (number.toString()).split('');
   for (var i=0; i<string.length;i++){
       num.push(Number(string[i]))
   }
   num.sort((a,b) => {
       return b > a;
   })
       
console.log(num)
}

reverse(12345);

