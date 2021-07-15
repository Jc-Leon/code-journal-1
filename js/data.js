/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var form = document.querySelector('form');

form.addEventListener('submit', function newObj() {
  event.preventDefault();

  var newObj = {
    titleOf: form.title.value,
    photUrl: form.url.value,
    notesOf: form.notes.value,
    entry: data.nextEntryId++
  };

  data.entries.unshift(newObj);

  localStorage.setItem('Values', JSON.stringify(data.entries));
  var objects = localStorage.getItem('Values');
  if (objects !== null) {
    data.entries = JSON.parse(objects);
  }

});
