/* global data */
/* exported data */
var $input = document.querySelector('.photo-url');
var $img = document.querySelector('.img-holder');
var form = document.querySelector('form');
var $imgSrc = './images/placeholder-image-square.jpg';

$input.addEventListener('input', function imageSrc(event) {
  if ($input.value === '') {
    $img.src = $imgSrc;
  } else {
    $img.src = $input.value;
  }
});

form.addEventListener('submit', function resetForm() {
  $img.src = $imgSrc;

  form.reset();
});
