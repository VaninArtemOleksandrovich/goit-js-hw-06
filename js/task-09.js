function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }
  
 
  const body = document.querySelector("body");
  const display = document.querySelector(".color");
  const button = document.querySelector(".change-color");
  
 
  button.addEventListener("click", changeBodyColor);
  
  
  function changeBodyColor() {
  
    const newColor = getRandomHexColor();
  
   
    body.style.backgroundColor = newColor;
  

    display.textContent = newColor;
  }