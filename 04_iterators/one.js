for (let i = 0; i < 100; i++) {
  //   i % 2 == 0 ? console.log(i) : null;
}

for (let i = 1; i <= 10; i++) {
  //   console.log("    ");
  //   console.log("    ");
  //   console.log(`Table No: ${i}`);
  //   console.log("    ");
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let index = 1; index <= 20; index++) {
  //   if (index == 5) {
  //     break;
  //   }
  if (index == 10) {
    continue;
  }
  console.log(`Value of index is ${index}`);
}
