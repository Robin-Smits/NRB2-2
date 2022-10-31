console.log('hello');
const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('riversBTN');
const areaButton = document.getElementById('riversBTN');
const addComment = document.getElementById('comments')
const commentArray = [];
const firstName = 'robin';
const lastName = 'smits';

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);

function changeMapToRivers (){console.log('rivers works')};
function changeMapTodams (){console.log('dams works')};
function changeMapToarea (){console.log('area works')};
function addComments (){
    src = document.getElementById('displayUserInput');
    
    div = document.createElement('div');
    src.appendchild(div)

    p = document.createElement('p');
    p.innerHTML = `${firstName} ${lastName}`
    div.appendchild(p);
}
addComments ();