/* global data */
/* exported data */
var $input = document.querySelector('.photo__url');
var $img = document.querySelector('.img__holder');

var $imgSrc = './images/placeholder-image-square.jpg';

var obj = {
  titleOf: '',
  photUrl: '',
  notesOf: '',
  entry: 0
};

var entries = [];

$input.addEventListener('input', function (event) {
  if ($input.value === '') {
    $img.src = $imgSrc;
  } else {
    $img.src = $input.value;
  }
});
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var newObj = {
    titleOf: form.title.value,
    photUrl: form.url.value,
    notesOf: form.notes.value,
    entry: obj.entry++
  };

  entries.unshift(newObj);

  localStorage.setItem('Values', JSON.stringify(entries));
  var objects = localStorage.getItem('Values');
  if (objects !== null) {
    entries = JSON.parse(objects);
  }
  // console.log(JSON.parse(objects));

  $img.src = $imgSrc;
  document.getElementById('log').reset();
  // console.log(newObj);
});
