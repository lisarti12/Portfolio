const addBtn = document.querySelector('.add-row');
const table = document.getElementById('myTable');
const exportBtn = document.querySelector('.export');
const importBtn = document.querySelector('.import');
const fileInput = document.getElementById('fileInput');

addBtn.addEventListener('click', function(){
    
    var rows = table.rows.length;
    var r = table.insertRow(rows);
    var cell1 = r.insertCell(0);
    var cell2 = r.insertCell(1);
    var cell3 = r.insertCell(2);
    var cell4 = r.insertCell(3);
    cell4.classList.add('btn-cell');
    var name = document.createElement('input');
    var age = document.createElement('input');
    var country = document.createElement('input');
    var rem = document.createElement('button');
    rem.classList.add('remove');
    rem.textContent = '-';
    name.type = "text";
    age.type = 'number';
    country.type = 'text';
    name.id = 'name';
    age.id = 'age';
    country.id = 'country';
    cell1.appendChild(name);
    cell2.appendChild(age);
    cell3.appendChild(country);
    cell4.appendChild(rem);
    
    // Add click event listener to the new remove button
    rem.addEventListener('click', function() {
        // Get the parent row and remove it
        var rowIndex = this.closest('tr').rowIndex;
        table.deleteRow(rowIndex);
    });
    
});

exportBtn.addEventListener('click',  function () {
    // Assume 'data.csv' already exists locally
    var filename = 'data.csv';

    // Create an empty array to store the table data
    var data = [];

    // Iterate through rows and cells to collect data
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var rowData = [];
        for (var j = 0; j < row.cells.length; j++) {
            rowData.push(row.cells[j].children[0].value);
        }
        data.push(rowData.join(","));
    }

    // Convert the data array to a CSV string
    var csvContent = data.join("\n");

    // Update the existing file
    var blob = new Blob([csvContent], { type: 'text/csv' });
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;

    // Trigger the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        for (var j = 0; j < row.cells.length; j++) {
            row.cells[j].children[0].value = '';
        }
        
    }

  }
)

importBtn.addEventListener('click', function() {
    fileInput.click(); // Trigger click event on file input
});

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        for (var i = 1; i < table.rows.length; i++) {
            var row = table.rows[i];
            for (var j = 0; j < row.cells.length; j++) {
                row.cells[j].children[0].value = '';
            }
        }
        reader.onload = (e) => {
            const content = e.target.result;
            const rows = content.split('\n').map(row => row.split(','));
            
            // Ensure the table has enough rows
            while (table.rows.length <= rows.length) {
                addBtn.click();
            }
            
            for (var i = 0; i < rows.length; i++) {
                var row1 = table.rows[i+1];
                for (var j = 0; j < rows[i].length; j++) {
                    row1.cells[j].children[0].value = rows[i][j];
                }
            }
        };

        reader.readAsText(file);
    }
});