var templateEngine = require('../../js/template-engine');
var TemplateEngine = templateEngine.TemplateEngine;

describe('template test', () => {
  var html;
  beforeEach(() => {
    const data = {
      name: 'Richard', 
    };

    html = TemplateEngine(
      '<h1>Hello <% this.name %></h1>'   
    , data); 
  });
  it ('should render data into template', () => {
    expect(html).toBe('<h1>Hello Richard</h1>');
  });
});

describe('For loop', () => {
  var html;
  beforeEach(() => {
    const data = {
      names: [
        { name: 'Rich' },
        { name: 'Sue' }
      ]
    };

    html = TemplateEngine(
      [
        '<% for(var i = 0; i < this.names.length; i++) { %>',
          '<h1>Hello <%this.names[i].name%></h1>',
        '<% } %>',
      ].join('')
    , data); 
  });

  it ('should render data into template', () => {
    expect(html).toBe('<h1>Hello Rich</h1><h1>Hello Sue</h1>');
  });
});
