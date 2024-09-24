
document.getElementById('donate').addEventListener('click',function(event){
    event.preventDefault;
    const inputAddMoney = document.getElementById('input-add-money').value;
    const donateMoney = document.getElementById('donate-amount').innerText;
    const mainBalance = document.getElementById('main-balance').innerText;
    const remainMoney =parseFloat(mainBalance) - parseFloat(inputAddMoney);
    const newDonateMoney = parseFloat(donateMoney) + parseFloat(inputAddMoney);
    document.getElementById('main-balance').innerText = remainMoney;
    document.getElementById('donate-amount').innerText = newDonateMoney;
    if(remainMoney<0){
        alert('Your Balance is over')
    }
})


