const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]
/* May not need these 2 (Check for error in code) */
//const locationList = document.getElementById("locationList");
//const parkTypeList = document.getElementById("parkTypeList");

/* <select class="form-select" aria-label="location" id="locationList" name="location" style="display: none;"></select> */
/* <select class="form-select" aria-label="parkType" id="parkTypeList" name="parkType" style="display: none;"> </select> */
//-------------------------------------------------------------------------------------//
/* ALL CONST LIST VALUE (ACTIVATE THE ONES NEEDED) */

/* NEEDED FOR LOCATION LIST VALUE */
//const locationOptionList = document.getElementById("locationOptionList")

/* NEEDED FOR PARK TYPE LIST VALUE */
//const parkOptionList = document.getElementById("parkOptionList");

/* NEEDED TO DISPLAY THE PARKS AS LIST (MAY NOT USE (TEST CARD INSTEAD IF TIME)*/
//const parkActualList = document.getElementById("parkActualList")



//NEEDED TO MOVE CODE ONTO 4TH Script FOR WINDOW>ONLOAD TO WORK
/* window.onload = function()
{
    parkOptionDropdown();
    locationOptionDropdown();
    /* const parkActualList = document.getElementById("parkActualList"); */
    /* parkOptionList.onchange = parkOptionChange; May not need now*/
    /* May need for when creating actual park list  */
//}*/

//WORKING
/* function parkOptionDropdown()
{
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
//WORKING 
/*     for (let i = 0; i < parkTypesArray.length; i++) 
    {
        let option = document.createElement("option");
        option.textContent = parkTypesArray[i];
        parkOptionList.appendChild(option);
    } */
//} */
