console.log('hello');
const basicButton = document.getElementById('basicBTN');
const resetButton = document.getElementById('resetBTN');
const addComment = document.getElementById('add-button');

let firstName = '';
let lastName = '';
let userComment = '';

let inputButtonID = '';
let infoCardPopUpID = '';
let popUpTitle = '';
let popUpInhoud = '';
let infoCardPositioningClass = '';


basicButton.addEventListener('click', checkBoxInput); // changeMapToBasic
resetButton.addEventListener('click', changeMapToBasic);
addComment.addEventListener('click', addComments);
/**
 * Function that retrieves the users output from the checkboxes
 */
function checkBoxInput() {
    const checkBoxRivers = document.getElementById('riversCheck');
    const checkBoxDams = document.getElementById('damsCheck');
    const checkBoxArea = document.getElementById('areaCheck');
    const checkBoxBuffer = document.getElementById('bufferrCheck');
    const checkBoxInformation = document.getElementById('newRiverCheck');
    if (checkBoxRivers.checked == true) {
        console.log('Rivers Activate');
        changeMapToRivers();
    } else {
        console.log('Rivers Inactive')
    }
    if (checkBoxDams.checked == true) {
        console.log('Dams Activate');
        changeMapTodams();
    } else {
        console.log('Dams Inactive');
    }
    if (checkBoxArea.checked == true) {
        console.log('Area Activate');
        changeMapToarea();
    } else {
        console.log('Area Inactive');
    }
    if (checkBoxBuffer.checked == true) {
        console.log('Buffer Activate');
        changeMapToBuffer();
    } else {
        console.log('Buffer Inactive');
    }
    if (checkBoxInformation.checked == true) {
        console.log('Information Activate');
        changeMapToInformation();
    } else {
        console.log('Information Inactive');
    }
}

/**
 * Function that makes all the overlays disappear and sets the map to the basic one
 */
function changeMapToBasic() {
    // change title back
    changeMapTitle('Base map');
    // remove all buttons
    clearRiverButtons();
    clearDamsButtons();
    clearAreaButtons();
    clearBufferButtons()
    clearInformationButtons();
    //uncheck all options
    uncheckAll();
    // clear all overlays
    clearMapOverlays();
    //changeMap = document.getElementById('changeMapDisplay');
    //changeMap.src = "./assets/images/YvesBasicVersion.png";
};

/**
 * Function that makes an overlay with the river overview and shows it
 */
function changeMapToRivers() {
    changeMapTitle('Existing Waterbodies');
    // add info cards
    showRiverButtons();
    createMapOverlay("./assets/images/existingWaterBodys.png");
};
/**
 * Function that puts an overlay on of the dams
 */
function changeMapTodams() {
    changeMapTitle('Recreational areas');
    // add info cards
    showDamsButtons();
    createMapOverlay("./assets/images/recreationalAreas.png");
}

/**
 * Function that makes a overlay appear with the area visual
 */
function changeMapToarea() {
    changeMapTitle('Towns');
    //add info cards
    showAreaButtons();
    createMapOverlay("./assets/images/towns.png");
};
/**
 * Function that makes a overlay appear with the buffer visual
 */
function changeMapToBuffer() {
    changeMapTitle('Buffer');
    showBufferButtons();
    createMapOverlay("./assets/images/buffers.png");
};
/**
 * Function that makes a overlay appear with the information visual
 */
function changeMapToInformation() {
    changeMapTitle('The Yve');
    //add info cards
    showInformationButtons();
};

/**
 * Function that makes the checkboxes empty
 */
function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
}

document.querySelector('button').addEventListener('click', uncheckAll)

/**
 * Function that gets the inputted data and makes a new comment with it.
 */
function addComments() {
    inputFirstName = document.getElementById('fname');
    inputLastName = document.getElementById('lname');
    inputComment = document.getElementById('comments');
    inputCompany = document.getElementById('organization');
    firstName = inputFirstName.value;
    lastName = inputLastName.value;
    comment = inputComment.value;
    organization = inputCompany.value;
    addCommentsLayout(firstName, lastName, organization, comment);
}

