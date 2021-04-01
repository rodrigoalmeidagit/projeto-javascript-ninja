'use strict';

var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var app = express();

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cors() );

var users = {
  rodrigo: {
    username: 'Rodrigo',
    age: 41
  },
  rafaela: {
    username: 'Rafaela',
    age: 7
  },
  charles: {
    username: 'Charles',
    age: 12
  }
}

app.get( '/', function ( req, res ) {
  res.json( { response: 'Home' } );
});

app.get( '/user', function ( req, res ) {
  res.json( ( { response: 'User' } ) );
});

app.get( '/user/:username', function ( req, res ) {
  var username = req.params.username;
  if ( users[ username ] ) {
    return res.json( users[ username ] );
  }
  res.status( 404 ).json( { erro: 'Usuário não cadastrado' } );
});

app.post( '/user', function( req, res ) {
  var username = req.body.username;
  var age = req.body.age;
  res.json( { username: username, age: age } );  
} );

app.listen( 3000 );
