// 01
var res = 'res_1';
var a = 10;
var b = 5
var result = a + b;
t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 02
var res = 'res_2';
var a = '10';
var b = 2;
var result = a + b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 03
var res = 'res_3';
var a = '10';
var b = 2;
var result = a * b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 04
var res = 'res_4';
var a = '10';
var b = 3;
var result = a / b;
var t = ' (' + typeof (result) + ', float)';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 05
var res = 'res_5';
var a = '10';
var b = 3;
var result = a % b;
var t = ' (' + typeof (result) + ', resto)';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 06
var res = 'res_6';
var a = 10;
var b = true;
var result = a + b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t + ' *';

// 07
var res = 'res_7';
var a = 10;
var b = '10';
var result = a == b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 08
var res = 'res_8';
var a = 10;
var b = '10';
var result = a === b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 09
var res = 'res_9';
var a = 10;
var b = 11;
var result = a < b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 10
var res = 'res_10';
var a = 10;
var b = 12;
var result = a > b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 11
var res = 'res_11';
var a = 10;
var b = 10.1;
var result = a <= b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 12
var res = 'res_12';
var a = 10;
var b = 9.99;
var result = a > b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 13
var res = 'res_13';
var a = 10;
var b = 'dez';
var result = a != b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 14
var res = 'res_14';
var a = 10;
var b = true;
var result = a + b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t + ' *duplicado';

// 15
var res = 'res_15';
var a = 'dez';
var b = true;
var result = a + b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 16
var res = 'res_16';
var a = 10;
var b = false;
var result = a + b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 17
var res = 'res_17';
var a = 10;
var b = false;
var result = a * b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 18
var res = 'res_18';
var a = true;
var b = true;
var result = a + b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 19
var res = 'res_19';
var a = 10;
/*var b = true;*/
var result = a++;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 20
var res = 'res_20';
var a = 10;
/*var b = true;*/
var result = a--;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 21
var res = 'res_21';
var a = 1;
var b = 1;
var result = a & b; /* boolean*/
//var t = ' (' + typeof (result) + ')';
var t = ' true (boolean)';
document.getElementById(res).innerHTML = ' Resultado: ' + (a&b) + ' ' + t;

// 22
var res = 'res_22';
var a = 1;
var b = 0;
var result = a & b; /* boolean*/
//var t = ' (' + typeof (result) + ')';
var t = ' false (boolean)';
document.getElementById(res).innerHTML = ' Resultado: ' + (a&b) + ' ' + t;

// 23
var res = 'res_23';
var a = 0;
var b = 0;
var result = a & b; /* boolean*/
//var t = ' (' + typeof (result) + ')';
var t = ' true (boolean)';
document.getElementById(res).innerHTML = ' Resultado: ' + (a&b) + ' ' + t;

// 24
var res = 'res_24';
var a = 0;
var b = 1;
var result = a / b;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 25
var res = 'res_25';
var a = 5;
var b = 5;
var result = a + b == 10;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + (a+b) + ' ' + result + t;

// 26
var res = 'res_26';
var a = '5';
var b = '5';
var result = a + b == 10;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + (a+b) + ' ' + result + t;

// 27
var res = 'res_27';
var a = '5';
var b = 2;
var result = a * b > 9;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: '+ (a*b) + ' ' + result + t;

// 28
var res = 'res_28';
var a = 10;
var b = 10;
var result = (a + b) * 2;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 29
var res = 'res_29';
var a = 10;
var b = 10;
var result = (a + b) * 2;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;

// 30
var res = 'res_30';
var a = 10;
var b = 10;
var result = a + b * 2;
var t = ' (' + typeof (result) + ')';
document.getElementById(res).innerHTML = ' Resultado: ' + result + t;


