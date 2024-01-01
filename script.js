Array.prototype.myFilter = function(callback, thisArg) {
  const filteredArray = [];
  const currentArray = this;

  for (let i = 0; i < currentArray.length; i++) {
    if (callback.call(thisArg, currentArray[i], i, currentArray)) {
      filteredArray.push(currentArray[i]);
    }
  }

  return filteredArray;
};