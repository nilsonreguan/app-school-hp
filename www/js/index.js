/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = angular.module('PushNotificationsApp', ['ionic', 'configuration']);
app.factory('GCMRegistrationService', function(SENDER_ID) {
    var pushNotification = window.plugins.pushNotification;
    var isAndroidDevice = function() {
        var platform = device.platform;
        return platform === 'android' || platform === 'Android';
    };

    return {
        registerOnGCM: function() {
            if (isAndroidDevice()) {
                pushNotification.register(function(result) {
                    console.log(result);
                }, function() {
                    alert('Error registering device on GCM ');
                }, {
                    "senderID": 469201422848, /* Your Google Developers Console Project Number. See /www/js/configuration.js  */
                    "ecb": "onNotificationGCMEvent" /* index.html function name*/
                });
            } else {
                alert('Your device platform is not Android!!!');
            }

        }
    };
});
app.factory('StatusHandler', function($rootScope, $ionicPopup) {
    var ICON_LOADING = 'ion-loading-b';
    var ICON_OK = 'ion-checkmark-circled balanced';
    var ICON_ERROR = 'ion-close-circled assertive';
    var loading = function() {
        $rootScope.status = {
            'style': 'stable',
            'text': 'LOADING...',
            'networkicon': ICON_LOADING,
            'thirddpartyservericon': ICON_LOADING,
            'button': {
                'disabled': 'disabled',
                'style': 'button-light'
            }
        };
    };

    var online = function() {
        $rootScope.status = {
            'style': 'calm',
            'text': 'ONLINE',
            'networkicon': ICON_OK,
            'thirddpartyservericon': ICON_LOADING,
            'disabled': 'false',
            'button': {
                'disabled': 'disabled',
                'style': 'button-light'
            }
        };
    };

    var offline = function() {
        $rootScope.$apply(function() {
            $rootScope.status = {
                'style': 'assertive',
                'text': 'OFFLINE',
                'networkicon': ICON_ERROR,
                'thirddpartyservericon': ICON_ERROR,
                'disabled': 'false',
                'button': {
                    'disabled': 'disabled',
                    'style': 'button-light'
                }
            };
        });
    };

    var readyForNotifications = function() {
        $rootScope.status = {
            'style': 'balanced',
            'text': 'READY FOR NOTIFICATIONS',
            'networkicon': ICON_OK,
            'thirddpartyservericon': ICON_OK,
            'disabled': 'false',
            'button': {
                'disabled': 'button-positive'
            }
        };
    };

    var notReadyForNotifications = function() {
        $rootScope.status = {
            'style': 'assertive',
            'text': '3rd PARTY SERVER ERROR',
            'networkicon': ICON_OK,
            'thirddpartyservericon': ICON_ERROR,
            'disabled': 'false',
            'button': {
                'disabled': 'disabled',
                'style': 'button-light'
            }
        };
        $ionicPopup.alert({
            title: 'ERROR!!!',
            subTitle: 'Unable to connect to 3rd party server',
            template: 'Unable to connecto to 3rd party server.<br/>Please, review your server connection.<br/>See /www/js/configuration.js file'
        });
    };

    return {
        loading: loading,
        online: online,
        offline: offline,
        readyForNotifications: readyForNotifications,
        notReadyForNotifications: notReadyForNotifications
    };

});

app.controller('AppController', function($scope, NotificationService) {

    $scope.sendNotification = function() {
        NotificationService.sendNotification();
    };

});

app.run(function(GCMRegistrationService, StatusHandler) {
    var alreadyRegistered = false;

    StatusHandler.loading();

    document.addEventListener("online", function() {
        StatusHandler.online();
        registerOnGCM();
    }, false);

    document.addEventListener("offline", function() {
        alreadyRegistered = false;
        StatusHandler.offline();
    }, false);

    function isOnline() {
        return navigator.network.connection.type !== Connection.NONE;
    }

    function registerOnGCM() {
        if (!alreadyRegistered) {
            alreadyRegistered = true;
            GCMRegistrationService.registerOnGCM();
        }
    }

    if (isOnline()) {
        StatusHandler.online();
        registerOnGCM();
    } else {
        StatusHandler.offline();
    }

});

$(document).bind("mobileinit", function () {
    // Make your jQuery Mobile framework configuration changes here!
    $.mobile.allowCrossDomainPages = true;
});

function alertDismissed() {
    // do something
}

