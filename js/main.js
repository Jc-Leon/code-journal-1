/* global data */
/* exported data */
var $input = document.querySelector('.photo__url');
var $img = document.querySelector('.img__holder');

var $imgSrc = './images/placeholder-image-square.jpg';

$input.addEventListener('input', function (event) {
  if ($input.value === '') {
    $img.src = $imgSrc;
  } else {
    $img.src = $input.value;
  }
});
var $submit = document.querySelector('button');

$submit.addEventListener('click', function (event) {
  // console.log($submit);
});
