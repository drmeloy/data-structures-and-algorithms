const arrayBinarySearch = (array, value) => {
  let l = 0;
  let h = array.length - 1;
  
  while(l <= h){
    let mid = Math.floor((l + h) / 2);
    if(array[mid] === value) return mid;
    if(array[mid] > value) h = mid - 1;
    if(array[mid] < value) l = mid + 1;
    if(l > h) return -1;
  }
};

module.exports = { arrayBinarySearch };
