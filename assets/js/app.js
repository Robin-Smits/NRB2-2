console.log('Javascript is working');
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
        changeMapToRivers();
    }
    if (checkBoxDams.checked == true) {
        changeMapTodams();
    }
    if (checkBoxArea.checked == true) {
        changeMapToarea();
    }
    if (checkBoxBuffer.checked == true) {
        changeMapToBuffer();
    }
    if (checkBoxInformation.checked == true) {
        changeMapToInformation();
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

document.querySelector('button').addEventListener('click', uncheckAll);

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
        displayComment.classList.add('UserComment');
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
    for (i = 0; i < 15; i++) {
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
    imgDiv.setAttribute('id', 'mapOverlay');
    source.appendChild(imgDiv);
    displayRivers = document.createElement('img');
    displayRivers.src = OverlaySource;
    displayRivers.classList.add('maps');
    displayRivers.setAttribute('alt', 'map');
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
    buttonDiv.setAttribute('id', `div${inputButtonID}`);
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
    btn[8].onclick = function () {
        modal[8].style.display = "block";
    }
    btn[9].onclick = function () {
        modal[9].style.display = "block";
    }
    btn[10].onclick = function () {
        modal[10].style.display = "block";
    }

    btn[11].onclick = function () {
        modal[11].style.display = "block";
    }
    btn[12].onclick = function () {
        modal[12].style.display = "block";
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
    span[10].onclick = function () {
        modal[10].style.display = "none";
    }
    span[11].onclick = function () {
        modal[11].style.display = "none";
    }
    span[12].onclick = function () {
        modal[12].style.display = "none";
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
        if (event.target == modal[10]) {
            modal[10].style.display = "none";
        }
        if (event.target == modal[11]) {
            modal[11].style.display = "none";
        }
        if (event.target == modal[12]) {
            modal[12].style.display = "none";
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
    createChangeButton(inputButtonID, buttonPositionStyle);
    createPopUp(infoCardPopUpID, popUpContentStyling, infoCardPositioningClass, popUpTitle, connectToImage, popUpInhoud);
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
}
/**
 * Function that makes the inputbuttons of information disappear
 */
function clearInformationButtons() {
    inputButtonHide = document.getElementsByClassName('mapOverlayButton');
    //style change
    inputButtonHide[11].style.display = 'none';
    inputButtonHide[12].style.display = 'none';
}
// add existing waterbody (rivers) buttons
addFunctionalButton('inputButton1', 'positionIbutton0', 'infoCard1PopUp2', 'popUp-content-styling0', 'stylingHeaderInfoCard1', 'Zwaakse Weel', './assets/images/zwaakseWeel.jpg', 'The Zwaakse Weel channel is made up of wetlands, open water devoid of aquatic life.<br> Zwaakse Weel has a low elevation of -0.5 meters NAP.<br> The water is slightly brackish, and particularly nutrient rich.<br> The quality of water is fresh enough to irrigate a wide range of crops, especially drought-sensitive crops.');
addFunctionalButton('inputButton1', 'positionIbutton1', 'infoCard1PopUp', 'popUp-content-styling0', 'stylingHeaderInfoCard1', 'Schenge', './assets/images/schenge.jpg', 'The majority of the time, water plants and other species do not have enough habitat.<br> Low biodiversity is the result.<br> Connected to Veerse Meer, the elevation of Schenge is about 0.3 meters NAP, annually increasing.<br> The water quality in the Schenge region generally falls short of the standards.<br> It is mostly affected by eutrophication, pollution with some heavy metals and pesticides, and inadequate access for migratory fish.');

// add reacreational area (dams) buttons
addFunctionalButton('inputButton2', 'positionIbutton2', 'infoCard2PopUp', 'popUp-content-styling1', 'stylingHeaderInfoCard1', '‘s-Heer Arendskerke', './assets/images/ArendskerkeNew.png', 'A new recreational area has been added to the west of ‘s-Heer Arendskerke.<br> In this location, close to the highway the river will split to create an eco-friendly environment in the new area.');
addFunctionalButton('inputButton2', 'positionIbutton3', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'Nieuw Heinkenszand', './assets/images/HeinkenszandNew.png', 'A new recreational area has been added to the east of Heinkenszand.<br> In this location, the river will split to create an eco-friendly environment in the new area.');
addFunctionalButton('inputButton2', 'positionIbutton4', 'infoCard2PopUp', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'Nieuw Nisse', './assets/images/NisseNew.png', 'A new recreational area has been added to the south-west of Nisse, in the bend of the river.<br> In this location, the river will split to create an eco-friendly environment in the new area.');
addFunctionalButton('inputButton2', 'positionIbutton5', 'infoCard2PopUp2', 'popUp-content-styling1', 'stylingHeaderInfoCard1', 'Nieuw ‘s-Gravenpolder', './assets/images/GravenpolderNew.png', 'A new recreational area has been added in the empty farmlands between the town of ‘s-Gravenpolder and ’de Zwaakse Weel’.<br> In this location, the river will split to create an eco-friendly environment in the new area.');

// add town buttons
addFunctionalButton('inputButton3', 'positionIbutton6', 'infoCard3PopUp', 'popUp-content-styling2', 'stylingHeaderInfoCard1', "s'-Heer Arendskerke", './assets/images/Arendskerke.png', 'There is a scarcity of green and recreational spaces in the village of ‘s-Heer Arendskerke, which isn’t intertwined with community culture, resulting in an underdeveloped sustainable environment.');
addFunctionalButton('inputButton3', 'positionIbutton7', 'infoCard3PopUp2', 'popUp-content-styling2', 'stylingHeaderInfoCard1', 'Heinkenszand', './assets/images/Heinkenszand.png', 'The village of Heinkenszand has quite a few recreational areas.<br> However, not many green areas can be found on the east-side of the village, where the water will flow. ');
addFunctionalButton('inputButton3', 'positionIbutton8', 'infoCard3PopUp', 'popUp-content-styling2', 'stylingHeaderInfoCard1', 'Nisse', './assets/images/Nisse.png', 'The village of Nisse doesn’t have any green and recreational areas.<br> The quality of life is generally very good, except the lack of facilities in the area.');
addFunctionalButton('inputButton3', 'positionIbutton9', 'infoCard3PopUp2', 'popUp-content-styling2', 'stylingHeaderInfoCard1', "'s-Gravenpolder", './assets/images/Gravenpolder.png', 'The village of ‘s-Gravenpolder is one that doesn’t have a lot of green areas.<br> Recreational areas are absent from the village as well, except from the few campings near the Zwaakse Weel. ');

// add buffer buttons
addFunctionalButton('inputButton2', 'positionIbutton10', 'infoCard2PopUp', 'popUp-content-styling3', 'stylingHeaderInfoCard1', 'Buffer & Trees', './assets/images/forestZone.jpg', 'The forest strategy is an important initiative which is part of European Green Deal with the plan in mind to cut greenhouse gas emissions by 55% by 2030 and full climate neutrality by 2050.<br> Forest are a crucial and central part of the ecosystem and its presence is crucial in creating this neutral economy.<br> The way to implement trees in the project, it will be done via riparian buffers.<br> A riparian buffer is a strip of vegetation along the bank of a river or a stream that seperates developed areas from the water.<br> This area acts as a buffer to pollutants entering a stream or river via runoff.<br> There are 3 zones in a riparian buffer:<br> 1.<br> zone 1 which is closest to the bank, provides shade on parts of the water.<br> This is due to the presence of trees that will be mainly planted here.<br> The roots of the plants also strengthen the banks which halts soil erosion.<br> 2.<br> zone 2 mostly consists of trees and shrubs.<br> This zone represents a line between forest and grassland.<br> The presence of trees and shrubs provide opportunities for habitat such as nesting areas for birds.<br> This zone also slows down pollutants that zone 3 missed to absorb.<br> 3.<br> zone 3 is the first line of defense against the leaching of pollutants from the developed land.<br> This zone mostly consists fo grasses and shrubs.');

// add information buttons
addFunctionalButton('inputButton1', 'positionIbutton11', 'infoCard1PopUp', 'popUp-content-styling4', 'stylingHeaderInfoCard1', 'Culvert', './assets/images/Culvert.png', 'The use of a culvert has been chosen as the best option to cross the roads that are in the way of the connection route.<br> Due to the soft soil surrounding the area (marine clay), box culvert has been chosen, as it can also hold heavy loads.<br> Since the type of soil is soft, it can be strengthened by use of wick drain or Prefabricated Vertical Drain (PVD) which can take water out of the soft soil.');
addFunctionalButton('inputButton1', 'positionIbutton12', 'infoCard1PopUp2', 'popUp-content-styling4', 'stylingHeaderInfoCard1', 'Canal shape', './assets/images/Canal.png', 'The earthen canal will be made in a trapezoidal shape and considering the soil, will need to have a slope between 18-20 degrees.');

makeButtonClickable();
clearRiverButtons();
clearDamsButtons();
clearAreaButtons();
clearBufferButtons()
clearInformationButtons();