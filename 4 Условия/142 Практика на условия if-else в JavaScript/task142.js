// task 1
let month = 5;
if (month >= 3 && month <= 5){
    console.log('spring');
}else if (month >= 6 && month <= 8){
    console.log('summer');
}else if (month >= 9 && month <= 11){
    console.log('autumn');
}else if (month <= 2 || month == 12){
    console.log('winter');
}else{
    console.log('no month');
}

// task 2
let str = 'abcde';

if (str[0] == 'a') {
	console.log('Да');
} else {
    console.log('Нет');
}

// task 3
let num_3 = 1234;
let str_3 = String(num_3);

if (str_3[0] == '1' || str_3[0] == '2' || str_3[0] == '3') {
 console.log('Да');
} else {
    console.log('Нет');
}

   
// task 4
let arr = 123;
let str_4 = String(arr);
let x = 0;
let sum = 0;

if (Number(str_4) !== 0) {
  for (let i = 0; i < str_4.length; i++) {
    x = Number(str_4[i]);
    sum = sum + x;
  }
  console.log(sum);
}


// task 5
let num8 = 123456;
let y = String(num8);

let sum1 = Number(y[0]) + Number(y[1]) + Number(y[2]);
let sum2 = Number(y[3]) + Number(y[4]) + Number(y[5]);

if (sum1 === sum2) {
    console.log('суммы равны');
} else {
    console.log('суммы не равны');
}
