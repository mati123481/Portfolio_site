
var ip1= "";
var ip2 = "";
let operator= "";
let secondOp ="";
let out = "";
var a = document.querySelector('.buttons');
let result = document.getElementById("result");

function appendNumber(num) {
	if (secondOp) {
		ip1 = ip1.concat(num);
	document.getElementById("i1").textContent= ip1;
	
	} else {
		ip1 = ip1.concat(num);
	document.getElementById("i1").textContent= ip1;
	}
		
}
function appendOperator(opr) {
	
	if (!operator) {
		operator = opr;
		document.getElementById("operator").textContent= operator;
	ip2 = ip1;
 	ip1 = "";
 	document.getElementById("i2").textContent= ip2;
	}
	 else if (out && ip1) {
	 	calculateResult();
	 	operator = opr;
	 	document.getElementById("operator").textContent= operator;
	 	document.getElementById("i2").textContent= out;
	 }
	 else if (out && !ip1) {
	 	operator = opr
	 	calculateResult();
	 	document.getElementById("operator").textContent= operator;
	 }
else{
	calculateResult();
	operator = opr
	document.getElementById("operator").textContent= operator;
}
document.getElementById("i1").textContent= "0";
console.log('oprators'+ operator)

 	}
 
function calculateResult() {
	if (out && ip1) {
		document.getElementById("i2").textContent= out;
		out = parseFloat(out);
		ip1 = parseFloat(ip1);
	autoCalculat(ip1, out, operator);
}
else if(ip1 && ip2) {
ip1 =	parseFloat(ip1);
ip2 =	parseFloat(ip2);
	autoCalculat(ip1, ip2, operator);
}
else if(ip1 && secondOp){
	autoCalculat(ip1, 0, secondOp);
}
else{
	display(out);
}
 }

function display(val) {
document.getElementById("result").value= val;
ip2 = "";
ip1 ="";
}

function autoCalculat(i1, i2, o) {

		switch (o) {
	case '+':
		out = i2 + i1;
		display(out);
		console.log(out);
		break;
	case '-':
		out = i2 - i1;
		display(out);
		console.log(out);
		break;
	case '*':
		out = i2 * i1;
		display(out);
		console.log(out);
		break;
	case '/':
		out = i2 / i1;
		display(out);
		console.log(out);
		break;
		case '%':
out = i2 % i1;
display(out);
console.log(out);
break;
	case '1/2':
		out = Math.sqrt(ip1);
		special(out);
		console.log(out);
		break;
		case '1/3':
out = Math.cbrt(ip1);
special(out);
console.log(out);
break;
case 'x2':
out = Math.pow(ip1,2);
special(out);
console.log(out);
break;
case 'logx':
out = Math.log(ip1);
special(out);
console.log(out);
break;

	default:
display(out);
}
}

function check() {
	
	 if(ip2 && !out){
 	ip1 = parseInt(ip1);
 	ip2 = parseInt(ip2);
 	console.log("both inputs "+ip1,ip2);
  autoCalculat(ip1,ip2,operator);
 }
  else {
 	out = parseInt(out);
 	ip1 = parseInt(ip1);
 	autoCalculat(ip1, out, operator);
 	
 }
}

function clearDisplay(){
	document.getElementById("operator").textContent= "oprator";
	 	document.getElementById("i2").textContent= "0";
	 	document.getElementById("i1").textContent= "0";
	 	result.value= "0";
}
function special(a) {
	result = 
result.value= a;
}
function operate(param) {
secondOp = param;
document.getElementById("operator").textContent= secondOp;
return secondOp;
}
function deleteLast(){
	let len = result.value;
	let x = len.length-1;
	if (x > 0) {
		let b = len.slice(0, x);
result.value = b;
console.log('reduced data :' + b);
console.log('reduced :' + x);
console.log('length ' + len.length);
out = b;
	}
else {
	result.value = 0;
	out = 0;
}
}