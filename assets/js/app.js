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
    createMapOverlay("./assets/images/river.png")
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
    clearMapOverlays();
};

/**
 * Function that puts an overlay on of the dams
 */
function changeMapTodams() {
    createMapOverlay("./assets/images/river.png");
}

/**
 * Function that makes a overlay appear with the area visual
 */
function changeMapToarea() {
    createMapOverlay("./assets/images/river.png")
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