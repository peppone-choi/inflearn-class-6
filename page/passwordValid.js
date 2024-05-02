const passwordValid = (passwordText, type) => {
  let result = true;
  const passwordArray = passwordText.split("");
  for (let i = 0; i < type.length; i++) {
    if (i < 3) {
      for (let j = type[i].range[0]; j <= type[i].range[1]; j++) {
        if (passwordArray.includes(String.fromCharCode(j))) {
          result = true;
          break;
        } else {
          result = false;
        }
      }
    } else {
      for (let j = 0; j < type[i].range.length; j++) {
        if (passwordArray.includes(type[i].range[j])) {
          result = true;
          break;
        } else {
          result = false;
        }
      }
    }
  }
  return result;
};

export default passwordValid;
//
