module.exports = function countCats(matrix) {
  let count=0;
  matrix.forEach(function counter(item) {
    item.forEach(element => {
      if (element=='^^')
      count+=1;
    });
  });
  return count;
};
