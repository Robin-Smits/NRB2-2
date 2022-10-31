console.log('hello');
const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('riversBTN');
const areaButton = document.getElementById('riversBTN');
const addComment = document.getElementById('comments')
const commentArray = [];
const firstName = 'robin';
const lastName = 'smits';
const userComment = 'ik vind dit goed'

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);

function changeMapToRivers (){console.log('rivers works')};
function changeMapTodams (){console.log('dams works')};
function changeMapToarea (){console.log('area works')};
function addComments (firstName, lastName, userComment){
    commentDiv = document.createElement('div');
    src = document.getElementById('displayUserInput');
    src.appendChild(commentDiv);
    //p
    commentUserName = document.createElement('p');
    commentUserName.innerHTML = `${firstName} ${lastName}`
    commentDiv.appendChild(commentUserName);
    //p
    displayUserComment = document.createElement('p');
    displayUserComment = userComment;
    commentDiv.appendChild(displayUserComment);
}
addComments ();