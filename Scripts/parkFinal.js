//Full Code//

/* NEEDED FOR LOCATION LIST VALUE */
//const locationOptionList = document.getElementById("locationOptionList")

/* NEEDED FOR PARK TYPE LIST VALUE */
//const parkOptionList = document.getElementById("parkOptionList");

/* NEEDED TO DISPLAY THE PARKS AS LIST (MAY NOT USE (TEST CARD INSTEAD IF TIME)*/
//const parkActualList = document.getElementById("parkActualList")

window.onload = function () {

    parkOptionDropdown();
    locationOptionDropdown();
    locationContainerHide();
    typeContainerHide();
    parkContainerHide();


    const locationOptionList = document.getElementById("locationOptionList");
    const parkOptionList = document.getElementById("parkOptionList");
    const parkActualList = document.getElementById("parkActualList");
    const parkContainer = document.getElementById("parkContainer");
    const parkInfoContainer = document.getElementById("parkInfoContainer");

    parkOptionList.onchange = parkOptionChange;
    locationOptionList.onchange = locationOptionChange;
    parkActualList.onchange = parkActualChange;

}

function parkContainerHide() { /* HIDE DISPLAY CONTAINER FROM BEGINNING */
    document.getElementById("parkContainer").style.display = "none";
}
//----------create HIDE for dropdown to show on radio buttons------------//

function locationContainerHide() { /* HIDES LOCATION LIST */

    if (document.getElementById("radioLocationBtn").checked) {
        document.getElementById("locationContainer").style.display = "block";
        parkContainerHide();
        const parkInfoContainer = document.getElementById("parkInfoContainer")
        const locationOptionList = document.getElementById("locationOptionList")
        parkInfoContainer.innerHTML = "";
        locationOptionList.selectedIndex = 0;
    }
    else {
        document.getElementById("locationContainer").style.display = "none";
    }
}

function typeContainerHide() { /* HIDES PARK TYPE LIST */

    if (document.getElementById("radioParkTypeBtn").checked) {
        document.getElementById("typeContainer").style.display = "block";
        parkContainerHide();
        const parkInfoContainer = document.getElementById("parkInfoContainer")
        const parkOptionList = document.getElementById("parkOptionList")
        parkInfoContainer.innerHTML = "";
        parkOptionList.selectedIndex = 0;
    }
    else {
        document.getElementById("typeContainer").style.display = "none";
    }
}

const locationBtn = document.querySelectorAll('input[name="searchtype"]');
locationBtn.forEach(radio => {
    radio.addEventListener('click', locationContainerHide);
});

const parkTypeBtn = document.querySelectorAll('input[name="searchtype"]');
parkTypeBtn.forEach(radio => {
    radio.addEventListener('click', typeContainerHide);
});
//--------------------create HIDE for dropdown to show on radio buttons------------//

function locationOptionDropdown() /* FOR LOCATION DROPDOWN */ {

    const locationOptionList = document.getElementById("locationOptionList");
    let blankLocation = document.createElement("option");
    blankLocation.value = "locationOption";
    blankLocation.textContent = "Where do you want to visit?"
    locationOptionList.appendChild(blankLocation)
    

    for (let j = 0; j < locationsArray.length; j++) {
        let loption = new Option(locationsArray[j])

        locationOptionList.appendChild(loption);
    }
}

function parkOptionDropdown() /* FOR PARK TYPE DROPDOWN */ {

    const parkOptionList = document.getElementById("parkOptionList");
    let blankParkType = document.createElement("option");
    blankParkType.value = "parkOption";
    blankParkType.textContent = "What kind of park?"
    parkOptionList.appendChild(blankParkType)

    for (let i = 0; i < parkTypesArray.length; i++) {
        let option = new Option(parkTypesArray[i])

        parkOptionList.appendChild(option);
    }
    
}

function locationOptionChange() { /* LOAD DROPDOWN BASED ON LOCATION */
    const parkInfoContainer = document.getElementById("parkInfoContainer")
    parkInfoContainer.innerHTML = "";
    
    const parkActualList = document.getElementById("parkActualList")
   
    parkActualList.length = 0;
    let locationChoice = document.getElementById("locationOptionList").value

    let blankPark = document.createElement("option");
    blankPark.value = "blankPark";
    blankPark.textContent = "Choose a park"
    parkActualList.appendChild(blankPark)

    let matchCount = 0;

    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].State == locationChoice) {
            matchCount++;

            let cardSize = document.createElement("div");
            cardSize.className = "col-sm-6 col-lg-4 mb-4 mt-4";
            parkInfoContainer.appendChild(cardSize) 
        
            let card = document.createElement("div");
            card.className = "card bg-light";
            cardSize.appendChild(card)  
        
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody) 
        
            let title = document.createElement("h1");
            title.className = "card-title";
            title.innerHTML = nationalParksArray[i].LocationName;
            cardBody.appendChild(title)
        
            let title2 = document.createElement("h4");
            title2.className = "card-title";
            title2.innerHTML = "Address"
            cardBody.appendChild(title2)
        
            let textAddress = document.createElement("p");
            textAddress.className = "card-text";
            textAddress.innerHTML = nationalParksArray[i].Address
            cardBody.appendChild(textAddress)
        
            let textCityStateZip = document.createElement("p");
            textCityStateZip.className = "card-text";
            textCityStateZip.innerHTML = nationalParksArray[i].City + ", " + nationalParksArray[i].State + " " + nationalParksArray[i].ZipCode
            cardBody.appendChild(textCityStateZip)
        

            let option = new Option(nationalParksArray[i].LocationName);
            parkActualList.appendChild(option);            
        }
    }

    let parkContainer = document.getElementById("parkContainer");

    if (matchCount > 0) {
        parkContainer.style.display = "block";
    }
    else {
        parkContainer.style.display = "none";
    }

}

