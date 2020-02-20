
function check(array){
  if (!array||!array.length) {return false;}
  return true;
}
exports.min = function min (array) {
  if (!check(array)) return 0;
  //if (!array||!array.length) {return 0;}
  //return Math.min(...array);
  return array.reduce((p,c)=>p<c?p:c);
}

exports.max = function max (array) {
  if (!check(array)) return 0;
  //if (!array||!array.length) {return 0;}
  //return Math.max(...array);
  return array.reduce((p,c)=>p<c?c:p);
}

exports.avg = function avg (array) {
  return (check(array)) ? array.reduce((p,c)=>p+c)/array.length : 0;
}
