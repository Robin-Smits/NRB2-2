console.log('hello');
const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('damsBTN');
const areaButton = document.getElementById('areaBTN');
const basicButton = document.getElementById('basicBTN');
const addComment = document.getElementById('add-button');

let firstName = '';
let lastName = '';
let userComment = '';

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);
basicButton.addEventListener('click', changeMapToBasic);
addComment.addEventListener('click', addComments);

/**
 * Function that makes an overlay with the river overview and shows it
 */
function changeMapToRivers() {
    createMapOverlay("./assets/images/river.png");
    changeMapTitle('Rivers');
    //changeMap = document.getElementById('changeMapDisplay');
    //changeMap.src = "./assets/images/cleanMap.png"
};

/**
 * Function that makes all the overlays disappear and sets the map to the basic one
 */
function changeMapToBasic() {
    console.log('Basic works')
    changeMap = document.getElementById('changeMapDisplay');
    changeMap.src = "./assets/images/beforeMap.png"
    changeMapTitle('Base map');
    clearMapOverlays();
};

/**
 * Function that puts an overlay on of the dams
 */
function changeMapTodams() {
    createMapOverlay("./assets/images/river.png");
    changeMapTitle('Dams');
}

/**
 * Function that makes a overlay appear with the area visual
 */
function changeMapToarea() {
    createMapOverlay("./assets/images/river.png");
    changeMapTitle('Area restrictions');
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
 * @param {*} firstName users first name
 * @param {*} lastName users last name
 * @param {*} organization name of the organization of the user
 * @param {*} comment the comment that the user typed
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
 * @param {*} OverlaySource 
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
 * @param {*} newMapTitle the new title of the map
 */
function changeMapTitle(newMapTitle) {
    src = document.getElementById('mapTitle');
    src.innerHTML = newMapTitle;
}

/**
 * Creates the button to change the table
 */
function createChangeButton(inputButtonID) {
    inputButton = document.createElement('button');
    src = document.getElementById('mapDisplay');
    inputButton.setAttribute('id', inputButtonID);
    inputButton.classList.add('positionIbutton');
    inputButton.classList.add('mapOverlayButton');
    inputButton.innerHTML = 'I';
    src.appendChild(inputButton);
}
/**
 * Function that makes the pop-up card and displays it
 * @param {*} infoCardPopUpID id that the element gets
 * @param {*} infoCardPositioningClass positioning of the info button on the map
 * @param {*} popUpTitle the title of the map
 * @param {*} popUpExplenation the info that the info card includes
 */
function createPopUp(infoCardPopUpID, infoCardPositioningClass, popUpTitle, popUpExplenation) {
    popUpDiv = document.createElement('div');
    src = document.getElementById('mapDisplay');
    popUpDiv.setAttribute('id', infoCardPopUpID);
    popUpDiv.classList.add('popUp');
    src.appendChild(popUpDiv);
    //main div
    mainDiv = document.createElement('div');
    mainDiv.classList.add('popUp-inhoud');
    popUpDiv.appendChild(mainDiv);
    //span
    span = document.createElement('span');
    span.classList.add('popUp-sluiten');
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
 * function that makes the button clickable
 * @param {*} popUpMenuID The id of the menue of the pop-up
 * @param {*} inputButtonID the id of the input button
 */
function makeButtonClickable (popUpMenuID, inputButtonID){
popUpMenu = document.getElementById(popUpMenuID);
popUpButton = document.getElementById(inputButtonID);
popUpMenuContent = document.getElementsByClassName('popUp-sluiten')[0];

popUpButton.onclick = function () {
    popUpMenu.style.display = 'block';
};

popUpMenuContent.onclick = function () {
    popUpMenu.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == popUpMenu) {
        popUpMenu.style.display = 'none';
    }
}};
/**
 * Function where you can create an entire new pop-up menu 
 * @param {string} inputButtonID The id of the new button on the map
 * @param {string} infoCardPopUpID The id of the pop-up behind the button
 * @param {class} infoCardPositioningClass The positioning on the map based on the contained info
 * @param {string} popUpTitle Title of the displayed map
 * @param {string} popUpInhoud The text in the pop-up
 */
function addFunctionalButton (inputButtonID, infoCardPopUpID, infoCardPositioningClass, popUpTitle, popUpInhoud){
    createChangeButton(inputButtonID)
    createPopUp(infoCardPopUpID, infoCardPositioningClass, popUpTitle, popUpInhoud)
    makeButtonClickable (infoCardPopUpID, inputButtonID)
}

let inputButtonID = 'inputButton1';
let infoCardPopUpID = 'infoCard1PopUp';
let popUpTitle = '1e pop up';
let popUpInhoud = 'dit is tekst';
let infoCardPositioningClass = 'stylingHeaderInfoCard'

addFunctionalButton (inputButtonID, infoCardPopUpID, infoCardPositioningClass, popUpTitle, popUpInhoud);