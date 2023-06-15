function sum(n1, n2) {
  return n1 + n2;
}
//By default all the function are private in JS  so by using export we make it public
//Module

function subtraction(n1, n2) {
  return n1 - n2;
}
export { sum, subtraction };
