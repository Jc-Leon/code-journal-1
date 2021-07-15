/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);

  localStorage.setItem('Values', dataJSON);

});

var prevDataJSON = localStorage.getItem('Values');
if (prevDataJSON !== null) {
  data = JSON.parse(prevDataJSON);
}
