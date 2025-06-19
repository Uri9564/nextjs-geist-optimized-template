// Add interactivity to dashboard buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.dashboard-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Simple click animation
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 200);

      // For demonstration, log button text
      console.log('Clicked button:', button.innerText.trim());
    });
  });
});
