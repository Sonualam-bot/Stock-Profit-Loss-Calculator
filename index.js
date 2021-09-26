var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var showBtn = document.querySelector("#show-btn");
var outputBox = document.querySelector("#output-box");



function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = Number(initial - current) * quantity;
        var lossPercentage = Number(initial - current) / initial * 100;

        showMessage(`Hey! Your loss is ${loss} and your lossPercentage is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = Number(current - initial) * quantity;
        var profitPercentage = Number(current - initial) / initial * 100;

        showMessage(`Hey! your profit is ${profit} and your profitPercentage is ${profitPercentage}%`);
    } else {
        showMessage('No pain, No gain')
    }
}


function showMessage(message) {
    outputBox.innerHTML = message;
}


function submitHandler() {
    var init = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(init, qty, curr);
}

showBtn.addEventListener('click', submitHandler);
