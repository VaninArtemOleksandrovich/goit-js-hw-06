const refs = {
    inputRef: document.querySelector('#name-input'),
    nameRef: document.querySelector('#name-output'),
  };
  
  const { inputRef, nameRef } = refs;
  
  const handleChangeNameInput = ({ currentTarget: { value } }) => {
    nameRef.textContent = value.trim() || 'Anonymous';
  };
  
  inputRef.addEventListener('input', handleChangeNameInput);