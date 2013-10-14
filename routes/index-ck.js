/*
 * GET home page.
 */var points=require("./../data/points.js").data;exports.index=function(e,t){t.render("index",{title:"Two Metrics That Matter",data:points})};