function calc(idx) {

    const price = parseFloat(document.getElementById("cost"+idx).value)*
                parseFloat(document.getElementById("quantity"+idx).value);

    //  alert(idx+":"+price);  
    document.getElementById("price"+idx).value= isNaN(price)?"0.00":price.toFixed(2)
  }
  
  window.onload=function() {
    document.getElementsByName("quantity[]")[0].onkeyup=function() {calc(1)};
    document.getElementsByName("cost[]")[0].onkeyup=function() {calc(1)};
  }
  

  const rowCount =0;
  function addRow(tableID) {
           const table = document.getElementById(tableID);
  
           const rowCount = table.rows.length;
           const row = table.insertRow(rowCount);
  
           const cell1 = row.insertCell(0);
           const element1 = document.createElement("input");
          element1.type = "checkbox";
          element1.name = "checkbox[]";
          cell1.appendChild(element1);
  
           const cell2 = row.insertCell(1);
          cell2.innerHTML = rowCount;
  
           const cell3 = row.insertCell(2);
           const element3 = document.createElement("input");
          element3.type = "text";
          element3.name = "item[]";
          element3.required = "required";
          cell3.appendChild(element3);
  
           const cell4 = row.insertCell(3);
           const element4 = document.createElement("input");
          element4.type = "text";
          element4.name = "quantity[]";
          element4.id = "quantity"+rowCount;
          element4.onkeyup=function() {calc(rowCount);}
          cell4.appendChild(element4);
  
           const cell5 = row.insertCell(4);
           const element5 = document.createElement("input");
          element5.type = "text";
          element5.name = "cost[]";
          element5.id = "cost"+rowCount;
          element5.onkeyup=function() {calc(rowCount);}
          cell5.appendChild(element5);
  
           const cell6 = row.insertCell(5);
           const element6 = document.createElement("input");
          element6.type = "text";
          element6.name = "price[]";
          element6.id = "price"+rowCount
          cell6.appendChild(element6);

        //total calculation  
          function totalIt() {
             const qtys = document.getElementsByName("quantity[]");
             const total=0;
            for ( const i=1;i<=qtys.length;i++) {
              calc(i);  
               const price = parseFloat(document.getElementById("price"+i).value);
              total += isNaN(price)?0:price;
            }
            document.getElementById("total").value=isNaN(total)?"0.00":total.toFixed(2);                        
          }  
  
      }
      
      //delete table
      function deleteRow(tableID) {
          try {
           const table = document.getElementById(tableID);
           const rowCount = table.rows.length;
  
          for( const i=0; i<rowCount; i++) {
               const row = table.rows[i];
               const chkbox = row.cells[0].childNodes[0];
              if(null != chkbox && true == chkbox.checked) {
                  table.deleteRow(i);
                  rowCount--;
                  i--;
              }
  
  
          }
          }catch(e) {
              alert(e);
          }
      }


module.exports = app