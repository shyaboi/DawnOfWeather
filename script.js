
// var cit = ''
// localStorage.setItem("City: ", JSON.stringify(cit))
// storedCities = element



// var ul = document.createElement('ul');
// 		document.getElementById('myList').appendChild(ul);
 
// 		retrievedObject.forEach(function(retrievedObject){
// 			var li = document.createElement('li');
// 			ul.appendChild(li);
//             li.innerHTML += retrievedObject;
//             li.append.innerHTML("")
//         })


// $(document).ready(function() {
//     var newCity = $('#search').val()
//     $('#searchBtn').click(function() {
//         ($('#search').val());
//     });
//   });


  $("#search").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#searchBtn").click(); 
        ($('#search').val());
        // var retrievedObject = localStorage.getItem('City: ', cityArr);
        // console.table(retrievedObject);
    } 
}); 