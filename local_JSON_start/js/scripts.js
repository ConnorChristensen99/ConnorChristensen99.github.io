const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5879400&appid=518946f0e1b1450c3dece17c18406782&units=imperial";

fetch (apiURL)
.then ((response) => response.json())
.then ((weatherInfo) => {
  
    const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";

    
    const d = new Date();
    const todayDayNumber = d.getDay();

    let forecastDayNumber = todayDayNumber;

    console.log(forecastDayNumber);

    for (i=0; i < weatherInfo.length; i++) {

        var time =weatherInfo[i].dt_text;



        if (time.includes('21:00:00')) {
            forecastDayNumber += 1;

            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            console.log(">"+ weekday[forecastDayNumber]);

            
            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath= "//openweathermap.org/img/wn/" + iconcode + "@2x.png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;


            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            document.getElementById('weatherforecast').appendChild(theDay);

        }


    }



});

