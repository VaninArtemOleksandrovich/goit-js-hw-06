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