function getUserName(email){
    var username = email;
	$("#login-test").html('Bienvenido ' + username);
	var url = '';
    $.ajax({
            method: "POST",
            url: url,
            data: {emailUser: email}
        })
        .done(function (data) {

            if (data == "login") {

            }
            else if (data == "exist") {

            }
            else if (data == "failed") {

            }
        });
    return username
}

function cambiarTexto() {
    $("#phongapTest").html('reacciona a clicks que llama funciones dentro de la pagina');
	$("#login-test").html('Bienvenido ' + email1 + ' ');
    // navigator.notification.beep(2);
    // navigator.vibrate(3000);
}
$(document).on("pageinit", "#home", function (event) {
    var loginState = localStorage.login;
    if (loginState == 'false'){
        $("#loginbtnContainer").show();
        $("#logoutbtnContainer").hide();
        $("#login-test").html('');
    }else if (loginState == 'true' ){
        $("#loginbtnContainer").hide();
        $("#logoutbtnContainer").show();
        //$("#login-test").html('Bienvenido ' + p + ' ');
		//$("#login-test").html('Bienvenido');
    }

    $("#logoutBtn").click(function(){
        localStorage.login="false";
        window.location.href = "index.html";
    });


});

$(document).on("pageinit", "#userlogin", function (event) {
    $("#phongapTest").html('jQuery is running on phone gap');

    // on click login ajax
    $("#login").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
		getUserName(email);
        //var url = "http://192.168.1.9/app_colegios_parse/login.php";// ip casa
        //var url = "http://192.168.0.107/app_colegios_parse/login.php";// ip edificio nert 2
		var url = "http://192.168.0.112/app_colegios_parse-master/login.php";
        //console.log(fullname + email + password);
        //navigator.notification.beep(1);
        $.ajax({
                method: "POST",
                url: url,
                data: {email: email, password: password}
            })
            .done(function (data) {
                // $("#phongapTest").html(data);
                if (data == "login") {
                    /*$("#phongapTest").html(data);
                    navigator.notification.alert(
                        'Usuario creado exitosamente',  // message
                        alertDismissed,         // callback
                        'Oferta',            // title
                        'Cerrar'                  // buttonName
                    );*/
                    localStorage.login="true";
                    localStorage.email=email;
                    window.location.href = "index.html";
                    navigator.notification.beep(2);
                    navigator.vibrate(3000);
                }
                else if (data == "exist") {
                    $("#phongapTest").html(data);
                    stop();
                }
                else if (data == "failed") {
                    $("#phongapTest").html(data);
                    stop();
                }
            });

    });


});

$(document).on("pageinit", "#usersignup", function (event) {
    $("#phongapTest").html('jQuery is running on phone gap');
    $("#textchange").click(function () {
		
		cambiarTexto();
    });

    $("#signup").click(function () {
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        //var url = "http://192.168.0.107/app_colegios_parse/signup.php";
		var url = "http://192.168.0.112/app_colegios_parse-master/signup.php";
        //console.log(fullname + email + password);
        //navigator.notification.beep(1);
        $.ajax({
                method: "POST",
                url: url,
                data: {fullname: fullname, email: email, password: password}
            })
            .done(function (data) {
                // $("#phongapTest").html(data);
                if (data == "success") {
                    $("#phongapTest").html(data);
                    navigator.notification.alert(
                        'Usuario creado exitosamente',  // message
                        alertDismissed,         // callback
                        'Oferta',            // title
                        'Cerrar'                  // buttonName
                    );
                    navigator.notification.beep(2);
                    navigator.vibrate(3000);


                }
                else if (data == "exist") {
                    $("#phongapTest").html(data);
                    stop();
                }
                else if (data == "failed") {
                    $("#phongapTest").html(data);
                    stop();
                }
            });


        //var dataString = "fullname=" + fullname + "&email=" + email + "&password=" + password + "&signup=";
        //if ($.trim(fullname).length > 0 & $.trim(email).length > 0 & $.trim(password).length > 0) {
        /*    $.ajax({
         type: "POST",
         url: url,
         data: { fullname: fullname, email: email, password:password },
         crossDomain: true,
         cache: false,
         beforeSend: function () {
         $("#signup").val('Connecting...');
         },
         success: function (data) {
         if (data == "success") {
         $("#phongapTest").html(data);
         }
         else if (data == "exist") {
         $("#phongapTest").html(data);
         }
         else if (data == "failed") {
         $("#phongapTest").html(data);
         }
         }
         });*/
        //}
        //return false;
    });


    //navigator.notification.beep(2);
    //navigator.vibrate(3000);
});


var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        //  $.mobile.allowCrossDomainPages = true;


    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

    }
};
