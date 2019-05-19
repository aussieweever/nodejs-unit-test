function sum(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
  // if(isNaN(num1) || isNaN(num2)) {
    throw new Error('Need a number');
  }  
  
  return num1 + num2;
}

module.exports.sum = sum;