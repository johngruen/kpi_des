
/*
 * GET home page.
 */

 var points = require('./../data/points.js').data;


exports.index = function(req, res){
  res.render('index', { 
  	title: 'Two Metrics That Matter',
  	data: points
  });
};