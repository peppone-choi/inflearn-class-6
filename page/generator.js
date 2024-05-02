const charGenerator = (rangeArray) => {
  let result = 0;
  if (Array.isArray(rangeArray) && rangeArray.length === 2 && rangeArray[0] < rangeArray[1]) {
    result = Math.floor(Math.random() * (rangeArray[1] - rangeArray[0]) + rangeArray[0]);
    return String.fromCharCode(result);
  } else if (Array.isArray(rangeArray) && rangeArray.length === 5) {
    result = Math.floor(Math.random() * 5);
    return rangeArray[result];
  } else {
    console.error("Invalid range");
    return null;
  }
};

const randomPassword = (typeArrays) => {
  let result = "";
  if (typeArrays === null) {
    console.error("Type is empty");
    return null;
  }
  for (let i = 0; i < typeArrays.length; i++) {
    result += charGenerator(typeArrays[i].range);
  }
  return result;
};

export default randomPassword;
