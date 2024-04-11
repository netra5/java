document.addEventListener('DOMContentLoaded', function() {
  const animal1 = document.getElementById('animal-1');
  const animal2 = document.getElementById('animal-2');

  animal1.addEventListener('mouseenter', function() {
    animal1.style.backgroundImage = 'url("dog.jpeg")';
  });

  animal1.addEventListener('mouseleave', function() {
    animal1.style.backgroundImage = 'url("cat.jpeg")';
  });

  animal2.addEventListener('mouseenter', function() {
    animal2.style.backgroundImage = 'url("Elephant.jpeg")';
  });

  animal2.addEventListener('mouseleave', function() {
    animal2.style.backgroundImage = 'url("OIP.jpeg")';
  });
});
