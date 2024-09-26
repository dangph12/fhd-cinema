export const splitArray = (array, chunkSize) => {
  const chunks = Array(Math.ceil(array.length / chunkSize)).fill(1).map((_, index) => index * chunkSize).map(begin => array.slice(begin, begin + chunkSize));
  return chunks;
};