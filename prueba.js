const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1];
for (let item of a) {
  if (item === 3) break;
  console.log(item);
}