/**
 * Function that makes the div with the comment and styling
 * @param {string} firstName users first name
 * @param {string} lastName users last name
 * @param {string} organization name of the organization of the user
 * @param {string} comment the comment that the user typed
 */
function addCommentsLayout(firstName, lastName, organization, comment) {
    if ((firstName.length > 1 && lastName.length > 1) && (organization.length > 1 && comment.length > 1)) {
        commentDiv = document.createElement('div');
        src = document.getElementById('displayUserInput');
        commentDiv.classList.add('userCommentOutput');
        src.appendChild(commentDiv);
        //p
        commentUserName = document.createElement('p');
        commentUserName.setAttribute('id', 'commmentName');
        commentDiv.appendChild(commentUserName);
        //strong
        commentUserNameStrong = document.createElement('strong');
        commentUserNameStrong.innerHTML = `${firstName} ${lastName} (${organization})`;
        commentUserName.appendChild(commentUserNameStrong);
        //hr
        commentHr = document.createElement('hr');
        commentDiv.appendChild(commentHr);
        //p commentsection
        displayComment = document.createElement('p');
        displayComment.innerHTML = `${comment}`;
        displayComment.classList.add('UserComment')
        commentDiv.appendChild(displayComment);
    } else {
        alert("Your inputs didn't meet the requirements. The requerements are at least one character");
    }
    clearInputFields()
};

/**
 * clears the value of the input field
 */
function clearInputFields() {
    console.log('hello');
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('comments').value = "";
    document.getElementById('organization').value = "";
}

/**
 * Functie that removes the overlays of the map
 */
function clearMapOverlays() {
    for (i = 0; i < 25; i++) {
        const mapOverlayRemove = document.getElementById("mapOverlay");
        mapOverlayRemove.remove();
    }
}

/**
 * function that creates the overlays of the map
 * @param {string} OverlaySource the direction to the image that will become the overlay
 */
function createMapOverlay(OverlaySource) {
    imgDiv = document.createElement('div');
    source = document.getElementById('mapDisplayOverlays');
    imgDiv.classList.add('mapOverlay');
    imgDiv.setAttribute('id', 'mapOverlay')
    source.appendChild(imgDiv);
    displayRivers = document.createElement('img');
    displayRivers.src = OverlaySource;
    displayRivers.classList.add('maps');
    displayRivers.setAttribute('alt', 'map')
    imgDiv.appendChild(displayRivers);
}

/**
 * Function that makes the title of the map change
 * @param {string} newMapTitle the new title of the map
 */
function changeMapTitle(newMapTitle) {
    src = document.getElementById('mapTitle');
    src.innerHTML = newMapTitle;
}

/**
 * Function that makes a new info card for the map and sets its position
 * @param {string} inputButtonID The id that you give the button
 * @param {class} buttonPositionStyle The style with the x and y position of the I on the map
 */
function createChangeButton(inputButtonID, buttonPositionStyle) {
    buttonDiv = document.createElement('div');
    src = document.getElementById('mapDisplay');
    buttonDiv.setAttribute('id', `div${inputButtonID}`)
    src.appendChild(buttonDiv);

    inputButton = document.createElement('button');
    inputButton.setAttribute('id', inputButtonID);
    inputButton.classList.add(buttonPositionStyle);
    inputButton.classList.add('mapOverlayButton');
    inputButton.innerHTML = 'I';
    buttonDiv.appendChild(inputButton);
}

/**
 * Function that makes the pop-up card and displays it
 * @param {string} infoCardPopUpID id that the element gets
 * @param {string} popUpContentStyling class with the styling of the pop-up
 * @param {class} infoCardPositioningClass positioning of the info button on the map
 * @param {string} popUpTitle the title of the map
 * @param {string} connectToImage Link to the image that you want to display in the pop up
 * @param {string} popUpExplenation the info that the info card includes
 */
