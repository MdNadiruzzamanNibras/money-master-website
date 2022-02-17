

// total expense & total balance 
function balanceTotal(){
    const food =document.getElementById('food').value;
     const foodCost = parseFloat(food);
     
     const rent =document.getElementById('rent').value;
     const rentCost =parseFloat(rent);
     rent.value ='';
     const clothes =document.getElementById('clothes').value;
     const clotheCost = parseFloat(clothes);
     clothes.value = '';
     const totalExpense = foodCost + rentCost +clotheCost;
     document.getElementById('total-expense').innerText =totalExpense;
    const incomeInput = document.getElementById('income').value;
    incomeInput.value = '';
    const income = parseFloat(incomeInput);
    const balance = income - totalExpense;
    document.getElementById('balance').innerHTML= balance;
    food.value ='';
    return income;
}

 function saveTotal(){
     const saveInput = document.getElementById('save').value;
     const save = parseFloat(saveInput);
     const saveRate = save/100;
     const saveAmount = income * saveRate;
     document.getElementById('saveing-amunt').innerText=saveAmount;
 }
document.getElementById('calculate').addEventListener('click', function(){
 balanceTotal();
});
document.getElementById('save-btn').addEventListener('click', function(){
    saveTotal()
});