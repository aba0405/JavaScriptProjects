const str = 'Leetcode'

//Way 1
let myReverseStr = '';
for(let i= str.length-1; i >=0; i--){
 //myReverseStr = myReverseStr+ str[i];
 myReverseStr += str[i];
}
console.log(myReverseStr);


//Way 2
let myReverseStr = '';
for(let i= str.length-1; i >=0; i--){
 //myReverseStr = myReverseStr+ str[i];
 myReverseStr += str.charAt[i];
}
console.log(myReverseStr);

//Way 3
let myStr = str.split('')
let myRev = myStr.reverse.join('');
console.log(myRev);