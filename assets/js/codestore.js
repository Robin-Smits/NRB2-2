function makeButtonClickable2(infoCardPopUpID, inputButtonID) {
    popUpMenu = document.getElementById(infoCardPopUpID);
    popUpButton = document.getElementById(inputButtonID);
    //popUpMenuContent = document.getElementsByClassName('popUp-sluiten')[0];
    popUpMenuContent = document.getElementById(`${infoCardPopUpID}Content`);
    console.log(popUpMenu);
    console.log(popUpButton);
    console.log(popUpMenuContent);

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
    }
};

<div class="mapButtons">
        <button type="button" id="riversBTN">Rivers</button>
        <button type="button" id="damsBTN">Dams</button>
        <button type="button" id="areaBTN">area restrictions</button>
        <button type="button" id="basicBTN">Load</button>
</div>

const riversButton = document.getElementById('riversBTN');
const damsButton = document.getElementById('damsBTN');
const areaButton = document.getElementById('areaBTN');

riversButton.addEventListener('click', changeMapToRivers);
damsButton.addEventListener('click', changeMapTodams);
areaButton.addEventListener('click', changeMapToarea);

inputButton = document.createElement('button');
src = document.getElementById('mapDisplay');
inputButton.setAttribute('id', inputButtonID);
inputButton.classList.add('positionIbutton');
inputButton.classList.add('mapOverlayButton');
inputButton.innerHTML = 'I';
src.appendChild(inputButton);

293