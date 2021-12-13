//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
    let form = document.createElement('form');
    form.style.width = '170px';

    let inputName = document.createElement('input');
    inputName.setAttribute('placeholder', 'Name');

    let inputAge = document.createElement('input');
    inputAge.setAttribute('type','number');
    inputAge.setAttribute('placeholder', 'Age');


    let formButton = document.createElement('button');
    formButton.innerText = 'Click';

    form.appendChild(inputName);
    form.appendChild(inputAge);
    form.appendChild(formButton);
    document.body.appendChild(form);

    formButton.onclick = function () {
        localStorage.setItem('Username', inputName.value);
        localStorage.setItem('Age', inputAge.value);
    }

//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
    let arr = [];

    let form1 = document.createElement('form');

    let inputModel = document.createElement('input');
    inputModel.setAttribute('placeholder', 'Car Model');

    let inputType = document.createElement('input');
    inputType.setAttribute('placeholder', 'Car Type');

    let inputVolume = document.createElement('input');
    inputVolume.setAttribute('placeholder', 'Car Volume');

    let form1Button = document.createElement('button');
    form1Button.innerText = 'Click';

    form1.appendChild(inputModel);
    form1.appendChild(inputType);
    form1.appendChild(inputVolume);
    form1.appendChild(form1Button);
    form1.style.marginTop = '25px';
    form1.style.width = '170px';

    document.body.appendChild(form1);

    form1Button.onclick = function () {
        function arrAdd (carModel, carType, carVolume){
            arr.push({carModel, carType, carVolume})
            localStorage.setItem('Car specs', JSON.stringify(arr));
        }
        arrAdd(inputModel.value, inputType.value, inputVolume.value)
    }
