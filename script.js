let total = document.getElementById('btn');

btn.addEventListener('click', () => {
    const billAmount = document.getElementById('check-total')
    const tipPercent = document.getElementById('tip-percentage').value;

    const tipAmount = document.getElementById('tip-amount').value = billAmount / tipPercent;
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
})
