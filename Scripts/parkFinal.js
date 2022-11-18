//Full Code
/* May not need these 2 (Check for error in code) */
//const locationList = document.getElementById("locationList");
//const parkTypeList = document.getElementById("parkTypeList");

/* <select class="form-select" aria-label="location" id="locationList" name="location" style="display: none;"></select> */
/* <select class="form-select" aria-label="parkType" id="parkTypeList" name="parkType" style="display: none;"> </select> */
//-------------------------------------------------------------------------------------//
/* ALL CONST LIST VALUE */

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

function parkContainerHide() { /*  */
    document.getElementById("parkContainer").style.display = "none";
}
//--------------------create HIDE for dropdown to show on radio buttons------------//
function locationContainerHide() { /* HIDES LOCATION LIST */

    if (document.getElementById("radioLocationBtn").checked){
        document.getElementById("locationContainer").style.display = "block";
        parkContainerHide();
        const parkInfoContainer = document.getElementById("parkInfoContainer")
        parkInfoContainer.innerHTML = "";
    }
    else{
        document.getElementById("locationContainer").style.display = "none";
    }
}

function typeContainerHide() { /* HIDES PARK TYPE LIST */

    if (document.getElementById("radioParkTypeBtn").checked){
        document.getElementById("typeContainer").style.display = "block";
        parkContainerHide();
        const parkInfoContainer = document.getElementById("parkInfoContainer")
        parkInfoContainer.innerHTML = "";
    }
    else{
        document.getElementById("typeContainer").style.display = "none";
    }
}

const locationBtn = document.querySelectorAll('input[name="searchtype"]');
locationBtn.forEach(radio => {
  radio.addEventListener('click', locationContainerHide);
});

const  parkTypeBtn = document.querySelectorAll('input[name="searchtype"]');
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

    /*     
        for (let option of locationsArray) 
            {
                lOption = new Option(option);
                locationOptionList.appendChild(option); 
            } 
        TEST MORE LATER 
    */
    for (let j = 0; j < locationsArray.length; j++) {
        let loption = new Option(locationsArray[j])

        locationOptionList.appendChild(loption);
    }
}

function parkOptionDropdown() /* FOR PARK TYPE DROPDOWN */ {
    //LINE 47 TO 52 WORKS BUT NEEDS TO REPLACE OPTION INSTEAD OF CREATING ONE (PATCH LATER)
    const parkOptionList = document.getElementById("parkOptionList");
    let blankParkType = document.createElement("option");
    blankParkType.value = "parkOption";
    blankParkType.textContent = "What kind of park?"
    parkOptionList.appendChild(blankParkType)

    /*     for (let option of parkTypesArray) 
            {
                option = new Option(option);
                parkOptionList.appendChild(option); 
            } 
        NOT WORKING TEST MORE LATER
    */
    for (let i = 0; i < parkTypesArray.length; i++) {
        let option = new Option(parkTypesArray[i])

        parkOptionList.appendChild(option);
    }
}

function parkOptionChange() {  /* LOAD DROPDOWN BASED ON PARK TYPE */
    const parkActualList = document.getElementById("parkActualList")
    parkActualList.length = 0;
    let typeChoice = document.getElementById("parkOptionList").value
    
    let blankPark = document.createElement("option");
    blankPark.value = "blankPark";
    blankPark.textContent = "Choose a park"
    parkActualList.appendChild(blankPark)

    let matchCount = 0;

    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].LocationName.indexOf(typeChoice) != -1)
        {  matchCount++;
            let parkContainer = document.getElementById("parkContainer");
            parkContainer.style.display = "block";

            let option = new Option(nationalParksArray[i].LocationName);
            parkActualList.appendChild(option);
        }
    }
    let parkContainer = document.getElementById("parkContainer");
    
    if (matchCount > 0){
        parkContainer.style.display = "block";
    }
    else{
        parkContainer.style.display = "none";
    }
}

function locationOptionChange() { /* LOAD DROPDOWN BASED ON LOCATION */
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
           
            let option = new Option(nationalParksArray[i].LocationName);
            parkActualList.appendChild(option);
        }
    }

    let parkContainer = document.getElementById("parkContainer");
    
    if (matchCount > 0){
        parkContainer.style.display = "block";
    }
    else{
        parkContainer.style.display = "none";
    }

}

function parkActualChange() { /* DISPLAY INFO BASED ON PARK SELECTED */
    const parkInfoContainer = document.getElementById("parkInfoContainer")
    parkInfoContainer.innerHTML = "";

    let parkActualListChoice = document.getElementById("parkActualList").value

    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].LocationName == parkActualListChoice) {

            let card = document.createElement("div");
            card.className = "card";
            parkInfoContainer.appendChild(card)
        
            let cardBody = document.createElement("div");
            cardBody.className = "card-body bg-light";
            parkInfoContainer.appendChild(cardBody)

            let cardSize = document.createElement("div");
            cardSize.className = "col-sm-12 col-lg-8 mb-8";
            parkInfoContainer.appendChild(cardSize)
        
            let title = document.createElement("h1");
            title.className = "card-title"; 
            title.innerHTML = nationalParksArray[i].LocationName;
            parkInfoContainer.appendChild(title)

            let title2 = document.createElement("h4");
            title2.className = "card-title"; 
            title2.innerHTML = "Address"
            parkInfoContainer.appendChild(title2)

            let textAddress = document.createElement("p");
            textAddress.className = "card-text";
            textAddress.innerHTML = "Test: " + nationalParksArray[i].Address
            parkInfoContainer.appendChild(textAddress)

            let textCityStateZip = document.createElement("p");
            textCityStateZip.className = "card-text";
            textCityStateZip.innerHTML = "Test: " + nationalParksArray[i].City + ", " + nationalParksArray[i].State + " " + nationalParksArray[i].ZipCode
            parkInfoContainer.appendChild(textCityStateZip)

            let textPhone = document.createElement("p");
            textPhone.className = "card-text";
            textPhone.innerHTML = "Test: " + nationalParksArray[i].Phone
            parkInfoContainer.appendChild(textPhone)

            let a = document.createElement("a");
            a.href = nationalParksArray[i].Visit
            a.className = "btn btn-primary"
            a.innerHTML = "Learn More"
            parkInfoContainer.appendChild(a)

        }   
    }               
}









