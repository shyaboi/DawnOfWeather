
var cit = ''
localStorage.setItem("City", JSON.stringify(cit))



function storedNS() {
}


$(document).ready(function() {
    var newCity = $('#search').val()
    $('#searchBtn').click(function() {
        ($('#search').val());
    });
  });


  $("#search").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#searchBtn").click(); 
        ($('#search').val());
    } 
}); 