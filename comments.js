// Create web server application
// http://localhost:3000/comments

// Load modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var comments = require('./comments');

// Create http server
var server = http.createServer(function (request, response) {
    //console.log(request.url);
    //console.log(request.method);
    //console.log(request.headers);
    //console.log(request.headers['accept']);
    //console.log(request.headers['accept-language']);
    //console.log(request.headers['user-agent']);
    //console.log(request.headers['host']);
    //console.log(request.headers['referer']);
    //console.log(request.headers['cookie']);
    //console.log(request.headers['connection']);

    //console.log(request.headers['accept-encoding']);

    //console.log(request.headers['cache-control']);
    //console.log(request.headers['pragma']);

    //console.log(request.headers['if-none-match']);
    //console.log(request.headers['if-modified-since']);

    //console.log(request.headers['content-type']);
    //console.log(request.headers['content-length']);

    //console.log(request.headers['authorization']);
    //console.log(request.headers['proxy-authorization']);

    //console.log(request.headers['upgrade']);
    //console.log(request.headers['via']);

    //console.log(request.headers['warning']);
    //console.log(request.headers['x-requested-with']);
    //console.log(request.headers['dnt']);
    //console.log(request.headers['x-forwarded-for']);
    //console.log(request.headers['x-forwarded-proto']);
    //console.log(request.headers['front-end-https']);
    //console.log(request.headers['x-att-deviceid']);
    //console.log(request.headers['x-wap-profile']);
    //console.log(request.headers['proxy-connection']);
    //console.log(request.headers['x-uidh']);
    //console.log(request.headers['x-csrf-token']);
    //console.log(request.headers['x-request-id']);
    //console.log(request.headers['x-correlation-id']);
    //console.log(request.headers['x-ucbrowser-ua']);
    //console.log(request.headers['x-operamini-phone-ua']);
    //console.log(request.headers['x-operamini-phone']);
    //console.log(request.headers['x-operamini-features']);
    //console.log(request.headers['x-operamini-phone-ua']);
    //console.log(request.headers['x-operamini-phone-