function createPopUp(infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, connectToImage, popUpExplenation) {
    popUpDiv = document.createElement('div');
    src = document.getElementById('mapDisplay');
    popUpDiv.setAttribute('id', infoCardPopUpID);
    popUpDiv.classList.add('popUp');
    src.appendChild(popUpDiv);
    //main div
    mainDiv = document.createElement('div');
    mainDiv.classList.add(popUpContentStyling);
    mainDiv.classList.add('popUp-inhoud');
    popUpDiv.appendChild(mainDiv);
    //span
    span = document.createElement('span');
    span.classList.add('popUp-sluiten');
    span.setAttribute('id', `${infoCardPopUpID}Content`);
    span.innerHTML = "&times";
    mainDiv.appendChild(span);
    //p
    popUpP = document.createElement('p');
    popUpP.classList.add(infoCardPositioningClass);
    mainDiv.appendChild(popUpP);
    //popUpStrong
    popUpStrong = document.createElement('strong');
    popUpStrong.innerHTML = popUpTitle;
    popUpP.appendChild(popUpStrong);
    //div layer2
    div1 = document.createElement('div');
    mainDiv.appendChild(div1);
    //img
    popUpImg = document.createElement('img');
    popUpImg.src = connectToImage;//'./assets/images/LegendPreset.png'
    popUpImg.classList.add('popUpContentImage');
    div1.appendChild(popUpImg);
    //p2
    div1P = document.createElement('p');
    div1P.innerHTML = popUpExplenation;
    div1.appendChild(div1P);
}

/**
 * Function that makes all the buttons clickable
 */
