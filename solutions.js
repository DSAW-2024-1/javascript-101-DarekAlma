// Sum of Two Numbers
function sum(a, b) {
  if (typeof a=='number' && typeof b=='number'){
    return a+b;
  }
  else{
    return "Tipo de dato no valido";
  }
  // Add your code here
}

// Factorial of a Number
function factorial(n) {
  if(typeof n=='number' && n>=0){
    let resultadofacto=1;
    for (let i=1;i<=n;i++){
      resultadofacto*=i
    }
    return resultadofacto
  }
  else{
    return "Tipo de dato no valido";
  }
  // Add your code here
}

// Find the Largest Number
function findLargest(arr) {
  let mayornum=arr[0];
  for (let i=1;i< arr.length;i++){
    if (typeof arr[i]=='number'){
      if (arr[i]>mayornum){
        mayornum=arr[i];
      }
    }
    else{
      return "Tipo de dato no valido"
    }
  }
  return mayornum;

  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  let numvocales=0;
  if (typeof str =='string'){
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase()== "a" || str[i].toLowerCase()== "e" || str[i].toLowerCase()== "i" || str[i].toLowerCase()== "o" || str[i].toLowerCase()== "u"){
        numvocales++;
      }    
    }
    return numvocales;
  }
  else{
    return "Tipo de dato no valido"
  }
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n=='number'){
    if( n <= 1){
      return false
    }

    for (let i = 2; i <=Math.sqrt(n); i++){
      if (n % i ==0){
        return false;
      }   
    }
    return true;   
  }
  else{
    return "dato no valido"
  }
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
