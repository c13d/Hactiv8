function defaultForLoop() {
  let counter = 0;
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

function loopForEach() {
  const studentList = [
    {
      name: "joshua",
    },
    {
      name: "Davin",
    },
  ];

  studentList.forEach((value, index) => {
    console.log(`Nama: ${value.name}, index: ${index}`);
  });
}

function loopRepeat() {
  let message = "Saya tidak akan bolos lagi\n";
  console.log(message.repeat(10));
}

function panggilAku(i) {
  if (i <= 0) {
    return;
  }

  panggilAku(i - 1);
  console.log(i);
}

defaultForLoop();
loopForEach();
loopRepeat();

panggilAku(10);

// input :

function solve() {
  let input = [80, 30, 60, 55, 32, 60, 10, 70, 90];
  let search = 100;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let sum = input[i] + input[j];
      if (sum == search) {
        console.log(`${input[i]} ${input[j]}`);
      }
    }
  }
}

function solveWithMap() {
  let input = [80, 30, 60, 55, 32, 60, 10, 70, 90];
  let cari = 100;
  let tempMap = {};

  for (let i = 0; i < input.length; i++) {
    tempMap[input[i]] = 1;
  }

  for (let i = 0; i < input.length; i++) {
    let diff = cari - input[i];
    if (tempMap[diff] == 1) {
      console.log(`${diff} ${input[i]}`);
      break;
    }
  }
}

// solve();
solveWithMap();
