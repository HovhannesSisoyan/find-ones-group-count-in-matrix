const findRooms = (M) => {
  const m = M.length;     //matrix has m rows 
  const n = M[0].length;  //matrix has n columns

  const includes = (arrayOfArrays, element) => {
    arr = [];
    arrayOfArrays.forEach(array => {
      arr = [...arr, ...array];
    })
    if (arr.includes(element)) return true; else return false;
  }

  const eachRowGroupIndexies = {};
  const eachRowGropusCount = {};
  for (let i = 0; i < m; i ++) {
    eachRowGroupIndexies[i] = [];
    eachRowGropusCount[i] = 0;
    for (let j = 0; j < n; j ++) {
      if (M[i][j] === 1) {
        let a = [];
        a.push(j)
        eachRowGropusCount[i] ++;
        while(M[i][j + 1] === 1) {
          j++;
          a.push(j);
        }
        eachRowGroupIndexies[i].push(a);
      } 
    }
  }
  console.log(eachRowGropusCount);
  console.log(eachRowGroupIndexies);
  let count = 0;
  for (let i = 0; i < m -1; i ++) {
    for (let j = 0; j < eachRowGroupIndexies[i].length; j ++) {
      for (let k = 0; k < eachRowGroupIndexies[i][j].length; k++) {
        includes(eachRowGroupIndexies[i+1], eachRowGroupIndexies[i][j][k]);
        count ++
      }
    }
  }
  console.log(`count = ${count}`)
}

const matrix = [
  [1,0,1,0,1,0],
  [1,1,0,1,1,0],
  [0,0,1,0,0,1],
  [1,1,1,0,1,1],
];

const printMatrix = M => {
  for (let i = 0; i < M.length; i ++) {
    for (let j = 0; j < M[0].length; j ++) {
      console.log(`${M[i][j]} `)
    }
    console.log('\n');
  }
}

findRooms(matrix);