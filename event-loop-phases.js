const fs = require('fs');

setImmediate(() => console.log(1));
Promise.resolve().then(() => console.log(2));
process.nextTick(() => console.log(3));
fs.readFile(__filename, () => {
  console.log(4);
  setTimeout(() => console.log(5));
  setImmediate(() => console.log(6));
  process.nextTick(() => console.log(7));
});
console.log(8);

const sleep_st = (t) => new Promise((r) => setTimeout(r, t));
const sleep_im = () => new Promise((r) => setImmediate(r));

(async () => {
  setImmediate(() => console.log(9));
  console.log(10);
  await sleep_st(0);
  setImmediate(() => console.log(11));
  console.log(12);
  await sleep_im();
  setImmediate(() => console.log(13));
  console.log(14);
  await 1;
  setImmediate(() => console.log(15));
  console.log(16);
})();

setImmediate(() => console.log(17));
console.log(18);
Promise.resolve().then(() => setTimeout(() => {
  setImmediate(() => console.log(19));
  console.log(20);
  Promise.resolve().then(() => setImmediate(() => {
    setImmediate(() => console.log(21));
    console.log(22);
    Promise.resolve().then(() => {
      setImmediate(() => console.log(23));
      console.log(24);
    });
  }));
}, 0));
