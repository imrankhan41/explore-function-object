var computer = {
    price :2900,
    storage : '16gb',
    color : 'silver',
    processor : 'intel i5'
};
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
console.log(computerPrice);
// set a object properties
computer.price = 2800;
computer["price"] = 2700;
 var priceProperty = "price"
 computer[priceProperty] = 2600;

 computer.storage ="512gb";
 computer["storage"] ="242gb";
 var storageProperty = "storage";
 computer[storageProperty] = "250gb";
console.log(computer);
