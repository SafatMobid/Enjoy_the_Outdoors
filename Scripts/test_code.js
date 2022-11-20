    /* var output = ""; */
    let locationChoice = document.getElementById("locationOptionList").value
    for (let i = 0; i < nationalParksArray.length; i++) 
    {
        if (nationalParksArray[i].State == locationChoice)
        {
            return true;
            /* parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName */

            /* return  parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName */
            /* function returnPark(locationState){ 
                return parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName
            } */
            
            /*output += parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName
            return output; */
        }
        parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName
    }


    //WORKING
    function locationOptionChange()
{
    const parkInfoContainer = document.getElementById("parkInfoContainer");
    /* var output = ""; */
    let locationChoice = document.getElementById("locationOptionList").value
    for (let i = 0; i < nationalParksArray.length; i++) 
    {
        if (nationalParksArray[i].State == locationChoice)
        {
            let p = document.createElement("p");
            p.innerHTML = "Test " + nationalParksArray[i].LocationName
            parkInfoContainer.appendChild(p)

        }
        // 

    }
    
            /* parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName */

            /* return  parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName */
            /* function returnPark(locationState){ 
                return parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName
            } */
            
            /*output += parkInfo.innerHTML = "Test " + nationalParksArray[i].LocationName
            return output; */


 
}
//----------------------------------------------------------------------------------------------------------//
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
    const locationOptionList = document.getElementById("locationOptionList");
    const parkOptionList = document.getElementById("parkOptionList");
    const parkInfo = document.getElementById("parkInfo");
    /* const parkActualList = document.getElementById("parkActualList"); */
    parkOptionList.onchange = parkOptionChange;
    locationOptionList.onchange = locationOptionChange;
    selectParkContainerHide();
    selectParkContainerShow();
}

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
        let loption = document.createElement("option");
        loption.textContent = locationsArray[j];
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
        let option = document.createElement("option");
        option.textContent = parkTypesArray[i];
        parkOptionList.appendChild(option);
    }
}

function parkOptionChange() {  /* LOAD DROPDOWN BASED ON PARK TYPE */

}

function locationOptionChange() { /* LOAD DROPDOWN BASED ON LOCATION */
    const parkActualList = document.getElementById("parkActualList")

    let locationChoice = document.getElementById("locationOptionList").value
    let blankPark = document.createElement("option");
    blankPark.value = "blankPark";
    blankPark.textContent = "Choose a park"
    parkActualList.appendChild(blankPark)
    
    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].State == locationChoice) {
            let option = document.createElement("option");
            option.textContent = nationalParksArray[i].LocationName;
            parkActualList.appendChild(option);
        }
    }
    
}

function selectParkContainerShow(){
    let selectParkContainer = document.getElementById("selectParkContainer");
    selectParkContainer.style.display = "block";
}

function selectParkContainerHide(){
    let selectParkContainer = document.getElementById("selectParkContainer");
    selectParkContainer.style.display = "none";
}

//
//let parkNameType = nationalParksArray.filter((arrayValue)=> arrayValue.LocationName = typeChoice)

//----------------------------------------------------------------------------------------//
function locationOptionChange() { /* LOAD DROPDOWN BASED ON LOCATION */
    const parkActualList = document.getElementById("parkActualList")
    parkActualList.length = 0;
    let locationChoice = document.getElementById("locationOptionList").value

    let blankPark = document.createElement("option");
    blankPark.value = "blankPark";
    blankPark.textContent = "Choose a park"
    parkActualList.appendChild(blankPark)
    

    for (let i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].State == locationChoice) {
            let parkContainer = document.getElementById("parkContainer");
            parkContainer.style.display = "block";

            let option = new Option(nationalParksArray[i].LocationName);
            parkActualList.appendChild(option);
        }

/*         else (nationalParksArray[i].State != locationChoice) //FIGURE OUT TO MAKE IT DISAPPEAR WHEN NO PARKS AVAILABLE
        {
            let parkContainer = document.getElementById("parkContainer");
            parkContainer.style.display = "none";
        } */
    }

}
//------------------------------------------------//
function locationOptionDropdownHide();
{
    let locationContainer = document.getElementById("locationContainer");
    if (radioLocationButtonChecked){
        locationContainer.style.display = "block";
    }
}

function locationContainerHide(){
    let locationContainer = document.getElementById("locationContainer");
        locationContainer.style.display = "block";
}

locationContainerHide();
typeContainerHide();

//---------------------------------------------------------//
radioLocationBtnCheck();
radioParkTypeBtnCheck();

function locationContainerHide() { /* HIDES LOCATION LIST */
    document.getElementById("locationContainer").style.display = "none";
    let radioLocationBtnCheck = document.getElementById("radioLocationBtn").checked;
    if (radioLocationBtnCheck){
        document.getElementById("locationContainer").style.display = "block";
    }
}

function typeContainerHide() { /* HIDES PARK TYPE LIST */

   document.getElementById("typeContainer").style.display = "none";
   let radioParkTypeBtnCheck = document.getElementById("radioParkTypeBtn").checked;
    if (radioParkTypeBtnCheck){
        document.getElementById("typeContainer").style.display = "block";
    }
    else
    document.getElementById("typeContainer").style.display = "none";
}

locationContainerHide();
typeContainerHide();

function locationContainerHide() { /* HIDES LOCATION LIST */
    /* document.getElementById("locationContainer").style.display = "none"; */
}

function typeContainerHide() { /* HIDES PARK TYPE LIST */
   /* document.getElementById("typeContainer").style.display = "none"; */
}

    
function parkActualChange() { /* DISPLAY INFO BASED ON PARK SELECTED */
    const parkInfoContainer = document.getElementById("parkInfoContainer")
    parkInfoContainer.innerHTML = "";

    let parkActualListChoice = document.getElementById("parkActualList").value

    for (let i = 0; i < nationalParksArray.length; i++) { /* TESTING TO MAKE SURE IT SHOWS? IT DOES */
        if (nationalParksArray[i].LocationName == parkActualListChoice) {
            let p = document.createElement("p");
            p.innerHTML = "Test " + nationalParksArray[i].LocationName
            parkInfoContainer.appendChild(p)

        }
    }               
}


//Something about setting Index to 0 (LOOK IT UP)

let cardDeck = document.createElement("div");
cardDeck.className = "row card-deck"
card.appendChild(cardDeck)

let cardSize = document.createElement("div");
cardSize.className = "col-sm-6 col-lg-4 mb-4";
cardDeck.appendChild(cardSize) 

let cardBody = document.createElement("div");
cardBody.className = "card card-body bg-light";
cardDeck.appendChild(cardBody)

//____________________________TEST______________________//
if (nationalParksArray[i].LocationName.indexOf(typeChoice) != -1) {
    matchCount++;

    let cardSize = document.createElement("div");
    cardSize.className = "col-sm-6 col-lg-4 mb-4";
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
    cardBody.appendChild(footer)

    let a = document.createElement("a");
    a.href = nationalParksArray[i].Visit
    a.className = "btn btn-primary"
    a.innerHTML = "Learn More"
    footer.appendChild(a)

    let option = new Option(nationalParksArray[i].LocationName);
    parkActualList.appendChild(option);
}