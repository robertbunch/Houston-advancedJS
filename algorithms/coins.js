function solution(target) {
  var coins = [1, 5, 10, 25, 50, 100];
  var table = new Array(target + 1);
  console.log(table[02])
  for (var i = 0; i <= target; i++) {
    table[i] = new Array(coins.length);
    table[i][0] = 1;
  }
  console.log(table);
  for (var i = 0; i <= target; i++) {
    for (var j = 1; j < coins.length; j++) {
      table[i][j] = table[i][j - 1];
      if (coins[j] <= i)
        table[i][j]+= table[i - coins[j]][j];
    }
  }
  console.log(table[7])
  return table[i-1][j-1];
}

console.log(solution(200))


