var LoadingPanel = function() {}


LoadingPanel.prototype = {


	//  no need to remove as will be wiped out when page is re-rendered
	addLoadingPanel : function () {
		document.body.classList.add('loading');
	},

	removeLoadingPanel : function () {
		document.body.classList.remove('loading');
	}

};

LoadingPanel.inject = [];

module.exports = LoadingPanel;