function drawTable() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    let tableContainer = document.getElementById('container');
  
    let tableHTML = '<table>';
    
    for (let i = 0; i <= rows; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j <= columns; j++) {
        if (i == 0 && j == 0) {
          tableHTML += '<th>x</th>';
        } else if (i == 0) {
          tableHTML += '<th>' + j + '</th>';
        } else if (j == 0) {
          tableHTML += '<th>' + i + '</th>';
        } else if (i <=10 && j<=10){
            tableHTML += '<td>' + (i * j) + '</td>';
        }
        else {
            window.alert('ERROR: Please verify that the rows and columns are less than 10 and try again');
            document.getElementById('rows').value = '';
            document.getElementById('columns').value = '';
            return;
        }
      }
      tableHTML += '</tr>';
    }
    
    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
  }
