// Modulo para obtener los datos de un directorio
var requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});
