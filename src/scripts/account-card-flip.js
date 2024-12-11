document.querySelector('.flip-btn').addEventListener('click', function() {
  document.querySelector('.card-inner').classList.toggle('rotated');
});

document.querySelector('.flip-btn-original').addEventListener('click', function() {
  document.querySelector('.card-inner').classList.remove('rotated');
});

