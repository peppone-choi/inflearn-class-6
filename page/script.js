import randomPassword from "./generator.js";
import randomType from "./randomTypeGenerator.js";
import * as consts from "./const.js";
import passwordValid from "./passwordValid.js";

const mainContainer = document.querySelector(".main-container");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const password = document.createElement("p");
const passwordContainer = document.createElement("div");
const passwordTextContainer = document.createElement("div");
const optionContainer = document.createElement("div");
const optionForm = document.createElement("form");
const lengthLabel = document.createElement("label");
const lengthInput = document.createElement("input");
const optionText = document.createElement("p");
const generateButtron = document.createElement("button");
const passwordCopyButton = document.createElement("button");
const infoContainer = document.createElement("div");
const infoText = document.createElement("ul");

let type = [];
let length = 5;
let passwordText = "";

const onChangeLength = (e) => {
  length = e.target.value;
};

const getPassword = (type, length) => {
  try {
    passwordText = randomPassword(randomType(type, length));
    password.textContent = passwordText;
    if (type === null) {
      typeNull();
    }
  } catch (error) {
    console.error(error);
  }
};

const onChangeCheckBox = (e) => {
  if (e.target.checked) {
    type.push(consts.types[e.target.id]);
  } else {
    if (type.length > 0) {
      type = type.filter((el) => el.id !== consts.types[e.target.id].id);
    }
  }
};

const typeNull = () => {
  if (type.length === 0) {
    password.textContent = "타입을 선택하고 생성을 누르세요!";
  }
};

const onClickGenerate = (e) => {
  e.preventDefault();
  if (e.target.elements[0].rangeOverflow) {
    return;
  }
  if (e.target.elements[0].rangeUnderflow) {
    return;
  }
  if (type.length === 0) {
    typeNull();
    return;
  }
  getPassword(type, length);
  while (true) {
    if (passwordValid(passwordText, type)) {
      break;
    } else {
      passwordText = randomPassword(randomType(type, length));
      password.textContent = passwordText;
    }
  }
};

const onClickCopy = (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(passwordText);
};

mainContainer.style.textAlign = "center";
mainContainer.style.verticalAlign = "middle";

h1.textContent = "패스워드 생성기";
h1.className = "title nes-text";
h1.style.fontSize = "5em";

h2.textContent = "버튼을 클릭해서 패스워드를 복사합니다.";
h2.className = "subtitle nes-text";
h2.style.fontSize = "2em";

password.className = "password";
password.style.fontSize = "2em";
password.style.verticalAlign = "middle";
password.style.margin = "0.1em 0";

passwordContainer.className = "password-container is-centered";

passwordTextContainer.className = "password-text-container nes-container";
passwordTextContainer.style.display = "flex";
passwordTextContainer.style.justifyContent = "space-between";
passwordTextContainer.style.width = "100%";
passwordTextContainer.style.padding = "1em";
passwordTextContainer.style.margin = "1em 0";
passwordTextContainer.style.verticalAlign = "middle";

lengthLabel.textContent = "글자 수";
lengthLabel.htmlFor = "length";
lengthLabel.className = "nes-text";

lengthInput.type = "number";
lengthInput.value = length;
lengthInput.id = "length";
lengthInput.min = 5;
lengthInput.max = 70;
lengthInput.className = "nes-input";
lengthInput.addEventListener("change", onChangeLength);

optionContainer.className = "option-container nes-container";
optionContainer.style.textAlign = "left";
optionForm.style.margin = "0 0 1em";
optionText.textContent = "포함 할 문자";
optionText.className = "nes-text";
optionText.style.fontSize = "1.5em";
optionText.style.margin = "1em 0";

generateButtron.type = "submit";
generateButtron.textContent = "비밀번호 생성";
generateButtron.className = "nes-btn is-primary";
generateButtron.style.margin = "0 0.5em";
generateButtron.style.fontSize = "1.5em";
generateButtron.style.display = "block";
generateButtron.style.margin = "1em auto";
generateButtron.style.width = "100%";

passwordCopyButton.textContent = "복사";
passwordCopyButton.className = "nes-btn is-success";
passwordCopyButton.style.fontSize = "1.5em";
passwordCopyButton.addEventListener("click", onClickCopy);

mainContainer.appendChild(h1);
mainContainer.appendChild(passwordContainer);
mainContainer.appendChild(optionContainer);

passwordContainer.appendChild(h2);
passwordContainer.appendChild(passwordTextContainer);
passwordTextContainer.appendChild(password);
passwordTextContainer.appendChild(passwordCopyButton);

optionContainer.appendChild(optionForm);

optionForm.appendChild(lengthLabel);
optionForm.appendChild(lengthInput);
optionForm.appendChild(optionText);
optionForm.addEventListener("submit", onClickGenerate);

mainContainer.appendChild(infoContainer);
infoContainer.className = "info-container nes-container";
infoContainer.style.textAlign = "left";
infoContainer.style.margin = "1em 0";
infoContainer.style.padding = "1em";
infoContainer.appendChild(infoText);
infoText.innerHTML = `<li>최소 길이는 5입니다.</li>
<li>최대 길이는 70입니다.</li>
<li>강력한 비밀번호는 10~16자여야 합니다.</li>`;

for (let i = 0; i < 4; i++) {
  const text = document.createElement("span");
  const option = document.createElement("input");
  option.type = "checkbox";
  option.className = "nes-checkbox";
  option.id = i;
  text.textContent = consts.types[i].name;
  const label = document.createElement("label");
  label.className = "nes-text";
  label.style.display = "block";
  label.style.margin = "1em 0";
  label.appendChild(option);
  label.appendChild(text);
  optionForm.appendChild(label);
  option.addEventListener("change", onChangeCheckBox);
}

optionForm.appendChild(generateButtron);

typeNull();
