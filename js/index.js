$( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#other" ).click(function() {
    $( "#target" ).click();
  });
  