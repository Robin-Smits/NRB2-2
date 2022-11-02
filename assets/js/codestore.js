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