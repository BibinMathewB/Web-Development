//Start of the process 
document.addEventListener('DOMContentLoaded', function() {
    const costInput=document.getElementById('cost');
    const litersInput=document.getElementById('liters');
    const calculateBtn=document.getElementById('calculate-btn');
    const totalCostDisplay=document.getElementById('total-cost');
  
    //Process to calculate the petrol cost
    function calculateTotalCost() {
      const costPerLiter=parseFloat(costInput.value);
      const liters=parseFloat(litersInput.value);
      const totalCost=costPerLiter*liters;
      totalCostDisplay.textContent=`Total Cost:$${totalCost.toFixed(2)}`;
    }
  
    //the button click
    calculateBtn.addEventListener('click', calculateTotalCost);
  });
  