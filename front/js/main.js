( function() {

  'use strict';

  var ajax = new XMLHttpRequest();
  
  // $button.addEventListener( 'click', function (e) {
  //   ajax.open( 'GET', `http://localhost:3000/user` )
  //   ajax.send();
  // }, false )

  // ajax.addEventListener( 'readystatechange', function( e ) {
  //   e.preventDefault()
  //   if( ajax.readyState === 4  ) {
  //     return ajax.responseText, ajax.status;
  //   }
  // }, false)

  ajax.open( 'POST', 'http://localhost:3000/user' );
  ajax.setRequestHeader( 
    'Content-type', 'application/x-www-form-urlencoded' 
  );
  ajax.send( 'username=irma&age=67' );

  console.log( 'Cadastrando usuário...' );

  ajax.onreadystatechange = function() {
    if( ajax.readyState === 4 ) {
      console.log( 'Usuário cadastrado!', ajax.responseText );
    }
  };
})();