function parkOptionChange() {  /* LOAD DROPDOWN BASED ON PARK TYPE AND LOADS CARDS*/
    const parkInfoContainer = document.getElementById("parkInfoContainer")
    parkInfoContainer.innerHTML = "";

    const parkActualList = document.getElementById("parkActualList")
    parkActualList.length = 0;
    
    let typeChoice = document.getElementById("parkOptionList").value

    let blankPark = document.createElement("option");
    blankPark.value = "blankPark";
    blankPark.textContent = "Choose a park"
    parkActualList.appendChild(blankPark)

    let matchCount = 0;

    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].LocationName.indexOf(typeChoice) != -1) {
            matchCount++;

            let cardSize = document.createElement("div");
            cardSize.className = "col-sm-6 col-lg-4 mb-4 mt-4";
            parkInfoContainer.appendChild(cardSize) 
        
            let card = document.createElement("div");
            card.className = "card bg-light";
            cardSize.appendChild(card)  
        
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody) 
        
            let title = document.createElement("h1");
            title.className = "card-title";
            title.innerHTML = nationalParksArray[i].LocationName;
            cardBody.appendChild(title)
        
            let title2 = document.createElement("h4");
            title2.className = "card-title";
            title2.innerHTML = "Address"
            cardBody.appendChild(title2)
        
            let textAddress = document.createElement("p");
            textAddress.className = "card-text";
            textAddress.innerHTML = nationalParksArray[i].Address
            cardBody.appendChild(textAddress)
        
            let textCityStateZip = document.createElement("p");
            textCityStateZip.className = "card-text";
            textCityStateZip.innerHTML = nationalParksArray[i].City + ", " + nationalParksArray[i].State + " " + nationalParksArray[i].ZipCode
            cardBody.appendChild(textCityStateZip)
        

            let option = new Option(nationalParksArray[i].LocationName);
            parkActualList.appendChild(option);
        }
    }
    let parkContainer = document.getElementById("parkContainer");

    if (matchCount > 0) {
        parkContainer.style.display = "block";
    }
    else {
        parkContainer.style.display = "none";
    }
}

function parkActualChange() { /* DISPLAY INFO BASED ON PARK SELECTED */
    const parkInfoContainer = document.getElementById("parkInfoContainer")
    parkInfoContainer.innerHTML = "";

    let parkActualListChoice = document.getElementById("parkActualList").value

    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].LocationName == parkActualListChoice) {

            let cardSize = document.createElement("div");
            cardSize.className = "col-lg-10 offset-lg-1 mb-4 mt-4";
            parkInfoContainer.appendChild(cardSize) 
        
            let card = document.createElement("div");
            card.className = "card bg-light";
            cardSize.appendChild(card)  

            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody) 
        
            let title = document.createElement("h1");
            title.className = "card-title";
            title.innerHTML = nationalParksArray[i].LocationName;
            cardBody.appendChild(title)
        
            let title2 = document.createElement("h4");
            title2.className = "card-title";
            title2.innerHTML = "Address"
            cardBody.appendChild(title2)
        
            let textAddress = document.createElement("p");
            textAddress.className = "card-text";
            textAddress.innerHTML = nationalParksArray[i].Address
            cardBody.appendChild(textAddress)
        
            let textCityStateZip = document.createElement("p");
            textCityStateZip.className = "card-text";
            textCityStateZip.innerHTML = nationalParksArray[i].City + ", " + nationalParksArray[i].State + " " + nationalParksArray[i].ZipCode
            cardBody.appendChild(textCityStateZip)
        
            let textPhone = document.createElement("p");
            textPhone.className = "card-text";
            textPhone.innerHTML = "Phone Number: " + nationalParksArray[i].Phone
            cardBody.appendChild(textPhone)
        
            let footer = document.createElement("cardFooter");
            footer.className = "card-footer"
            card.appendChild(footer)
        
            let a = document.createElement("a");
            a.href = nationalParksArray[i].Visit
            a.className = "btn btn-primary"
            a.innerHTML = "Learn More"
            footer.appendChild(a)
        }
    }
}

//MATCH COUNT (IF THERE ARE MATCH IT WILL RUN THE FUNCTION IF NOT IT WON'T)






