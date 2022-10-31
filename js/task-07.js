const refs = {
    inputRef: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text'),
  };
  
  const { inputRef, textRef } = refs;
  
  const ChangeSizeInput = ({ currentTarget: { value } }) => {
    textRef.style.fontSize = `${value}px`;
  };
  
  inputRef.addEventListener('input', ChangeSizeInput);