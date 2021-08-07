

function setupCart() {
  var qtyInputs = document.querySelectorAll( 'input' );
  for ( var i = 0; i < qtyInputs.length; i++ ) {
    qtyInputs[ i ].oninput = updateSubtotal;
  }
  updateTotal();
}

function updateSubtotal() {
   var subTotal = 0;
   var tables = document.getElementsByTagName("table").rows;
   var r = this.parentNode.parentNode.rowIndex;
   var j = document.getElementsByTagName(".price").cellIndex;
   var s = document.getElementsByTagName(".subtotal").cellIndex;
   var price = tables[r].cells[j].value;
   var quantity = document.getElementsByTagName("input").value;
   var subAmount = price * quantity;
   subTotal += Number(subAmount);
   // set total for the row
   document.getElementsByTagName('table').rows[r].cells[s].innerHTML = '$' + subTotal.toFixed(2);
   }
 updateTotal();  

function updateTotal() {
  var total = 0;
  var subTotals = document.querySelectorAll( '.subtotal' );
  for ( var i = 0; i < subTotals.length; i++ ) {
    var amount = subTotals[ i ].innerHTML.match( /[0-9]+.[0-9]+/ );
    total += Number( amount );
  }
  document.querySelector( '#total' ).innerHTML = '$' + total.toFixed( 2 );
}
