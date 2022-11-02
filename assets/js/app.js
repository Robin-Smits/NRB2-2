console.log('hello');
const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('damsBTN');
const areaButton = document.getElementById('areaBTN');
const basicButton = document.getElementById('basicBTN');
const addComment = document.getElementById('add-button');

function checkBoxInput(){
const checkBoxRivers = document.getElementById('riversCheck');
const checkBoxDams = document.getElementById('damsCheck');
const checkBoxArea = document.getElementById('areaCheck');
if (checkBoxRivers.checked == true){
    console.log('Rivers Activate');
    changeMapToRivers();
  } else {
    console.log('Rivers Inactive')
  }
  if (checkBoxDams.checked == true){
    console.log('Dams Activate');
    changeMapTodams();
  } else {
    console.log('Dams Inactive')
  }
  if (checkBoxArea.checked == true){
    console.log('Area Activate');
    changeMapToarea();
  } else {
    console.log('Area Inactive')
  }
}


let firstName = '';
let lastName = '';
let userComment = '';

let inputButtonID = '';
let infoCardPopUpID = '';
let popUpTitle = '';
let popUpInhoud = '';
let infoCardPositioningClass = ''

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);
basicButton.addEventListener('click', checkBoxInput); // changeMapToBasic
addComment.addEventListener('click', addComments);

/**
 * Function that makes an overlay with the river overview and shows it
 */
function changeMapToRivers() {
    //createMapOverlay("./assets/images/river.png");
    changeMapTitle('Rivers');
    //changeMap = document.getElementById('changeMapDisplay');
    //changeMap.src = "./assets/images/cleanMap.png"
    showInfo1Buttons();
};

/**
 * Function that makes all the overlays disappear and sets the map to the basic one
 */
function changeMapToBasic() {
    changeMap = document.getElementById('changeMapDisplay');
    changeMap.src = "./assets/images/beforeMap.png"
    changeMapTitle('Base map');
    clearMapOverlays();
};

/**
 * Function that puts an overlay on of the dams
 */
function changeMapTodams() {
    //createMapOverlay("./assets/images/river.png");
    changeMapTitle('Dams');

    // add info cards
    //remove buttons
}

/**
 * Function that makes a overlay appear with the area visual
 */
function changeMapToarea() {
    //createMapOverlay("./assets/images/river.png");
    changeMapTitle('Area restrictions');
    //add info cards

    //remove buttons
    clearInfo1Buttons()
};

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
        commentDiv.classList.add('userCommentInput');
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
    source = document.getElementById('mapDisplay');
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

    //inputButton = document.createElement('button');
    //src = document.getElementById('mapDisplay');
    //inputButton.setAttribute('id', inputButtonID);
    //inputButton.classList.add('positionIbutton');
    //inputButton.classList.add('mapOverlayButton');
    //inputButton.innerHTML = 'I';
    //src.appendChild(inputButton);
}
/**
 * Function that makes the pop-up card and displays it
 * @param {string} infoCardPopUpID id that the element gets
 * @param {string} popUpContentStyling class with the styling of the pop-up
 * @param {class} infoCardPositioningClass positioning of the info button on the map
 * @param {string} popUpTitle the title of the map
 * @param {string} popUpExplenation the info that the info card includes
 */
function createPopUp(infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, popUpExplenation) {
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
    btn[7].onclick = function () {
        modal[7].style.display = "block";
    }
    btn[8].onclick = function () {
        modal[8].style.display = "block";
    }
    btn[9].onclick = function () {
        modal[9].style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
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
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
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
    }
}

/**
 * Function where you can create an entire new pop-up menu 
 * @param {string} inputButtonID The id of the new button on the map
 * @param {string} infoCardPopUpID The id of the pop-up behind the button
 * @param {class} infoCardPositioningClass The positioning on the map based on the contained info
 * @param {string} popUpTitle Title of the displayed map
 * @param {string} popUpInhoud The text in the pop-up
 */
function addFunctionalButton(inputButtonID, buttonPositionStyle, infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, popUpInhoud) {
    createChangeButton(inputButtonID, buttonPositionStyle)
    createPopUp(infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, popUpInhoud)
    //makeButtonClickable2(infoCardPopUpID, inputButtonID);
}

function clearInfo1Buttons() {
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
function showInfo1Buttons() {
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

addFunctionalButton('inputButton1', 'positionIbutton', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '1e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton2', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '2e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton3', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '3e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton4', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '4e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton5', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '5e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton6', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '6e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton7', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '7e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton8', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '8e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton9', 'infoCard1PopUp', 'popUp-content-styling', 'stylingHeaderInfoCard1', '9e pop up', 'dit is tekst');
addFunctionalButton('inputButton1', 'positionIbutton10', 'infoCard1PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard2', '10e pop up', 'dit is tekst');
makeButtonClickable();
clearInfo1Buttons();