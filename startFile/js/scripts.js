// what is the path to the JSON file?
const apiURL = "hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
    
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;

    
    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);



    let myStreetTag = document.createElement("p");
    myStreetTag = textContent = myList[i].address;

    let myPhoneTag = document.createElement("p");
    myPhoneTag = textContent = myList[i].phone;
   


    let mySectionTag = document.createElement("section");
    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myPhoneTag);

    

      

    
    
    
    document.getElementById('#').appendChild(mySectionTag);
    }
}); //end of "then" fat arrow function