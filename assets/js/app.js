console.log('hello');
const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('riversBTN');
const areaButton = document.getElementById('riversBTN');
const basicButton = document.getElementById('basicBTN');
const addComment = document.getElementById('add-button');

const commentArray = [];

let firstName = 'robin';
let lastName = 'smits';
let userComment = 'ik vind dit goed'

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);
basicButton.addEventListener('click', changeMapToBasic)
addComment.addEventListener('click', addComments);

function changeMapToRivers() { console.log('rivers works') };

function changeMapToBasic() { console.log('Basic works') };

function changeMapTodams() { console.log('dams works') };

function changeMapToarea() { console.log('area works') };
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

function addCommentsLayout(firstName, lastName, organization, comment) {
    if ((firstName.length > 1 && lastName.length >1) && (organization.length > 1 && comment.length > 1)){
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
    }
    clearInputFields()
};
function clearInputFields() {
    console.log('hello');
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('comments').value = "";
    document.getElementById('organization').value = "";
}