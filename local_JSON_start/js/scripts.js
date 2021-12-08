const d = new Date();

const todayDayNumber = d.getDay();

const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";

    const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5879400&appid=518946f0e1b1450c3dece17c18406782&units=imperial";

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById('city').textContent = weatherInfo.city.name;
    let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;
        for (i= 0; i < mylist.length; i++) {
            let time = mylist[i].dt_txt;
            if (time.includes("18:00:00")) {
                forecastDayNumber +=1;
                if (forecastDayNumber === 7){forecastDayNumber = 0;}

                let theDayName = document.createElement('span');
                theDayName.textContent = myweekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xb0";

                const iconcode = weatherInfo.list[i].weather[0].icon;
                const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src=icon_path;

                let theDay = document.createElement("div");
                theDay.setAttribute('id', 'cards')
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById("container").appendChild(theDay);
            }
        }

    
});



