//Populate Dropdown
//create change event
//display on card(or something else)
//display given image to data


window.onload = function()
{
    mountainOptionDropdown()

    mountainOptionList = document.getElementById("mountainOptionList")
    mountainInfoContainer = document.getElementById("mountainInfoContainer")

    mountainOptionList.onchange = mountainOptionChange
}

function  mountainOptionDropdown() {

    const  mountainOptionList = document.getElementById("mountainOptionList");
    let blankMountain = document.createElement("option");
    blankMountain.value = "mountainOption";
    blankMountain.textContent = "Select a Mountain"
    blankMountain.style.textAlign = "center"
    mountainOptionList.appendChild(blankMountain)
    

    for (let i = 0; i < mountainsArray.length; i++) {
        let option = new Option(mountainsArray[i].name)

        option.style.textAlign = "center"

        mountainOptionList.appendChild(option);
    }
}

function mountainOptionChange() {
    const mountainInfoContainer = document.getElementById("mountainInfoContainer")
    mountainInfoContainer.innerHTML = "";

    let  mountainOptionListChoice = document.getElementById("mountainOptionList").value


    for (let i = 0; i < mountainsArray.length; i++) {
        if (mountainsArray[i].name == mountainOptionListChoice) {

            let cardSize = document.createElement("div");
            cardSize.className = "col-lg-8 offset-lg-2 mb-2 mt-4";
            mountainInfoContainer.appendChild(cardSize) 
        
            let card = document.createElement("div");
            card.className = "card text-center background";
            card.style.height = "400px shadow-8-strong"
            cardSize.appendChild(card)  
            
            /*let cardImg = document.createElement("img")
            card.className = "card-img-top"
            card.img.src = "" */ /* WAS ORIGINAL TEST */

            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody) 
        
            let title = document.createElement("h1");
            title.className = "card-title"
            title.innerHTML = mountainsArray[i].name;
            cardBody.appendChild(title)
        
            let elevation = document.createElement("h4");
            elevation.className = "card-title";
            elevation.innerHTML = "Elevation: " + mountainsArray[i].elevation + " ft"
            cardBody.appendChild(elevation)
        
            let text = document.createElement("p");
            text.className = "card-text";
            text.innerHTML = mountainsArray[i].desc
            cardBody.appendChild(text)
        
            let img = document.createElement("img");
            img.src = "Images/Image_Given/"+ mountainsArray[i].img;
            img.alt = mountainsArray[i].name;
            img.className = "card-img";
            card.appendChild(img);
        
        
            let footer = document.createElement("cardFooter");
            footer.className = "card-footer"
            footer.innerHTML = mountainsArray[i].effort
            card.appendChild(footer)

        }
    }

}
