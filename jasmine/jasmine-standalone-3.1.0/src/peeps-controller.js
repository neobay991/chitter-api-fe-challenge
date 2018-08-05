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
      var output = getPeepUrl(location)

      $.get(`https://chitter-backend-api.herokuapp.com/peeps/${output}`, function(peeps) {
        output += `<div><li>${peeps.body}, <br/>created at: ${peeps.created_at}, upadted at: ${peeps.updated_at}, user: ${peeps.user.handle}<br/><br/></li></div>`

        appDivTitle.innerHTML = `<h2>Single peeps</h2>`;
        appDivBody.innerHTML = output;
        return appDivBody.innerHTML;
      });
    });
  }

  exports.PeepsController = PeepsController;

})(this);
