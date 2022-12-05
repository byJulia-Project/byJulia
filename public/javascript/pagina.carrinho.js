const counter = document.querySelector('#counterValue');
const buttonDecrement = document.querySelector('#buttonDecrement');
const buttonIncrement = document.querySelector('#buttonIncrement');



let value = counter.value;
let valorProduto = 1500

buttonIncrement.addEventListener('click',() => {
value = ++value;
counter.value = value;
const valorTotal = valorProduto * value;
document.getElementById("preco").innerText = valorTotal
});
buttonDecrement.addEventListener('click',() => {
value = value !== 0 ? --value : 0;
counter.value = value;
const valorTotal = valorProduto * value;
document.getElementById("preco").innerText = valorTotal
});
