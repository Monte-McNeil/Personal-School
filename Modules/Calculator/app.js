var array = [1, 2, 2, 3, 4, 5, 6]; 

function meanMedian (array) {
    return {
        getMean: mean(array),
        getMedian: median(array),
    }
}

function mean(array) {
    var sum = 0;
    array.forEach( num => {
      sum += num;
    });
    var getMean = sum / array.length;
    return getMean;
  }

console.log(mean(array))

function median(array) {
    array.sort(function (a, b) {
      return a - b;
    });
    var getMedian;
  
    if(array.length % 2 !== 0) {
        getMedian = array[Math.floor(array.length / 2)];
    } else {
      var mid1 = array[(array.length / 2) -1 ];
      var mid2 = array[array.length / 2 ];
      getMedian = (mid1 + mid2) /2;
    }
    return getMedian;
  }

  console.log(median(array))

