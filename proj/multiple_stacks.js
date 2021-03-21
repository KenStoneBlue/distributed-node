function a() { 
  console.log("a");
  b(); 
}
function b() { 
  console.log("b");
  c(); 
}
function c() {
  console.log("c");
}

function x() { 
  console.log("x");
  y();
}
function y() { 
  console.log("y");
  z();
}
function z() {  
  console.log("z");
}


setTimeout(x, 0);
a();
