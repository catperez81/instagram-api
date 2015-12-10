
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });
var accessToken = null;

$(document).ready(function() {

	var link = window.location.href;
	if (link.indexOf('#') > 0) {
	  $('.authenticate').hide();
	}

	accessToken = link.split("=")[1];
  	getRequest('newyork');

  $('.city-item').click(function() {
    // console.log('test');
  	$('.container').hide();
  	$('.container-city').show();
  })

});  

function getRequest(searchTag){
  var params = {
  	// media_count: 50,
   //  name: 'newyork',
    q: searchTag,
    access_token: accessToken 
  };
  // var url = 'https://api.instagram.com/v1/tags/search?q=newyork&access_token=ACCESS-TOKEN';
   var url = 'https://api.instagram.com/v1/tags/search';

  $.ajax({
  	url: url,
  	data: params,
  	dataType: "jsonp",
  	type: 'GET'
  })
  .done(function(results) {
  console.log(results);
  });

  // $.getJSON(url, params, function(data){

  //   showResults(data.items);
  //   console.log(data.items);
  // });
}

