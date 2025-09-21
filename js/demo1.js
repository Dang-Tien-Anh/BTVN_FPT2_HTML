var x;
x = 10; // x = number
console.log(x);
x = 'Xin chao'; // string
console.log(x);
x = true; // boolean
console.log(x);

var n = 20;
var s = "hello";
var t = n + n; // 40
var k = n + s; // 20hello
var m = s + n; // hello20

if(t > 30) {

}else {

}

var xyz = t>30?"A":"B"; // toan tu 3 ngoi

//if(t>30) {
//    xyz = "A";
//}else {
//    xyz = "B";
//}

for(var i=0; i<10; i++) {
    // var ab = "i="
    // var bc = ab+i
    // console log(bc)
    console.log("i="+i);
}

var arr = [i];
var abc = [1,2, "xinchao"];

arr[0] = 10;
arr[1]= 15;
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18
arr.push[18]; //arr[2]=18

for(var i=0;i<arr.length;i++) {
    console.log(arr[i])
}

function tinhtong(a,b) {
    //return a+b;
    console.log(a+b);
}

tinhtong(10,20);
tinhtong(15,25);
tinhtong(100,200);
tinhtong(1,2);
tinhtong("a","b");

//alert("cam nguoi duoi 18 tuoi!");

//var check = confirm("ban da du 18 tuoi hay chua?");

//if( check == true){
//    alert("Ban da chon yes");
//}else {
//    alert("Ban da chon no");
//}

//age  prompt("ban bao nhieu tuoi?"); // string "20"
//age = age + 10; // "2010"
//alert(age);
// //age = parseInt(age);
//"20" => 20
// "20ab48" => 20
// "a20" => NaN

//var lk = Math.random();
//lk = lk * 100;
//lk = parseInt(lk);
//var num = prompt("ban chon so nao");
//num = parseInt(num);
//if (num = lk) {
//    alert ("chuc mung ban da trung thuong")
//}else{
//    alert("chuc ban may man lan sau")
//}


//setTimeout(function(){
//    alert(c);
 //   c--;
//},3000); //3000ms

var c = 10;
var bom = setInterval(function(){
    alert(c);
    c--;
    if(c<0){
        clearInterval(bom);
    }
},1000)
