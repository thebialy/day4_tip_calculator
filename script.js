let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;

    
    let tipAmount = document.getElementById('tip-amount').value = Math.round(billAmount / tipPercentage);
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

})