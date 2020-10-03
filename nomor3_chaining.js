var angkaAcak = [77, 62, 55, 16, 26, 66, 75, 79, 39, 62, 59, 92, 45, 54, 8];

console.log(
  angkaAcak
    .filter((hasil) => hasil <= 60)
    .map((hasil) => hasil / 5)
    .filter((hasil) => hasil < 10)
    .map((hasil) => angkaAcak.length / hasil)
    .reduce((x, y) => x / 3 + y)
);
