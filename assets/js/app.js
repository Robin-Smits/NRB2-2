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
    console.log('comment works');
    inputFirstName = document.getElementById('fname');
    inputLastName = document.getElementById('lname');
    inputComment = document.getElementById('comments');
    firstName = inputFirstName.value;
    lastName = inputLastName.value;
    comment = inputComment.value;
    addCommentsLayout(firstName, lastName, comment);
}

function addCommentsLayout(firstName, lastName, comment) {
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
    commentUserNameStrong.innerHTML = `${firstName} ${lastName}`;
    commentUserName.appendChild(commentUserNameStrong);
    //hr
    commentHr = document.createElement('hr');
    commentDiv.appendChild(commentHr);
    //p commentsection
    displayComment = document.createElement('p');
    displayComment.innerHTML = `${comment}`;
    displayComment.classList.add('UserComment')
    commentDiv.appendChild(displayComment);
};