

// total expense & total balance 
function expenseTotal(){
    const food =document.getElementById('food').value;
     const foodCost = parseFloat(food);
     if (isNaN(foodCost) || foodCost < 0) {
        food.value = ''
        return alert('Please input valid amount of money in number format')
      }
     const rent =document.getElementById('rent').value;
     const rentCost =parseFloat(rent);
     if (isNaN(rentCost) || rentCost < 0) {
        rent.value = ''
        return alert('Please input valid amount of money in number format')
      }
     const clothes =document.getElementById('clothes').value;
     const clothCost = parseFloat(clothes);
     if (isNaN(clothCost) || clothCost < 0) {
        clothes.value = ''
        return alert('Please input valid amount of money in number format')
      }
     const totalExpense = foodCost + rentCost +clotheCost;
     document.getElementById('total-expense').innerText =totalExpense;
    
return totalExpense}

    function balanceTotal()
    {const totalExpense=expenseTotal();
    
       const incomeInput = document.getElementById('income').value;
       const income = parseFloat(incomeInput);
       if (isNaN(income) || income < 0) {
        incomeInput.value = ''
        return alert('Please input valid amount of money in number format')
      }
       const balance = income - totalExpense;
       document.getElementById('balance').innerText= balance;
       return income, balance;
}

 function saveTotal(){
     const saveInput = document.getElementById('save').value;
     const save = parseFloat(saveInput);
     if (isNaN(save) || save < 0) {
        saveInput.value = ''
        return alert('Please input valid amount of money in number format')
      }
     const incomeTotal =income.value;
     const saveRatefirst = save/100;
     const saveRate = parseFloat(saveRatefirst)
     const balanceTotal =balance.innerText;
     const saveAmount =incomeTotal * saveRate;
     const remainingBalance = balanceTotal - saveAmount 
     document.getElementById('saving-amount').innerText=saveAmount;
     
      document.getElementById('remaining-balance').innerText = remainingBalance;
      console.log(remainingBalance);
    } 
document.getElementById('calculate').addEventListener('click', function(){
 balanceTotal();
});
document.getElementById('save-btn').addEventListener('click', function(){
    saveTotal();
});