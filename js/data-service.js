function DataService (options) {
}

const url = window.config.API_URL;

DataService.prototype = {

	getData : function (queryString) {
    return fetch(url + '/api/emperors' + queryString)
      .then(function (response) {
        return response.json(); 
      });
	},
};

module.exports = DataService;

