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
                // city storage-----
                localStorage.setItem("City", JSON.stringify(city))
                // data to var-----------------------------------------------------------------------------------------------------------------
                cityName = data.name
                temp = data.main.temp
                humid = data.main.humidity
                windSpeed = data.wind.speed
                lon = data.coord.lon
                lat = data.coord.lat
                var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $("#icon").html("<img src='" + iconUrl  + "'>");
                localStorage.setItem("Lat", JSON.stringify(lat))
                localStorage.setItem("Lon", JSON.stringify(lon))
                // main temp print------------------------------------------------------------------------------------------------------------------------------
                $('#cityName').text(cityName)
                $('#currentTemp').text('Temperature'+' ' +temp+' '+'F°');
                $('#currentHumid').text('Humidity:'+' '+humid+' '+'%');
                $('#currentWind').text('Wind Speed:'+' '+windSpeed+' '+'MPH');
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
// ajax to open weather for 5 day---------------------------------------------------------------------------------------------------------
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + 
            "&APPID=1fdbaf1673606b82b778b52e97f9ce57",
            type: "GET",
            dataType: "jsonp",
            // succsess data ------------------------------------------------------------------------------------------------------------------------------
            success: function (data) {
             
                // weather icon list for 5 day----------------------------------------------------------------------------------------------------------------------------------------------------------
                var iconCode = data.list[0].weather[0].icon;
                var iconCodeTwo = data.list[1].weather[0].icon;
                var iconCodeThr = data.list[2].weather[0].icon;
                var iconCodeFou = data.list[3].weather[0].icon;
                var iconCodeFiv = data.list[4].weather[0].icon;


                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                var iconUrl = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
                var iconUrl = "http://openweathermap.org/img/w/" + iconCodeThr + ".png";
                var iconUrl = "http://openweathermap.org/img/w/" + iconCodeFou + ".png";
                var iconUrl = "http://openweathermap.org/img/w/" + iconCodeFiv + ".png";


                $("#iconDayOne").html("<img src='" + iconUrl  + "'>");
                $("#iconDayTwo").html("<img src='" + iconUrl  + "'>");
                $("#iconDayThr").html("<img src='" + iconUrl  + "'>");
                $("#iconDayFou").html("<img src='" + iconUrl  + "'>");
                $("#iconDayFiv").html("<img src='" + iconUrl  + "'>");
                // weather icon list for 5 day----------------------------------------------------------------------------------------------------------------------------------------------------------
                // weather temp and humidity list for 5 day----------------------------------------------------------------------------------------------------------------------------------------------------------
                dayOneTemp = data.list[0].main.temp
                dayTwoTemp = data.list[1].main.temp
                dayThrTemp = data.list[2].main.temp
                dayFouTemp = data.list[3].main.temp
                dayFivTemp = data.list[4].main.temp

                dayOneHumid = data.list[0].main.humidity
                dayTwoHumid = data.list[1].main.humidity
                dayThrHumid = data.list[2].main.humidity
                dayFouHumid = data.list[3].main.humidity
                dayFivHumid = data.list[4].main.humidity
                // weather temp and humidity list for 5 day----------------------------------------------------------------------------------------------------------------------------------------------------------

               

                // print 5 day in each 5 day forcast box-------------------------------------------------------------------------------------------------
                $('#DayOnePrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Hum:'+' '+ dayOneHumid+'%'+'</br>');
                $('#DayTwoPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Hum:'+' '+ dayTwoHumid+'%'+'</br>');
                $('#DayThrPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Hum:'+' '+ dayThrHumid+'%'+'</br>');
                $('#DayFouPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Hum:'+' '+ dayFouHumid+'%'+'</br>');
                $('#DayFivPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Hum:'+' '+ dayFivHumid+'%'+'</br>');
                
            }
        });
    }
    else {
        alert('oof')
    }
    })
})



$(document).ready(function(){

    $('#searchBtn').click(function(){

    var city = $('#search').val();
    var storedLat = JSON.parse(localStorage.getItem("Lat"))
    var storedLon = JSON.parse(localStorage.getItem("Lon"))

    if(city != ''){

        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/uvi?http://api.openweathermap.org/data/2.5/uvi/forecast?"+
            "&appid=1fdbaf1673606b82b778b52e97f9ce57"+
            "&lat="+storedLat+
             "&lon="+storedLon+
             "&cnt=1",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                  
                console.log(data)
                

            }
        });
    }
    else {
        alert('oof')
    }
    })
})
