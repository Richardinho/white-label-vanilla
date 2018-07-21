module.exports = function (data) { return (function anonymous() {
var r=[];r.push("<div class=\"menu\"><h2>Filters</h2><ul class=\"filters\"><h3>Time range</h3><li class=\"range-filters\"><label for=\"year-from\">from</label><input id=\"year-from\" type=\"range\" step=\"1\" min=\"");r.push( this.minYear );r.push("\" value='");r.push( this.yearFrom );r.push("' max=\"");r.push( this.maxYear );r.push("\"><label for=\"year-from\">");r.push( this.yearFrom );r.push("</label></li><li class=\"range-filters\"><label for=\"year-to\">to</label><input id=\"year-to\" type=\"range\" step=\"1\" min=\"");r.push( this.minYear );r.push("\" value='");r.push( this.yearTo );r.push("' max=\"");r.push( this.maxYear );r.push("\"><label for=\"year-to\">");r.push( this.yearTo );r.push("</label></li></ul><h4 for='dynasties'>Dynasty</h4><select id='dynasties'><option "); if(this.dynasty=='all') { r.push(" selected "); } r.push(">all</option><option "); if(this.dynasty=='Julio-Claudian') { r.push(" selected "); } r.push(">Julio-Claudian</option><option "); if(this.dynasty=='Flavian') { r.push(" selected "); } r.push(">Flavian</option><option "); if(this.dynasty=='Nerva-Antonine') { r.push(" selected "); } r.push(" value='Nerva-Antonine'>Nerva–Antonine</option><option "); if(this.dynasty=='Severan') { r.push(" selected "); } r.push(">Severan</option><option "); if(this.dynasty=='Gordian') { r.push(" selected "); } r.push(">Gordian</option><option "); if(this.dynasty=='none') { r.push(" selected "); } r.push(">None</option></select><h3>Sort by</h3><select id='simple-styling'><option value='reign-asc' "); if(this.sortBy=='reign-asc') { r.push(" selected "); } r.push(">reign shortest first</option><option value='reign-desc' "); if(this.sortBy=='reign-desc') { r.push(" selected "); } r.push(">reign longest first</option><option value='succession' "); if(this.sortBy=='succession') { r.push(" selected "); } r.push(">succession ascending</option></select></div>");return r.join("");
}).apply(data); };