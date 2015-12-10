
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });


$(document).ready(function() {

	var link = window.location.href;
	if (link.indexOf('#') > 0) {
	  $('.authenticate').hide();
	}

  $('.city-item').click(function() {
    // console.log('test');
  	$('.container').hide();
  	// $('.authenticate').hide();
  	$('.container-city').show();
  })

});  

function getRequest(searchTag){
  var params = {
  	media_count: 50,
    name: 'newyork',
    q: searchTag 
  };
  var url = 'https://api.instagram.com/v1/tags/search?q=newyork&access_token=ACCESS-TOKEN';

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data.items);
  });
}

