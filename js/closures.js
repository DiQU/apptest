var a = 10,
  b=30;

(function() {
  var a = 20;
  console.log("內部a" + a);
  return a; //a=20
})();

console.log(a,b); //10
