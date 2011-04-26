/*
 * Datepicker for Jeditable
 *
 * Copyright (c) 2011 Piotr 'Qertoip' Włodarek
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Depends on jQuery UI Datepicker
 *
 * Project home:
 *   http://github.com/qertoip/jeditable-datepicker
 *
 */

// add :focus selector
jQuery.expr[':'].focus = function( elem ) {
  return elem === document.activeElement && ( elem.type || elem.href );
};

$.editable.addInputType( 'datepicker', {

    /* create input element */
    element: function( settings, original ) {
      var form = $( this ),
          input = $( '<input />' );
      
      if ( settings.width  != 'none' ) { input.width( settings.width ); }
      if ( settings.height != 'none' ) { input.height( settings.height ); }
      if ( settings.style != 'none' ) { input.css( settings.style ); }

      input.attr( 'autocomplete','off' );

      form.append( input );
      
      return input;
    },
    
    /* attach jquery.ui.datepicker to the input element */
    plugin: function( settings, original ) {
      var form = this,
          input = form.find( "input" );
      
      input.val( $.date.verboseToNumeric( input.val() ) );
      
      settings.onblur = 'nothing';
      
      input.datepicker( {
        onSelect: function() {
          // clicking specific day in the calendar should
          // submit the form and close the input field
          form.submit();
        },
        
        onClose: function( dateText, inst ) {
          // closing calendar for any reason
          //alert( 'onClose' );
          //form.submit();

          setTimeout( function() {
            if ( !input.is( ':focus' ) ) {
              // input has NO focus after 150ms which means
              // calendar was closed due to click outside of it
              // let's close the input field without saving
              original.reset( form );
            } else {
              // input still HAS focus after 150ms which means
              // calendar was closed due to Enter in the input field
              // lets submit the form and close the input field
              form.submit();
            }
            
            // the delay is necessary; calendar must be already
            // closed for the above :focus checking to work properly;
            // without a delay the form is submitted in all scenarios, which is wrong
          }, 150 );
        }
      } );
    }
} );
