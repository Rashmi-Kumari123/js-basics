// Waiting for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Getting all the "Buy Now" buttons
  const buttons = document.querySelectorAll('.buy-now');
  
  // Add click event to each button
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Getting the plan name
      const planName = this.closest('.plan').querySelector('h2').textContent;
      
      // when a plan is selected, I am showcasing pop up msg as alert in top 
      alert(`You've selected the ${planName} plan!`);
     
    });
  });
  
  // Adding hover effect to plan cards
  const plans = document.querySelectorAll('.plan');+
  
  plans.forEach(plan => {
    plan.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
    
    plan.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
  });
  
  console.log('Pricing table is ready!');
});
