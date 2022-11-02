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
}

/**
 * Function that makes an overlay with the river overview and shows it
 */
function changeMapToRivers() {
    changeMapTitle('Rivers');
    // add info cards
    showRiverButtons();

    changeMap = document.getElementById('changeMapDisplay');
    changeMap.src = "./assets/images/YvesInfrastructure.png";
};


/**
 * Function that makes all the overlays disappear and sets the map to the basic one
 */
function changeMapToBasic() {
    changeMapTitle('Base map');
    clearRiverButtons();
    clearDamsButtons();
    clearAreaButtons();
    uncheckAll();

    changeMap = document.getElementById('changeMapDisplay');
    changeMap.src = "./assets/images/YvesBasicVersion.png";

    clearMapOverlays();
};

/**
 * Function that puts an overlay on of the dams
 */
function changeMapTodams() {
    //createMapOverlay("./assets/images/river.png");
    changeMapTitle('Dams');
    // add info cards
    showDamsButtons();
    createMapOverlay("./assets/images/recreationalAreas.png");
}

/**
 * Function that makes a overlay appear with the area visual
 */
function changeMapToarea() {
    //createMapOverlay("./assets/images/river.png");
    changeMapTitle('Area restrictions');
    //add info cards
    showAreaButtons();
    createMapOverlay("./assets/images/towns.png");
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
    console.log(btn);


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
    btn[14].onclick = function () {
        modal[14].style.display = "block";
    }
    btn[15].onclick = function () {
        modal[15].style.display = "block";
    }
    btn[16].onclick = function () {
        modal[16].style.display = "block";
    }
    btn[17].onclick = function () {
        modal[17].style.display = "block";
    }
    btn[18].onclick = function () {
        modal[18].style.display = "block";
    }
    btn[19].onclick = function () {
        modal[29].style.display = "block";
    }
    // Area
    btn[20].onclick = function () {
        modal[20].style.display = "block";
    }

    btn[21].onclick = function () {
        modal[21].style.display = "block";
    }
    btn[22].onclick = function () {
        modal[22].style.display = "block";
    }
    btn[23].onclick = function () {
        modal[23].style.display = "block";
    }
    btn[24].onclick = function () {
        modal[24].style.display = "block";
    }
    btn[25].onclick = function () {
        modal[25].style.display = "block";
    }
    btn[26].onclick = function () {
        modal[26].style.display = "block";
    }
    btn[27].onclick = function () {
        modal[27].style.display = "block";
    }
    btn[28].onclick = function () {
        modal[28].style.display = "block";
    }
    btn[29].onclick = function () {
        modal[29].style.display = "block";
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
    span[14].onclick = function () {
        modal[14].style.display = "none";
    }
    span[15].onclick = function () {
        modal[15].style.display = "none";
    }
    span[16].onclick = function () {
        modal[16].style.display = "none";
    }
    span[17].onclick = function () {
        modal[17].style.display = "none";
    }
    span[18].onclick = function () {
        modal[18].style.display = "none";
    }
    span[19].onclick = function () {
        modal[19].style.display = "none";
    }
    // Area
    span[20].onclick = function () {
        modal[20].style.display = "none";
    }
    span[21].onclick = function () {
        modal[21].style.display = "none";
    }
    span[22].onclick = function () {
        modal[22].style.display = "none";
    }
    span[23].onclick = function () {
        modal[23].style.display = "none";
    }
    span[24].onclick = function () {
        modal[24].style.display = "none";
    }
    span[25].onclick = function () {
        modal[25].style.display = "none";
    }
    span[26].onclick = function () {
        modal[26].style.display = "none";
    }
    span[27].onclick = function () {
        modal[27].style.display = "none";
    }
    span[28].onclick = function () {
        modal[28].style.display = "none";
    }
    span[29].onclick = function () {
        modal[29].style.display = "none";
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
        if (event.target == modal[14]) {
            modal[14].style.display = "none";
        }
        if (event.target == modal[15]) {
            modal[15].style.display = "none";
        }
        if (event.target == modal[16]) {
            modal[16].style.display = "none";
        }
        if (event.target == modal[17]) {
            modal[17].style.display = "none";
        }
        if (event.target == modal[18]) {
            modal[18].style.display = "none";
        }
        if (event.target == modal[19]) {
            modal[19].style.display = "none";
        }
        // Area
        if (event.target == modal[20]) {
            modal[20].style.display = "none";
        }
        if (event.target == modal[21]) {
            modal[21].style.display = "none";
        }
        if (event.target == modal[22]) {
            modal[22].style.display = "none";
        }
        if (event.target == modal[23]) {
            modal[23].style.display = "none";
        }
        if (event.target == modal[24]) {
            modal[24].style.display = "none";
        }
        if (event.target == modal[25]) {
            modal[25].style.display = "none";
        }
        if (event.target == modal[26]) {
            modal[26].style.display = "none";
        }
        if (event.target == modal[27]) {
            modal[27].style.display = "none";
        }
        if (event.target == modal[28]) {
            modal[28].style.display = "none";
        }
        if (event.target == modal[29]) {
            modal[29].style.display = "none";
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
/**
 * Function that makes the inputbuttons of rivers disappear
 */
function clearRiverButtons() {
    for (i = 0; i < 50; i++) {
        inputButtonHide = document.getElementsByClassName('mapOverlayButton');
        console.log(inputButtonHide);
        inputButtonHide[0].style.display = 'none';
        inputButtonHide[1].style.display = 'none';
        inputButtonHide[2].style.display = 'none';
        inputButtonHide[3].style.display = 'none';
        inputButtonHide[4].style.display = 'none';
        inputButtonHide[5].style.display = 'none';
        inputButtonHide[6].style.display = 'none';
        inputButtonHide[7].style.display = 'none';
        inputButtonHide[8].style.display = 'none';
        inputButtonHide[9].style.display = 'none';
    }
}
/**
 * Function that makes the inputbuttons of rivers appear
 */
function showRiverButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    console.log(inputButtonHide);
    inputButtonHide[0].style.display = 'block';
    inputButtonHide[1].style.display = 'block';
    inputButtonHide[2].style.display = 'block';
    inputButtonHide[3].style.display = 'block';
    inputButtonHide[4].style.display = 'block';
    inputButtonHide[5].style.display = 'block';
    inputButtonHide[6].style.display = 'block';
    inputButtonHide[7].style.display = 'block';
    inputButtonHide[8].style.display = 'block';
    inputButtonHide[9].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of dams disappear
 */
 function clearDamsButtons() {
    for (i = 0; i < 50; i++) {
        inputButtonHide = document.getElementsByClassName('mapOverlayButton');
        console.log(inputButtonHide);
        inputButtonHide[10].style.display = 'none';
        inputButtonHide[11].style.display = 'none';
        inputButtonHide[12].style.display = 'none';
        inputButtonHide[13].style.display = 'none';
        inputButtonHide[14].style.display = 'none';
        inputButtonHide[15].style.display = 'none';
        inputButtonHide[16].style.display = 'none';
        inputButtonHide[17].style.display = 'none';
        inputButtonHide[18].style.display = 'none';
        inputButtonHide[19].style.display = 'none';
    }
}
/**
 * Function that makes the inputbuttons of dams appear
 */
function showDamsButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    console.log(inputButtonHide);
    inputButtonHide[10].style.display = 'block';
    inputButtonHide[11].style.display = 'block';
    inputButtonHide[12].style.display = 'block';
    inputButtonHide[13].style.display = 'block';
    inputButtonHide[14].style.display = 'block';
    inputButtonHide[15].style.display = 'block';
    inputButtonHide[16].style.display = 'block';
    inputButtonHide[17].style.display = 'block';
    inputButtonHide[18].style.display = 'block';
    inputButtonHide[19].style.display = 'block';
}
/**
 * Function that makes the inputbuttons of dams disappear
 */
 function clearAreaButtons() {
    for (i = 0; i < 50; i++) {
        inputButtonHide = document.getElementsByClassName('mapOverlayButton');
        console.log(inputButtonHide);
        inputButtonHide[20].style.display = 'none';
        inputButtonHide[21].style.display = 'none';
        inputButtonHide[22].style.display = 'none';
        inputButtonHide[23].style.display = 'none';
        inputButtonHide[24].style.display = 'none';
        inputButtonHide[25].style.display = 'none';
        inputButtonHide[26].style.display = 'none';
        inputButtonHide[27].style.display = 'none';
        inputButtonHide[28].style.display = 'none';
        inputButtonHide[29].style.display = 'none';
    }
}
/**
 * Function that makes the inputbuttons of dams appear
 */
function showAreaButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    console.log(inputButtonHide);
    inputButtonHide[20].style.display = 'block';
    inputButtonHide[21].style.display = 'block';
    inputButtonHide[22].style.display = 'block';
    inputButtonHide[23].style.display = 'block';
    inputButtonHide[24].style.display = 'block';
    inputButtonHide[25].style.display = 'block';
    inputButtonHide[26].style.display = 'block';
    inputButtonHide[27].style.display = 'block';
    inputButtonHide[28].style.display = 'block';
    inputButtonHide[29].style.display = 'block';
}

// add rivers buttons
addFunctionalButton('inputButton1', 'positionIbutton1', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '1e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton2', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton3', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton4', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '4e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton5', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '5e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton6', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '6e pop up', './assets/images/49414.jpg','dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton7', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '7e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton8', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '8e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton9', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '9e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton10', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '10e pop up', './assets/images/49414.jpg', 'dit is tekst');

// add dams buttons
addFunctionalButton('inputButton2', 'positionIbutton11', 'infoCard2PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '2.1e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton12', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2.2e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton13', 'infoCard2PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '2.3e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton14', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2.4e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton15', 'infoCard2PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '2.5e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton16', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2.6e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton17', 'infoCard2PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '2.7e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton18', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2.8e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton19', 'infoCard2PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '2.9e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton2', 'positionIbutton20', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2.10e pop up', './assets/images/49414.jpg', 'dit is tekst');

// add Area buttons
addFunctionalButton('inputButton3', 'positionIbutton21', 'infoCard3PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3.1e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton22', 'infoCard3PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '3.2e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton23', 'infoCard3PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3.3e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton24', 'infoCard3PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '3.4e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton25', 'infoCard3PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3.5e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton26', 'infoCard3PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '3.6e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton27', 'infoCard3PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3.7e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton28', 'infoCard3PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '3.8e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton29', 'infoCard3PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3.9e pop up', './assets/images/49414.jpg', 'dit is tekst');
addFunctionalButton('inputButton3', 'positionIbutton30', 'infoCard3PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '3.10e pop up', './assets/images/49414.jpg', 'dit is tekst');

makeButtonClickable();
clearRiverButtons();
clearDamsButtons();
clearAreaButtons();