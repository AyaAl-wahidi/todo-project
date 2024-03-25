'use strict'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let exArray = ['C#', 'JS', 'Ruby','Python',2,2,2,5,];
// const reverseArray = (arr)=>{
//     // write your code here
//     let rearr = [];
//     let j = 0;
//     for (let i = arr.length-1  ; i >= 0; i--){
//         rearr[j] = arr[i];
//         j++;
//     }
//     return rearr;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const reverseArray = (arr) => {
//     let revArray =[];
//     let arrLength = arr.length-1
//     for (let i = 0 ; i < arr.length ; i++) {
//         revArray[i] = arr[arrLength]
//         arrLength -=1;
//     }
//     return revArray;
// }
// console.log(reverseArray(exArray));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let exArray = ['C#', 'JS', 'Ruby','Python',2,2,2,5,];
// const reverseArray = (arr)=>{
//     // write your code here
//     let rearr = [];
//     let j = 0;
//     for (let i = arr.length-1  ; i >= 0; i--){
//         rearr[j] = arr[i];
//         j++;
//     }
//     return rearr;
// }
// console.log(reverseArray(exArray));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let exArray = [20, '234', 'car', 41, 20, 'chair']

// const sumNums = (arr)=>{
//     let sum = 0;
//     // write your code here
//     for (let i = 0; i < arr.length; i++) {
//             if(arr[i] *1 === arr[i]) {
//                 sum += arr[i];
//             }

//     }
//     return sum;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const sumNums = (arr)=>{
//     let sum;
//     sum =0;
//     for ( let i=0 ; i < arr.length ; i++ ){
//         if ( arr[i] +1 -1 === arr[i]  )
//         {
//          sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumNums(exArray))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of integers and returns how many even numbers and odd numbers was there.

// let exArray = [12, 4, 8, 6, 9, 11];
// const oddEvenCountFunction = (arr) => {
//     let oddN = 0;
//     let evenN = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenN += 1;
//         } else
//             oddN += 1;
//     }
//     return "The Odd numbers are : " + oddN + " , The Even numbers are : "+ evenN;
// }
// console.log(oddEvenCountFunction(exArray));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that takes two arrays of equal length and returns a new array with the sum of the corresponding elements from each array.

// let array1 = [12, 4, 8, 6, 9, 11];
// let array2 = [12, 4, 8, 6, 9, 11];
// let finalArray = [];

// const sumOfTwoArray = (arr1 , arr2) => {
//     for(let i = 0 ; i < arr1.length ; i++){
//         finalArray[i] = arr1[i] + arr2[i]
//     }
//     return finalArray;
// }
// console.log(sumOfTwoArray(array1 , array2));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of integers and returns the second largest number in the array.


// let array = [12, 40, 43 ,100 , 44 , 8, 12, 19, 20, 23];
// const secondMaxNumberOfArray = (arr) => {
//     let max1 = arr[0];
//     let max2 = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         if (max1 < arr[i]){
//             max2 = max1;
//             max1 = arr[i];
//         } else if (max2 < arr[i] && arr[i] !== max1){
//             max2 = arr[i];
//         }
//     }
//     return max2;
// }
// console.log(secondMaxNumberOfArray(array));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of integers and removes all the duplicates in the array.
// let exArray = [2, 2 , 5 , 5 , 6 , 8 , 9 , 9]

// const deleteDupNumber = (arr) => {
//     let finalArray = []
//     let x = 0 ;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arr[i +1]){
//             finalArray[x] = arr[i];
//             x++;
//         }
//     }
//     return finalArray;
// }
// console.log("This is The final Array result : " + deleteDupNumber(exArray));

//////////////////////////////////////////////////////////////////////////////////////////////////////////


