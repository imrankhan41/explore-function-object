var phones = ['iphone', 'samsung', 'LG', 'htc'];
phones [3] = 'walton';

if (phones.indexOf('oppo') == -1){
    console.log ('oops! i will not get it ' );
}

if (phones.indexOf('lg') != -1){
    console.log ('lg will  be available  ' );
}

// loop
var num =0;
while (num <=20){
    num ++;

}

for (var i=0; i<phones.length; i++){

}
// function
function addThreenum(num1,num2,num3){
    var total = num1 + num2 + num3;
    return total;
}
addThreenum(87,41,56);

// object
var microphone ={
    brand : 'blue yeti',
    color : 'black',
    
}