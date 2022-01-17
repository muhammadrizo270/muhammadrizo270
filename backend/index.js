let input = document.querySelector('#valur');
let input = document.querySelector('#result');
input.onkeyup = function () {
    result.innerHTML = (this.value * 10100).toLocaleString() + "s'om"
}