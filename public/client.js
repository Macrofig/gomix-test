// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $.get('https://cdn.rawgit.com/Macrofig/4b6e16cd2692815c72f498501164eb46/raw/580f426e1959760a0a1eeb0beb4e41812b055a29/flavor-of-the-day.json', function(resp) {
    var flavors = resp.data;
    var today = moment();
  });

});
