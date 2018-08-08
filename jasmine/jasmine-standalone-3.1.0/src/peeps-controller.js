"use strict";

(function(exports){

  var appDivTitle = document.getElementById('app-title');
  appDivTitle.innerHTML = 'Default title';

  var appDivBody = document.getElementById('app-body');
  appDivBody.innerHTML = 'Default text';

  function PeepsController(){}

  PeepsController.prototype.allPeeps = function(){
    var output = ""

    $.get(`https://chitter-backend-api.herokuapp.com/peeps`, function(response) {
      response.forEach(function(peeps) {
      output += `<div><li><a href="#peeps/${peeps.id}">${peeps.body}<a/>, <br/>created at: ${peeps.created_at}, upadted at: ${peeps.updated_at}, user: ${peeps.user.handle}<br/><br/></li></div>`
      });
      appDivTitle.innerHTML = `<h2>All peeps</h2>`;
      appDivBody.innerHTML = output;
      return appDivBody.innerHTML;
    });
  }

  PeepsController.prototype.singlePeep = function(url){
    window.addEventListener('hashchange', function() {
      var peepID = getPeepUrl(location)
      var output = ""

      $.get(`https://chitter-backend-api.herokuapp.com/peeps/${peepID}`, function(peeps) {
        output += `<div><li>${peeps.body}, <br/>created at: ${peeps.created_at}, upadted at: ${peeps.updated_at}, user: ${peeps.user.handle}<br/><br/></li></div>`

        appDivTitle.innerHTML = `<h2>Single peeps</h2>`;
        appDivBody.innerHTML = output;
        return appDivBody.innerHTML;
      });
    });
  }

  PeepsController.prototype.createUserForm = function(){
    document.getElementById('create-user').addEventListener('click', function() {
      var output = ""

        output += `<div><form id="CreateUser"><input type="text" id="handle" name="handle"><input type="text" id="password" name="password"><input class="button" name="submit" type="submit" value="submit22" onclick="PeepsController.prototype.getFormData()" /></form></div>`

        appDivTitle.innerHTML = `<h2>Create a user</h2>`;
        appDivBody.innerHTML = $(document.body).append(output);
        return appDivBody.innerHTML;
    });
  }

  PeepsController.prototype.getFormData = function(){
    var handle = document.getElementById('handle').value;
    var password = document.getElementById('password').value;
    
    PeepsController.prototype.createUser(handle, password);
  }

  PeepsController.prototype.createUser = function(handle, password){
    var handle;
    var password;

    $.ajax({
      url: 'https://chitter-backend-api.herokuapp.com/users',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      data: {user: {handle: handle, password: password} },
    });
  }

  exports.PeepsController = PeepsController;
})(this);
