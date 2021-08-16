// get deposit input

    document.getElementById('deposit-button').addEventListener('click', function(){
    const depositinput = document.getElementById('deposit-input');
    const newDepositAmountText = depositinput.value;
    // console.log(newDepositAmountText);
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log('click');

    // deposit balance
    const depositTotal = document.getElementById('deposit-total');
    const previousdepositText = depositTotal.innerText;
    const previousdepositAmount = parseFloat(previousdepositText);
    // console.log(previousdepositAmount);
    const newDeposiTotal = previousdepositAmount + newDepositAmount;
    depositTotal.innerText =newDeposiTotal;

  // deposit update

   const depositBalanceTotal = document.getElementById('balance-total');
   const balancetotaltext =depositBalanceTotal.innerText;
   const balanceTotalAmount = parseFloat(balancetotaltext);
   const newBalanceTotal=balanceTotalAmount +  newDepositAmount;
   depositBalanceTotal.innerText =newBalanceTotal;
   // clear input Filed
    depositinput.value='';

});

// get withdraw input

    document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput= document.getElementById('withdraw-input');
    // console.log('click');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // console.log('newWithdrawAmount');

    // withdraw balance

    const withdrawTotal= document.getElementById('withdraw-total');
    const withdrawBalanceText= withdrawTotal.innerText;
    const previousWithdrawAmount=parseFloat(withdrawBalanceText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // withdraw update 

    const withdrawBalanceTotal=document.getElementById('balance-total');
    const previousWithdrawBalanceText=withdrawBalanceTotal.innerText;
    const previousWithdrawAmountTotal=parseFloat(previousWithdrawBalanceText);
    const newWithdrawBalanceTotal = previousWithdrawAmountTotal - newWithdrawAmount;
    withdrawBalanceTotal.innerText=newWithdrawBalanceTotal;
    
    withdrawInput.value = '';

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;



});
// panda link
document.getElementById('login-submit2').addEventListener
('click', function(){
    window.location.href= 'panda.html';
    
    });

    // bangla bazar link
    document.getElementById('login-submit3').addEventListener
('click', function(){
    window.location.href= 'bazar.html';
    
    });