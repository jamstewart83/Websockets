/**
 * This is the Socket Client object.  Write documentation about Socket Client
 * @return {object} This object exposes the public properties and methods of this object
 */
(function () {
	// Set to strict
	"use strict";

	// if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var connection = new WebSocket('ws://127.0.0.1:1338');

    $("body").on("click", function () {
    	connection.send("Send Message");}
	);

    connection.onopen = function () {
        // connection is opened and ready to use
        console.log("Opened");
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
        console.log("Error");
    };

    connection.onmessage = function (message) {
        // try to decode json (I assume that each message from server is json)
        try {
            console.log(message);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
        // handle incoming message
    };

}());	