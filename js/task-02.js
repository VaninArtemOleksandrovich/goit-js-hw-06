const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
 const listIngrid = (ingredients)=>{
  const ingList = [];
  ingredients.forEach((ingredient) => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    ingList.push(element);
    
  });
  return ingList;
 };
 const list = document.querySelector("#ingredients");
 const listOfIngredients = listIngrid(ingredients);
 list.append(...listOfIngredients);