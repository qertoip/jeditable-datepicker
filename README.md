# jeditable-datepicker

In place editing with a datepicker. Clean and simple. Based on jQuery UI and Jeditable.

## Background

 * [Jeditable](http://www.appelsiini.net/projects/jeditable) is in place editing plugin for jQuery.
 * Jeditable works with several types of input fields out of the box, like text fields and text area fields.
 * You can write your own plugins for Jeditable to support in place editing of other types of input fields. Yes, plugins for the plugin.
 * The jeditable-datepicker is Jeditable plugin to work with jQuery UI Datepicker.

## Demo

[See it in action!](http://thesingularity.pl/jeditable-datepicker-demo)

## Tested

IE7+, Firefox, Chrome, Opera, Safari

## Usage

Example 1:

    $( '.editable' ).editable( {
      type: 'datepicker'
    } );

Example 2 (how to pass options to datepicker):

    $( '.editable' ).editable( {
      type: 'datepicker',
      datepicker: {
        dateFormat: 'yy-mm-dd', 
        numberOfMonths: 2 
      }
    } );

## Dependencies

 * jQuery
 * jQuery UI Datepicker
 * Jeditable

## Installation

Add jquery.jeditable.datepicker.js to your project _after_ jquery.js, jquery.ui.js and jquery.jeditable.js

## License

Released under the MIT license. Copyright (C) 2011 Piotr 'Qertoip' Włodarek.