const refs = {
  inputRef: document.querySelector('#validation-input'),
};

const { inputRef } = refs;

const handleChangeBorderInput = ({ currentTarget: { value } }) => {
  if (value.length < inputRef.dataset.length) {
    inputRef.classList.add('invalid');
    return;
  }
  inputRef.classList.remove('invalid');
  inputRef.classList.add('valid');
};

inputRef.addEventListener('blur', handleChangeBorderInput);





const input = document.querySelector("#validation-input");


input.addEventListener("blur", checkInputValue);


function checkInputValue(event) {
  const inputValue = event.currentTarget.value;
  const valueLength = event.currentTarget.dataset.length;
  if (inputValue.length !== +valueLength) {
    setInvalidClass(event.currentTarget);
  } else {
    setValidClass(event.currentTarget);
  }
}

function setInvalidClass(node) {
  node.classList.remove("valid");
  node.classList.add("invalid");
}

function setValidClass(node) {
  node.classList.remove("invalid");
  node.classList.add("valid");
}