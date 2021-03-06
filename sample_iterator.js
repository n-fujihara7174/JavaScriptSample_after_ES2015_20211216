function makeRangeIterator(start = 0, end = Infinity, step = 1){
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next_sample: function() {
      let result;
      if (nextIndex < end) {
        result = {value: nextIndex, done: false}
        nextIndex += step;
        iterationCount++;
        return result
      }
      return {value: iterationCount, done: true}
    }
  };
  return rangeIterator
}

const it = makeRangeIterator(1,10,5);

let result = it.next_sample();
while(!result.done) {
  console.log(result.value);
  result = it.next_sample();
}
