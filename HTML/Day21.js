// // ======= Question 1 =======
// let fruit = ["Apple", "Ball", "Cat", "Dog", "Zebra"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// // ======= Question 2 =======
// let city = ["Noida", "Gurugram", "Delhi", "Punjab", "Kerala"];
// for (let i = 0; i < city.length; i++) {
//   if (city[i] === "Delhi") {
//     console.log("Delhi is at index : " + i);
//   }
// }

// // ======= Question 3 =======
// let myArray = [];
// for (let i = 0; i < 5; i++) {
//   myArray[i] = prompt("Enter the " + i + "th element of Alphabets");
// }
// console.log(myArray);
// let find = prompt("Enter Alphabet you want to find");
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === find) {
//     console.log(find + " is at index : " + i);
//   }
// }

// // ======= Question 4 =======
// let nums = [1,2,3,4,5]
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }
// console.log(sum);

// // ======= Question 5 =======
// let nums = [1, 12, 3, 40, 5];
// console.log(nums);
// let largest = nums[0];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > largest) {
//     largest = nums[i];
//   }
// }
// console.log("Largest Number from the array is : " + largest);

// // ======= Question 6 =======
// let nums = [1, 12, 3, 40, 5];
// console.log(nums);
// for (let i = nums.length - 1; i >= 0; i--) {
//   console.log(nums[i]);
// }

// // ======= Question 7 =======
// let nums = [1, 12, 3, 40, 5];
// console.log(nums);
// let evenCount = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i]%2 == 0) {
//     evenCount += 1;
//   }
// }
// console.log("no. of even elements are : " + evenCount);

// // ======= Question 8 =======
// let names = ["Amrit", "Diya", "Abhas", "Tanu", "Kanak", "Abhinesh"];
// console.log(names);
// for (let i = 0; i < names.length; i++) {
//   if (names[i].charAt(0) === "A") {
//     console.log(names[i]);
//   }
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// // ======= Question 9 =======
// let myArray = [10, 20, 30, 40, 50, 60];
// console.log(myArray);
// let find = +prompt("Enter what you want to find");
// let flag = false;
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === find) {
//     console.log(find + " is at index : " + i);
//     flag = true;
//     break;
//   }
// }
// if (!flag) {
//   console.log("Item Not Found");
// }

// // ======= Question 10 =======
// let num = +prompt("Enter the Number : ");
// if (num > 50) {
//   console.log("High");
// } else {
//   console.log("low");
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% REST ARE EASIEST AS HELL %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%