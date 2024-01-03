// task 1
let num = 1235;
 if (String(num)[0] == '1'){
    console.log('верно');
 }

 // task2
 let first = String(num);
 if (first[first.length - 1] == '0' || first[first.length - 1] == '2' || first[first.length - 1] == '4' || first[first.length - 1] == '6' || first[first.length - 1] == '8') {
     console.log('четное');
 } else {
     console.log("нечетное");
 } 