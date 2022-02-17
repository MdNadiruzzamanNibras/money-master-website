function expensive(){
    const food =document.getElementById('food').value;
     const foodCost = parseFloat(food);
     const rent =document.getElementById('rent').value;
     const rentCost =parseFloat(rent);
     const clothes =document.getElementById('clothes').value;
     const clotheCost = parseFloat(clothes);
     const totalExpense = foodCost + rentCost +clotheCost;
     document.getElementById('total-expense').innerText =totalExpense;
     return totalExpense;
}

document.getElementById('calculate').addEventListener('click', function(){
 expensive()
})