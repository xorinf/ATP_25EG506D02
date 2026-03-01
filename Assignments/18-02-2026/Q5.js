// Q5. Wrtite a funtion that recives 3 number args and return the big number

function threeMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log("Big element is :", threeMax(10, 20, 30));
