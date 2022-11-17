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

    selectParkContainerHide();

    selectParkContainerShow();

    const locationOptionList = document.getElementById("locationOptionList");
    const parkOptionList = document.getElementById("parkOptionList");
    const parkInfoContainer = document.getElementById("parkInfoContainer");
    const parkActualList = document.getElementById("parkActualList");
    parkOptionList.onchange = parkOptionChange;
    locationOptionList.onchange = locationOptionChange;
    parkActualList.onchange = parkActualChange;
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

}

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
            
            let option = new Option(nationalParksArray[i].LocationName);

            parkActualList.appendChild(option);
        }
    }
    
}













//----------------------------------------------------------------------------------------------------------//
//Testing to hide dropdown when not selected
function selectParkContainerShow(){
    let selectParkContainer = document.getElementById("selectParkContainer");
    selectParkContainer.style.display = "block";
}

function selectParkContainerHide(){
    let selectParkContainer = document.getElementById("selectParkContainer");
    selectParkContainer.style.display = "none";
}