export default function chunk(array,chunks){
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, chunks + index));
    index += chunks;
  }
  return chunkedArray;
}