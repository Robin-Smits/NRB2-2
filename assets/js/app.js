console.log('hello');
const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('riversBTN');
const areaButton = document.getElementById('riversBTN');
const basicButton = document.getElementById('basicBTN');
const addComment = document.getElementById('add-button');

const commentArray = [];

const firstName = 'robin';
const lastName = 'smits';
const userComment = 'ik vind dit goed'

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);
basicButton.addEventListener('click',changeMapToBasic)
addComment.addEventListener('click', addComments);

function changeMapToRivers (){console.log('rivers works')};

function changeMapToBasic (){console.log('Basic works')};

function changeMapTodams (){console.log('dams works')};

function changeMapToarea (){console.log('area works')};
function addComments (){console.log('comment works')}

function addCommentsLayout (){
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
};
