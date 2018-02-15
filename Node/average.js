function average (scores) {
    var sum = scores.reduce(( acc, cur ) => acc + cur);
    console.log(Math.round(sum/scores.length));
}

average([90, 98, 89, 100, 100, 86, 94]);
average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]);