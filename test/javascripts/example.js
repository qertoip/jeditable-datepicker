$( document ).ready( function() {

  var date = $( '.editable' );
  
  date.editable(
    function( value, settings ) {
      date.html( value );
    },
    {
      type: 'datepicker'
    }
  );

} );