// 1.positive numbers

let num= [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
document.write("Elements stored in the array are: "+num)
document.write("<br>")
let result=num.filter(function(e){
	
	return e>=0;
});
document.write("Positive numbers in the array are: "+result);




