//This algorithm is not mine 
function decompose(n) {
  var [a, b] = isNaN(n) ? n.split('/').map(Number) : [Number(n), 1], res = [];
  while(a%1) [a, b] = [a*10, b*10];
  console.log(a,b);
  if (a>b) {
    res.push(String(a/b>>0));
    a %= b;
  }
  while(a>0){
    var dv = Math.ceil(b/a);
    res.push('1/'+dv);
    [a, b] = [a*dv-b, b*dv];
  }
  return res;
}
console.log(decompose("483/5838"));
