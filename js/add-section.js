var addSection = function (options) {

	var getTemplate = options.getTemplate;
	var html = options.html;
	var TemplateEngine = options.TemplateEngine;

	return function (el, templateId, data) {

		var bannerTemplate = getTemplate(templateId);
		html(el, TemplateEngine(bannerTemplate, data));
	};

};

addSection.inject = ['getTemplate', 'html', 'TemplateEngine'];

module.exports = addSection;