/**
 * This is main
 */
function main(args) {
  console.info(args);
}

function qooBoz() {
  console.log("qooBoz");
}

function fooBar(x, y) {
  const z = x + y;
  return z;
}

function barBaz(q, z) {
  const a = q + z;
  return a;
}

function bizBom(a, b) {
  console.log("bizBom");
  const c = a + b;
  return c;
}

main();
