( function() {

  'use strict';

  var $input = document.querySelector( '[data-js="input"]' );
  var $button = document.querySelector( '[data-js="button"]' );
  var $body = document.querySelector( '[data-js="body"]' );
  var ajax = new XMLHttpRequest();
  
  $button.addEventListener( 'click', function (e) {
    var name = $input.value;
    var data = ajax.responseText;
    ajax.open( 'GET', `http://localhost:3000/user`)
    ajax.send();
    var body = document.createElement( 'h1' )
    body.textContent = `${data}`
    document.body.appendChild( body )

  }, false )


  ajax.addEventListener( 'readystatechange', function(e) {
    e.preventDefault()
    if( ajax.readyState === 4  ) {
      return ajax.responseText, ajax.status;
    }
  }, false)

})();