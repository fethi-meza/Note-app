var MemoryStorage = require("memorystorage");
// here, the MemoryStorage function is available
var store = new MemoryStorage("Note-app");

exports.getKeys = (store) => {
   
    var keys =[] ;

  for (var i = 0; i < store.length; i++) {
    var key = store.key(i);
    keys.push(key)
  }
  return keys ;
};




exports.getvaluse = (store) => {
   
    var valuse =[] ;

  for (var i = 0; i < store.length; i++) {
    var key = store.key(i);
    var value = store.getItem(key); 
    valuse.push(value)
  }
  return valuse ;
};

exports.store = store;
