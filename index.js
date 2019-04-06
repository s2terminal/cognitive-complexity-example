// Cognitive Complexity: 0
function method0() {
}

// Cognitive Complexity: 2
// Cyclomatic Complexity: 3
function method1() {
  if (true) { // +1
  }
  if (true) { // +1
  }
}

// Cognitive Complexity: 3
// Cyclomatic Complexity: 3
function method2() {
  if (true) {   // +1
    if (true) { // +2 (= if +1, nest +1)
    }
  }
}
