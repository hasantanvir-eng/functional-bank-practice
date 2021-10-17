function getInputValue(inputId){
    // debugger
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(balanceId){
    const balanceTotal = document.getElementById(balanceId);
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(balanceId, amount, isAdd){
    const balanceTotal = document.getElementById(balanceId);
    const previousTotal = getCurrentBalance(balanceId);
    if(isAdd == true){
        balanceTotal.innerText = previousTotal + amount;
    }
    if(isAdd == false){
        balanceTotal.innerText = previousTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit clicked');
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance('balance-total', depositAmount, true);
    }
});
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw clicked');
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance('balance-total');
    if(withdrawAmount > 0 && currentBalance > withdrawAmount){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance('balance-total', withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log("You don't have sufficient balance in your account");
    }
});