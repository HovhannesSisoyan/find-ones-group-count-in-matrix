const findOnesGroupsCount = (M) => {
  const m = M.length;
  const n = M[0].length;

  const findVericalNeighboursCount = (array, arrayOfArrays) => {
    let count = 0;
    for (let i = 0; i < arrayOfArrays.length; i ++) {
      for(let j = 0; j < arrayOfArrays[i].length; j ++) {
        if (array.includes(arrayOfArrays[i][j])) {
          count ++;
          break;
        }
      }
    }
    return count; 
  }

  const eachRowGroupIndexies = {};
  let onesGroupsCountForRows = 0;
  for (let i = 0; i < m; i ++) {
    eachRowGroupIndexies[i] = [];
    for (let j = 0; j < n; j ++) {
      if (M[i][j] === 1) {
        let a = [];
        a.push(j)
        onesGroupsCountForRows ++;
        while(M[i][j + 1] === 1) {
          j++;
          a.push(j);
        }
        eachRowGroupIndexies[i].push(a);
      } 
    }
  }

  let verticalGroups = 0;
  for (let i = 0; i < m - 1; i ++) {
    for (let j = 0; j < eachRowGroupIndexies[i].length; j ++) {
      verticalGroups += findVericalNeighboursCount(eachRowGroupIndexies[i][j], eachRowGroupIndexies[i+1]);
    }
  }
  return onesGroupsCountForRows - verticalGroups;
}

const matrix = [
  [1,0,1,0,1,0],
  [1,0,0,1,0,0],
  [0,1,0,0,1,1],
  [1,1,1,0,1,1],
];


console.log(findOnesGroupsCount(matrix));
