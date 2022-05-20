// 1. Create an array named numbers and store 5 number values in it
let number = [10, 6, 3, 8, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let i = 0; i < number.length; i++){
    sum = sum + number[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let sum = 0;
let average = 0;
for(let i = 0; i < number.length; i++){
    sum = sum + number[i];
    average = sum / number.length;
}
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
let highest_number = 0;
for(let i = 0; i < number.length; i++){
    if(highest_number < number[i]){
        highest_number = number[i];
    } else {}
}
console.log(highest_number);

// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest_number = 100;
for(let i = 0; i < number.length; i++){
    if(lowest_number > number[i]){
        lowest_number = number[i];
    } else {}
}
console.log(lowest_number);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for(let i = 0; i < number.length; i++){
    if(number[i] % 2 == 0){
        even[i] = number[i];
    } else{}
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for(let i = 0; i < number.length; i++){
    if(number[i] % 2 != 0){
        odd[i] = number[i];
    } else{}
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisible5 = [];
for(let i = 0; i < number.length; i++){
    if(number[i] % 5 == 0){
        divisible5[i] = number[i];
    } else{}
}
console.log(divisible5);
// 9. Log all the element of the array one by one
for(let i = 0; i < number.length; i++){
    console.log(number[i]);
}
// 10. Find all the number in the array that is divisible by 3
let divisible3 = [];
for(let i = 0; i < number.length; i++){
    if(number[i] % 3 == 0){
        divisible3[i] = number[i];
    } else{}
}
console.log(divisible3);