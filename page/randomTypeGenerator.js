const randomType = (type, length) => {
  let result = [];
  if (type.length === 0) {
    console.error("Type is empty");
    return null;
  }
  for (let i = 0; i < length; i++) {
    result.push(type[Math.floor(Math.random() * type.length)]);
  }
  return result;
};

export default randomType;
