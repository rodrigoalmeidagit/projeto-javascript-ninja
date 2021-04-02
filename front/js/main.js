(function () {

  'use strict';

  var $button = document.querySelector('[data-js="button"]');
  var $input = document.querySelector('[data-js="input"]');

  // REQUISIÇÃO POST
  var post = new XMLHttpRequest();
  post.open('POST', 'http://localhost:3000/user');
  post.setRequestHeader(
    'Content-type', 'application/x-www-form-urlencoded'
  );
  post.send('username=roberto&name=Roberto&age=32');

  console.log('Cadastrando usuário...');

  post.onreadystatechange = function () {
    if (post.readyState === 4) {
      console.log('Usuário cadastrado!', post.responseText);
    }
  };

  // REQUISIÇÃO GET
  const getUser = function (e) {
    var get = new XMLHttpRequest();
    var user = $input.value;
    get.open('GET', `http://localhost:3000/user/${user}`);
    get.send();

    get.onreadystatechange = function () {
      if (get.readyState === 4) {
        console.log(JSON.parse(get.responseText));
      }
    };
  }

  $button.addEventListener('click', getUser, false)

  post.addEventListener('readystatechange', function (e) {
    e.preventDefault()
    if (post.readyState === 4) {
      return post.responseText, post.status;
    }
  }, false)




})();