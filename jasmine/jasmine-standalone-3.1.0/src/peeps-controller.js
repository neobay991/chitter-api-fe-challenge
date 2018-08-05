"use strict";

(function(exports){

  function PeepsController(){
  }

  PeepsController.prototype.allPeeps = function(){
    var output = ""
    var appDivTitle = document.getElementById('app-title');
    appDivTitle.innerHTML = 'Default title';
    var appDivBody = document.getElementById('app-body');
    appDivBody.innerHTML = 'Default text';

    $.get("https://chitter-backend-api.herokuapp.com/peeps", function(response) {
      response.forEach(function(peeps) {
      output += `<div><li>${peeps.body}, <br/>created at: ${peeps.created_at}, upadted at: ${peeps.updated_at}, user: ${peeps.user.handle}<br/><br/></li></div>`
      });
      appDivTitle.innerHTML = `<h2>All peeps</h2>`;
      appDivBody.innerHTML = output;
      return appDivBody.innerHTML;
    });
  }

  PeepsController.prototype.allPeeps();

  exports.PeepsController = PeepsController;

})(this);
