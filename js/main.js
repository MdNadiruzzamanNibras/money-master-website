

// total expense & total balance 
function expenseTotal(){
    const food =document.getElementById('food').value;
     const foodCost = parseFloat(food);
     
     const rent =document.getElementById('rent').value;
     const rentCost =parseFloat(rent);
    
     const clothes =document.getElementById('clothes').value;
     const clotheCost = parseFloat(clothes);
     
     const totalExpense = foodCost + rentCost +clotheCost;
     document.getElementById('total-expense').innerText =totalExpense;
    
return totalExpense}

    function balanceTotal()
    {const totalExpense=expenseTotal();
    
       const incomeInput = document.getElementById('income').value;
       const income = parseFloat(incomeInput);
       const balance = income - totalExpense;
       document.getElementById('balance').innerText= balance;
       return income
}

 function saveTotal(){
      const totalExpense =expenseTotal()
      console.log(totalExpense)
     const saveInput = document.getElementById('save').value;
     const save = parseFloat(saveInput);
     const incomeTotal =income.value;
     const saveRatefirst = save/100;
     const saveRate = parseFloat(saveRatefirst)
     const saveAmount =incomeTotal * saveRate;
     const remainingBalance = incomeTotal - saveAmount - totalExpense;
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