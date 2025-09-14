function insert_Row() {
    //Write your code here
  // Get reference to the table by id
    var table = document.getElementById("sampleTable");
    
    // Create a new row element
    var newRow = table.insertRow(0); // Insert at index 0 (top)
    
    // Create and insert the first cell
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";
    
    // Create and insert the second cell
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
  
}
