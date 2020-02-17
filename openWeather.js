// ----------------------------------------------------------------------------------------------------------------------------------------open weather temp/ wind GET
cityArr = []


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
                
                // console.log(data.main.temp)
                // console.log(data.main.feels_like)
                // console.log(data.main.temp_min)
                // console.log(data.main.temp_max)
                // console.log(data.main.humidity)
                // console.log(data.wind.speed)
                localStorage.setItem("City", JSON.stringify(city))
                temp = data.main.temp
                $('#innerContent').text(temp);

                // console.log(temp)

            }
        });
    }
    else {
        alert('oof')
    }
    })
})

function init() {
    var storedCity = JSON.parse(localStorage.getItem("City"))
    if (storedCity !== null){
        cityArr = storedCity
}}
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
                // console.log(data.list[0].main.temp)
                // console.log(data.list[1].main.temp)
                // console.log(data.list[2].main.temp)
                // console.log(data.list[3].main.temp)
                // console.log(data.list[4].main.temp)
                // console.log(data.list[0].main.humidity)
                dayOneTemp = data.list[0].main.temp
                dayTwoTemp = data.list[1].main.temp
                dayThrTemp = data.list[2].main.temp
                dayFouTemp = data.list[3].main.temp
                dayFivTemp = data.list[4].main.temp

                $('#dayOne').text(dayOneTemp);
                $('#dayTwo').text(dayTwoTemp);
                $('#dayThr').text(dayThrTemp);
                $('#dayFou').text(dayFouTemp);
                $('#dayFiv').text(dayFivTemp);




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