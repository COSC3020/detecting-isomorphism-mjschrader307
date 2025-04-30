const fs = require("fs");
eval(fs.readFileSync("code.js") + "");

let test = [
  {
    G: [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ],
    H: [
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 0, 0, 0],
    ],
    isomorphic: true,
  },
  {
    G: [
      [0, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0],
    ],
    H: [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    isomorphic: true,
  },
  {
    G: [
      [1, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
    ],
    H: [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    isomorphic: false,
  },
  {
    G: [
      [0, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
    ],
    H: [
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 0],
    ],
    isomorphic: false,
  },
];

function testFxn() {
  for (let i = 0; i < test.length; i++) {
    let T = test[i];
    let G = T["G"];
    let H = T["H"];

    let result = are_isomorphic(G, H);
    let expected = T["isomorphic"];
    if (result !== expected) {
      throw new Error("Test failed");
    }
  }
}

testFxn();
