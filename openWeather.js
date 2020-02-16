// ----------------------------------------------------------------------------------------------------------------------------------------open weather temp/ wind GET

$(document).ready(function(){

    $('#searchBtn').click(function(){

    var city = $('#search').val();

    if(city != ''){

        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + 
            "&APPID=1fdbaf1673606b82b778b52e97f9ce57",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data.main.temp)
                console.log(data.main.feels_like)
                console.log(data.main.temp_min)
                console.log(data.main.temp_max)
                console.log(data.main.humidity)
                console.log(data.wind.speed)
                localStorage.setItem("City Storage", city)
            }
        });
    }
    else {
        alert('oof')
    }
    })
})
// ----------------------------------------------------------------------------------------------------------------------------------------open weather temp/ wind GET

$(document).ready(function(){

    $('#searchBtn').click(function(){

    var city = $('#search').val();

    if(city != ''){

        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + 
            "&APPID=1fdbaf1673606b82b778b52e97f9ce57",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data.list[0].main.temp)
                // console.log(data.main.feels_like)
                // console.log(data.main.temp_min)
                // console.log(data.main.temp_max)
                // console.log(data.main.humidity)
                // console.log(data.wind.speed)
                // console.log(data.wind)
                
            }
        });
    }
    else {
        alert('oof')
    }
    })
})