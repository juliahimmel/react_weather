const names = ['Andrew', 'Julie', 'Sam'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach(name => console.log('forEach2', name));

var add = (a, b) => a + b;

add(2,3);

console.log(add(2,3));
