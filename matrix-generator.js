function matrixGenerator(rows, columns) {
  // do work here

  let arr = [];

  for (i = 0; i < rows; i++) {
    arr.push([]);
    for (j = 0; j < columns; j++) {
      let random = Math.floor(Math.random() * 100) + 1;
      arr[i].push(random);
    }
  }

  arr.forEach(e => {
    e.sort((a, b) => a - b);
  });

  arr.sort((a, b) => a[0] - b[0]);

  return arr;
}
module.exports = matrixGenerator;
