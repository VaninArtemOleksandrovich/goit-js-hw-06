const allBtn = document.getElementById("counter");
console.log(allBtn);
const firsBtn = allBtn.firstElementChild;
console.log(firsBtn);
const secBtn = allBtn.lastElementChild;
console.log(secBtn);
const total = document.querySelector('#value');
let counterValue = 0;
firsBtn.addEventListener("click",()=>{
    counterValue -=1;
    total.textContent = counterValue;
});
secBtn.addEventListener("click",()=>{
    counterValue +=1;
    total.textContent= counterValue;

});