function makeButtonClickable() {
    var modal = document.getElementsByClassName('popUp');
    // Get the button that opens the modal
    var btn = document.getElementsByClassName('mapOverlayButton');
    //console.log(btn);


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('popUp-sluiten');

    // When the user clicks the button, open the modal 
    // Rivers
    btn[0].onclick = function () {
        modal[0].style.display = "block";
    }
    btn[1].onclick = function () {
        modal[1].style.display = "block";
    }
    btn[2].onclick = function () {
        modal[2].style.display = "block";
    }
    btn[3].onclick = function () {
        modal[3].style.display = "block";
    }
    btn[4].onclick = function () {
        modal[4].style.display = "block";
    }
    btn[5].onclick = function () {
        modal[5].style.display = "block";
    }
    btn[6].onclick = function () {
        modal[6].style.display = "block";
    }
    btn[7].onclick = function () {
        modal[7].style.display = "block";
    }
    btn[8].onclick = function () {
        modal[8].style.display = "block";
    }
    btn[9].onclick = function () {
        modal[9].style.display = "block";
    }
    // Dams
    btn[10].onclick = function () {
        modal[10].style.display = "block";
    }

    btn[11].onclick = function () {
        modal[11].style.display = "block";
    }
    btn[12].onclick = function () {
        modal[12].style.display = "block";
    }
    btn[13].onclick = function () {
        modal[13].style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    // Rivers
    span[0].onclick = function () {
        modal[0].style.display = "none";
    }
    span[1].onclick = function () {
        modal[1].style.display = "none";
    }
    span[2].onclick = function () {
        modal[2].style.display = "none";
    }
    span[3].onclick = function () {
        modal[3].style.display = "none";
    }
    span[4].onclick = function () {
        modal[4].style.display = "none";
    }
    span[5].onclick = function () {
        modal[5].style.display = "none";
    }
    span[6].onclick = function () {
        modal[6].style.display = "none";
    }
    span[7].onclick = function () {
        modal[7].style.display = "none";
    }
    span[8].onclick = function () {
        modal[8].style.display = "none";
    }
    span[9].onclick = function () {
        modal[9].style.display = "none";
    }
    // Dams
    span[10].onclick = function () {
        modal[10].style.display = "none";
    }
    span[11].onclick = function () {
        modal[11].style.display = "none";
    }
    span[12].onclick = function () {
        modal[12].style.display = "none";
    }
    span[13].onclick = function () {
        modal[13].style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        // Rivers
        if (event.target == modal[0]) {
            modal[0].style.display = "none";
        }
        if (event.target == modal[1]) {
            modal[1].style.display = "none";
        }
        if (event.target == modal[2]) {
            modal[2].style.display = "none";
        }
        if (event.target == modal[3]) {
            modal[3].style.display = "none";
        }
        if (event.target == modal[4]) {
            modal[4].style.display = "none";
        }
        if (event.target == modal[5]) {
            modal[5].style.display = "none";
        }
        if (event.target == modal[6]) {
            modal[6].style.display = "none";
        }
        if (event.target == modal[7]) {
            modal[7].style.display = "none";
        }
        if (event.target == modal[8]) {
            modal[8].style.display = "none";
        }
        if (event.target == modal[9]) {
            modal[9].style.display = "none";
        }
        // Dams
        if (event.target == modal[10]) {
            modal[10].style.display = "none";
        }
        if (event.target == modal[11]) {
            modal[11].style.display = "none";
        }
        if (event.target == modal[12]) {
            modal[12].style.display = "none";
        }
        if (event.target == modal[13]) {
            modal[13].style.display = "none";
        }
    }
}

/**
 * Function where you can create an entire new pop-up menu 
 * @param {string} inputButtonID The id of the new button on the map
 * @param {class} buttonPositionStyle the style with the position of the info card
 * @param {string} infoCardPopUpID The id of the pop-up behind the button
 * @param {class} popUpContentStyling the style with the looks of the info card
 * @param {class} infoCardPositioningClass The positioning on the map based on the contained info
 * @param {string} popUpTitle Title of the displayed map
 * @param {string} connectToImage Link to the image that you want to display in the pop up
 * @param {string} popUpInhoud The text in the pop-up
 */
function addFunctionalButton(inputButtonID, buttonPositionStyle, infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, connectToImage, popUpInhoud) {
    createChangeButton(inputButtonID, buttonPositionStyle)
    createPopUp(infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, connectToImage, popUpInhoud)
}
// show button Functions
/**
 * Function that makes the inputbuttons of rivers disappear
 */
function clearRiverButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[0].style.display = 'none';
    inputButtonHide[1].style.display = 'none';
}
/**
 * Function that makes the inputbuttons of rivers appear
 */
function showRiverButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[0].style.display = 'block';
    inputButtonHide[1].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of dams disappear
 */
function clearDamsButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[2].style.display = 'none';
    inputButtonHide[3].style.display = 'none';
    inputButtonHide[4].style.display = 'none';
    inputButtonHide[5].style.display = 'none';
}
/**
 * Function that makes the inputbuttons of dams appear
 */
function showDamsButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[2].style.display = 'block';
    inputButtonHide[3].style.display = 'block';
    inputButtonHide[4].style.display = 'block';
    inputButtonHide[5].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of area disappear
 */
function clearAreaButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[6].style.display = 'none';
    inputButtonHide[7].style.display = 'none';
    inputButtonHide[8].style.display = 'none';
    inputButtonHide[9].style.display = 'none';
}
/**
 * Function that makes the inputbuttons of area appear
 */
function showAreaButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[6].style.display = 'block';
    inputButtonHide[7].style.display = 'block';
    inputButtonHide[8].style.display = 'block';
    inputButtonHide[9].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of buffer appear
 */
function showBufferButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[10].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of buffer disappear
 */
function clearBufferButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[10].style.display = 'none';
}
/**
 * Function that makes the inputbuttons of information appear
 */
function showInformationButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    inputButtonHide[11].style.display = 'block';
    inputButtonHide[12].style.display = 'block';
    inputButtonHide[13].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of information disappear
 */
function clearInformationButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[11].style.display = 'none';
    inputButtonHide[12].style.display = 'none';
    inputButtonHide[13].style.display = 'none';
}
// add existing waterbody (rivers) buttons
addFunctionalButton('inputButton1', 'positionIbutton0', 'infoCard1PopUp2', 'popUp-content-styling0', 'stylingHeaderInfoCard1', 'Schenge', './assets/images/schenge.jpg', 'The majority of the time, water plants and other species do not have enough habitat.<br> Low biodiversity is the result.<br> Connected to Veerse Meer, the elevation of Schenge is about 0.3 meters NAP, annually increasing.<br> The water quality in the Schenge region generally falls short of the standards.<br> It is mostly affected by eutrophication, pollution with some heavy metals and pesticides, and inadequate access for migratory fish.');
addFunctionalButton('inputButton1', 'positionIbutton1', 'infoCard1PopUp', 'popUp-content-styling0', 'stylingHeaderInfoCard1', 'Zwaakse Weel', './assets/images/zwaakseWeel.jpg', 'The Zwaakse Weel channel is made up of wetlands, open water devoid of aquatic life.<br> Zwaakse Weel has a low elevation of -0.5 meters NAP.<br> The water is slightly brackish, and particularly nutrient rich.<br> The quality of water is fresh enough to irrigate a wide range of crops, especially drought-sensitive crops.');

// add reacreational area (dams) buttons
addFunctionalButton('inputButton2', 'positionIbutton2', 'infoCard2PopUp', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'area1', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton3', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'area2', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton4', 'infoCard2PopUp', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'area3', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton5', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'area4', './assets/images/49414.jpg', 'dit is tekst');

// add town buttons
addFunctionalButton('inputButton3', 'positionIbutton6', 'infoCard3PopUp', 'popUp-content-styling2', 'stylingHeaderInfoCard1', "s'-Heer Arendskerke", './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton7', 'infoCard3PopUp2', 'popUp-content-styling2', 'stylingHeaderInfoCard1', 'HeinKenszand', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton8', 'infoCard3PopUp', 'popUp-content-styling2', 'stylingHeaderInfoCard1', 'Nisse', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton9', 'infoCard3PopUp2', 'popUp-content-styling2', 'stylingHeaderInfoCard1', "'s-Gravenpolder", './assets/images/49414.jpg', 'dit is tekst');

// add buffer buttons
addFunctionalButton('inputButton2', 'positionIbutton10', 'infoCard2PopUp', 'popUp-content-styling3', 'stylingHeaderInfoCard1', 'Buffer', './assets/images/forestZone.jpg', 'dit is tekst');

// add information buttons

addFunctionalButton('inputButton1', 'positionIbutton11', 'infoCard1PopUp', 'popUp-content-styling4', 'stylingHeaderInfoCard1', 'Culvert', './assets/images/49414.jpg', 'The use of a culvert has been chosen as the best option to cross the roads that are in the way of the connection route.<br> Due to the soft soil surrounding the area (marine clay), box culvert has been chosen, as it can also hold heavy loads.<br> Since the type of soil is soft, it can be strengthened by use of wick drain or Prefabricated Vertical Drain (PVD) which can take water out of the soft soil.');
addFunctionalButton('inputButton1', 'positionIbutton12', 'infoCard1PopUp2', 'popUp-content-styling4', 'stylingHeaderInfoCard1', 'Canal shape', './assets/images/49414.jpg', 'The earthen canal will be made in a trapezoidal shape and considering the soil, will need to have a slope between 18-20 degrees.');
addFunctionalButton('inputButton1', 'positionIbutton13', 'infoCard1PopUp', 'popUp-content-styling4', 'stylingHeaderInfoCard1', 'Trees', './assets/images/49414.jpg', 'dit is tekst');

makeButtonClickable();
clearRiverButtons();
clearDamsButtons();
clearAreaButtons();
clearBufferButtons()
clearInformationButtons();