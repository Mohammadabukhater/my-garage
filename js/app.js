'use strcit'

var carForm = document.getElementById('car-form');
var carList = document.getElementById('list-car');
var carArray = ['car name', 'category model', 'year model'];
var arrayOfCars = [];


function carList(name, categoryModel, yearModel) {
    this.name = name;
    this.categoryModel = categoryModel;
    this.yearModel = yearModel;

    arrayOfCars.push(this);

}
carList.prototype.renderItem = function () {

    var carListRow = document.createElement('tr');

    var carNameTd = document.createElement('td');
    carNameTd.textContent = this.name
    var carCategoryTd = document.createElement('td');
    carCategoryTd.textContent = this.categoryModel
    var yearModelTd = document.createElement('td');
    yearModelTd.textContent = this.yearModel

    carListRow.appendChild(carNameTd);
    carListRow.appendChild(carCategoryTd);
    carListRow.appendChild(yearModelTd);

    carList.appendChild(carListRow)

}

function renderCarList() {
    for (let index = 0; index < arrayOfCars.length; index++) {
        arrayOfCars[index].renderItem
        
    }
    
}
function checkLs() {
    if (localStorage.getItem('carListItem')){
        var lsObj = JSON.parse(localStorage.getItem('carListItem'));
        for (let index = 0; index < lsObj.length; index++) {
            var newCarListObj = new carList(lsObj[index].name, lsObj[index].categoryModel, lsObj[index].yearModel);
            newCarListObj.renderItem();
            
        }
    }
    
}
function activeSubmission(event) {
    event.preventDefult();

    var carName = event.target.carName.value;
    var categoryModel = event.target.categoryModel.value;
    var yearModel = event.target.yearModel.value;

var newCar = new renderCarList(carName, categoryModel, yearModel);
newCar.renderItem();
localStorage.setItem('carListItem', JSON.stringify(arrayOfCars));

}


function renderTable() {
    var headerRow = document.createElement('tr')
    var th;
    for (let index = 0; index < carArray.length; index++) {
        th = document.createElement('th');
        th.textContent = carArray[index];
        headerRow.appendChild(th);
    }
    carList.appendChild(headerRow);
}
carForm.addEventListener('submit', activeSubmission);
renderTable();
checkLs();