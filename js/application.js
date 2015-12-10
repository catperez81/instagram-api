
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });


$(document).ready(function() {

	var accessToken = getUrlParameter ("access_token");
	alert(accessToken);

  $('.city-item').click(function() {
    // console.log('test');
  	$('.container').hide();
  	$('.authenticate').hide();
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

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};