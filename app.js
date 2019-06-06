// from data.js
var tableData = data;

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //var inputElement = d3.select('#patient-form-input');
    var inputElement = d3.select('#datetime');
    // Get the value property of the input element
    var inputValue = inputElement.property('value');

    // Filtrar por fecha
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filterData);

    var div = document.getElementById('ufo-table');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }



    let table = document.querySelector("table");
    let datas = Object.keys(filterData[0]);
    generateTable(table, filterData); // generate the table first
    generateTableHead(table, datas); // then the head


});