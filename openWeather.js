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
                localStorage.setItem("City", JSON.stringify(city))
                cityName = data.name
                temp = data.main.temp
                humid = data.main.humidity
                windSpeed = data.wind.speed
                var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $("#icon").html("<img src='" + iconUrl  + "'>");
                // $('#innerContent').text(temp);
                // $('#innerContent').text(humid);
                $('#cityName').text(cityName)
                $('#currentTemp').text('Temperature'+' ' +temp+' '+'F°');
                $('#currentHumid').text('Humidity:'+' '+humid+' '+'%');
                $('#currentWind').text('Wind Speed:'+' '+windSpeed+' '+'MPH');



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

                console.log(data)

                $("#iconDayOne").html("<img src='" + iconUrl  + "'>");
                $("#iconDayTwo").html("<img src='" + iconUrl  + "'>");
                $("#iconDayThr").html("<img src='" + iconUrl  + "'>");
                $("#iconDayFou").html("<img src='" + iconUrl  + "'>");
                $("#iconDayFiv").html("<img src='" + iconUrl  + "'>");


                $('#DayOnePrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Humd:'+' '+ dayOneHumid+' '+'%'+'</br>');
                $('#DayTwoPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Humd:'+' '+ dayTwoHumid+' '+'%'+'</br>');
                $('#DayThrPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Humd:'+' '+ dayThrHumid+' '+'%'+'</br>');
                $('#DayFouPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Humd:'+' '+ dayFouHumid+' '+'%'+'</br>');
                $('#DayFivPrint').text('Temp'+' ' +temp+'F°').append('<br>'+'Humd:'+' '+ dayFivHumid+' '+'%'+'</br>');

                
                // $('#dayOne');




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