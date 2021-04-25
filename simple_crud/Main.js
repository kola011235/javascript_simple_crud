const {StorageService} = require('./StorageService.js');
const storageService = new StorageService();

console.log("--- ADD CHECK ---")
storageService.add();
storageService.add({item : "new object"});
storageService.add(["this is ", "an array", 808]);
storageService.add({item:"and one more object"});
console.log(storageService.getAll());

console.log("--- GET CHECK ---");
console.log(storageService.getByID("0"));
console.log(storageService.getByID("1"));
console.log(storageService.getByID("3"));
console.log(storageService.getByID("line"));
console.log(storageService.getByID());

console.log("--- DELETE CHECK ---");
console.log(storageService.deleteByID());
console.log(storageService.deleteByID("3"));
console.log(storageService.deleteByID("line"));
console.log(storageService.deleteByID("0"));

console.log("--- UPDATE CHECK ---");
storageService.updateByID();
storageService.updateByID(1);
storageService.updateByID(5,0);
storageService.updateByID(2,{item : "new string"});
storageService.updateByID(2,[1]);
storageService.updateByID(1,{0:"THIS IS"});
console.log(storageService.getAll());

console.log("--- REPLACE CHECK ---")
storageService.replaceByID();
storageService.replaceByID("2",{3: "NEW OBJECT WOW"});
console.log(storageService.getAll());