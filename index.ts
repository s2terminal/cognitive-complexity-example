// Cognitive Complexity: 0
function method1() {
}

// --------------------------------
// フローが中断されると複雑度が上がる
// --------------------------------

// Cognitive Complexity: 1
function method2() {
  try {
  } catch (e) { // +1
  }
}

// Cognitive Complexity: 1
function method3() {
  if (true) { // +1
  }
}

// Cognitive Complexity: 2
function method4() {
  try {
    if (true) { // +1
    }
  } catch (e) { // +1
  }
}

// Cognitive Complexity: 2
function method5() {
  if (true) { // +1
  } else {    // +1
  }
}

// Cognitive Complexity: 1
function method6(n: number) {
  switch (n) {
    case 1:
      console.log("ichi");
      break;
    case 2:
      console.log("ni");
      break;
    case 2:
      console.log("san");
      break;
    default:
      console.log("ippai");
      break;
  }
}

// --------------------------------
// ネストされるほど複雑度が上がる
// --------------------------------

// Cognitive Complexity: 3
function method11() {
  if (true) { //   +1
    if (true) { // +2 (= if +1, nest +1)
    }
  }
}

// Cognitive Complexity: 4
function method12() {
  if (true) {   // +1
    if (true) { // +2 (= if +1, nest +1)
    } else {    // +1
    }
  }
}

// Cognitive Complexity: 6
function method13() {
  if (true) {   // +1
    if (true) { // +2 (= if +1, nest +1)
    }
  } else {      // +1
    if (true) { // +2
    }
  }
}

// Cognitive Complexity: 7
function method14() {
  if (true) {     // +1
    if (true) {   // +2 (= if +1, nest +1)
    } else {      // +1
      if (true) { // +3 (= if +1, nest +2)
      }
    }
  }
}

// Cognitive Complexity: 4
function method15() {
  try {
    if (true) { // +1
      if (true) { // +2 (if +1, nest +1)
      }
    }
  } catch (e) { // +1
  }
}

// Cognitive Complexity: 3
function method16() {
  try {
  } catch (e) { // +1
    if (true) { // + 2 (if +1, nest +1)
    }
  }
}

// Cognitive Complexity: 6
function method17() {
  if (true) {     // +1
    if (true) {   // +2 (=if +1, nest +1)
      if (true) { // +3 (=if +1, nest +2)
      }
    }
  }
}


// Cognitive Complexity: 1
function method21(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a && b && c && d;
}

// Cognitive Complexity: 2
function method22(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a || b && c && d;
}

// Cognitive Complexity: 3
function method23(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a && b || c && d;
}

// Cognitive Complexity: 2
function method24(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a || b || c && d;
}

// Cognitive Complexity: 2
function method25(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a && b && c || d;
}

// Cognitive Complexity: 3
function method26(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a || b && c || d;
}

// Cognitive Complexity: 2
function method27(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a && b || c || d;
}

// Cognitive Complexity: 1
function method28(a: boolean, b: boolean, c: boolean, d: boolean) {
  return a || b || c || d;
}
