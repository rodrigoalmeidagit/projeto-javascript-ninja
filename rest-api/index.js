'use strict';

var express = require( 'express' );
var cors = require( 'cors' );
var app = express();

app.use( cors() );

app.get( '/', function( req, res ) {
  res.send('<h1>Teste</h1>');
});

app.get( '/user', function( req, res ) {  
  res.send( 'user' );
});

app.get( '/user/:username', function( req, res ) {
  var username = req.params.username;
  if ( users[ username ] ) {
    return res.json( users[ username ] );
  }
  res.status( 404 ).json( { erro: 'Usuário não cadastrado' } );
});

app.listen( 3000 );
