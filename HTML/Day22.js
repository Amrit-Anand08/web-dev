// // ====================== Question 1 ======================
// let nums = [12, 23, 34, 45, 56, 67, 78, 89];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }

// ====================== Question 2 ======================
// let nums = [67, 23, 34, 12, 45, 56, 89, 78];
// console.log(nums);
// let largest = nums[0];
// let smallest = nums[0];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > largest) {
//     largest = nums[i];
//   }
//   if (nums[i] < smallest) {
//     smallest = nums[i];
//   }
// }
// console.log("Smallest Number from the Array is : " + smallest);
// console.log("Largest Number from the Array is : " + largest);

// // ====================== Question 3 ======================
// let arr = [10, 20, 30, 40, 50, 60];
// console.log(arr);
// let rev = [];
// for (let i = 0; i < arr.length; i++) {
//   rev[i] = arr[arr.length - 1 - i];
// }
// console.log(rev);

// // ====================== Question 4 ======================
// let cities = ["New York", "Los Angeles", "Australia", "Delhi", "Kabul"];
// let isExist = false;
// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === "Delhi") {
//     isExist = true;
//     break;
//   }
// }
// if (isExist) {
//   console.log("Delhi Exists");
// } else {
//   console.log("Delhi Not Exists");
// }

// // ====================== Question 5 ======================
// let nums = [10, 29, 48, 47, 66];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 3 == 0) {
//     console.log(nums[i]);
//   }
// }

// // ====================== Question 6 ======================
// let arr = [];
// console.log(arr);
// for (let i = 0; i < 100; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

// // ====================== Question 7 ======================
// let arr = [
//   ["Delhi", "Mumbai"],
//   ["Laptop", "Phone"],
//   ["Bus", "Car"],
// ];
// console.log(arr[0] + " | " + arr[1] + " | " + arr[2]);
// for (let index = arr.length - 1; index >= 0; index--) {
//   console.log(arr[index]);
// }

// // ====================== Question 8 ======================
// let n = 100;
// for (let i = 2; i <= n; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// // ====================== Question 9 ======================
// let n = 1000;
// for (let i = 0; i <= n; i++) {
//   if (i % 5 == 0 && i % 30 == 0 && i % 90 == 0) {
//     console.log(i);
//   }
// }

// // ====================== Question 10 ======================
// while (1) {
//   let input = +prompt("Enter an Even to Continue : ");
//   console.log(input);
//   if (input % 2 != 0) {
//     break;
//   }
// }