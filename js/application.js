
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });


$(document).ready(function() {

  $('.city-item').click(function() {
    // console.log('test');
  	$('.container').hide();
  	$('.container-city').show();
  })

});  

function getRequest(searchTag){
  var params = {
  	media_count: 50,
    name: 'New York',
    q: searchTag 
  };
  var url = 'https://api.instagram.com/v1/tags/search?q=New&York_token=ACCESS-TOKEN';

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data.items);
  });
}