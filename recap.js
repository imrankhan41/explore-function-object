var favouriteBook = '4 hour per week';
var booklist = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = booklist.indexOf('shoe dog');
booklist[1] = 'story band';

booklist.push('crow');
booklist.pop();
booklist.unshift('booker')
booklist.shift();
console.log(booklist);
if (booklist[1] == 'hooked'){
    console.log('i am hooked');
}
else{
    console.log('i am not hooked');
}

// var i=0;
// while (i<15){
//     console.log(i);
//     console.log('loop will be running');
//     i++;
// }
var items = [1,2,3,4,5,6,7,8,9,0,12,1,2,1,2]
for(var i = 0; i < 15 ; i++){
    var item = items[i];
    console.log(item);
}