//Задание 1

let test = Boolean(3);
alert(test);// true 
//Задание 2
let test = Boolean(0);
alert(test); //false
//Задание 3
let test = Boolean(-1);
alert(test);// true

//Задание 4
let test = Boolean(-0);
alert(test);//false
//Задание 5
let test = Boolean(+0);
alert(test);//false
//Задание 6
let test = Boolean('abc');
alert(test);// true
//Задание 7
let test = Boolean('');
alert(test); //false
//Задание 8
let test = Boolean('0');
alert(test); // true

//Задание 9
let test = Boolean(true);
alert(test); //true 

//Задание 10
let test = Boolean(false);
alert(test);//false

//Задание 11
let test = Boolean('true');
alert(test);// true
//Задание 12
let test = Boolean('false');
alert(test);// true

//Задание 13
let test = Boolean(null);
alert(test);//false
//Задание 14
let test = Boolean('null');
alert(test);// true

//Задание 15
let test = Boolean(undefined);
alert(test);//false

//Задание 16
let test = Boolean('undefined');
alert(test);//true

//Задание 17
let test = Boolean(NaN);
alert(test);// false

//Задание 18
let test = Boolean('NaN');
alert(test);//true
//Задание 19
let test = Boolean(3 * 'abc');
alert(test); // false
//Задание 20
let test = Boolean(Infinity);
alert(test);//true

//Задание 21
let test = Boolean(1 / 0);
alert(test); //true