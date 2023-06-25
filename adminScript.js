// for deposit

document.getElementById("depositButton").addEventListener("click", function() {
    const displayDepositText = parseFloat(document.getElementById("updateableDeposit").innerText);
    const depositAmountValue = parseFloat(document.getElementById("depositAmount").value);
    const newDepositValue = displayDepositText + depositAmountValue;
    const newDeposit = document.getElementById("updateableDeposit");
    newDeposit.innerText = newDepositValue;

    document.getElementById("depositAmount").value = '';

    // for total

    const displayTotalText = parseFloat(document.getElementById("updateableTotal").innerText);
    const newTotal = parseFloat(displayTotalText) + parseFloat(newDeposit.innerText);
    document.getElementById("updateableTotal").innerText = newTotal;
})

// for withdraw

document.getElementById("withdrawButton").addEventListener("click", function(){
    const displayWithdrawText = parseFloat(document.getElementById("updateableWithdraw").innerText);
    const withdrawAmountValue = parseFloat(document.getElementById("withdrawAmount").value);
    const newWithdrawValue = displayWithdrawText + withdrawAmountValue;
    const newWithdraw = document.getElementById("updateableWithdraw");
    newWithdraw.innerText = newWithdrawValue;

    document.getElementById("withdrawAmount").value = '';

    // for total

    const displayTotalText = parseFloat(document.getElementById("updateableTotal").innerText);
    const newTotal = parseFloat(displayTotalText) - parseFloat(newWithdraw.innerText);
    document.getElementById("updateableTotal").innerText = newTotal;

    if (newTotal < 0) {
        alert("Insufficient Balance");
        document.getElementById("updateableWithdraw").innerText = 0;
        document.getElementById("updateableTotal").innerText = displayTotalText;
    }
})