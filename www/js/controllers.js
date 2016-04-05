angular.module('app.controllers', [])

    .controller('tareasCtrl', function ($scope) {

    })

    .controller('circularesCtrl', function ($scope) {

    })

    .controller('eventosCtrl', function ($scope) {

    })

    .controller('colegiosAppCtrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('notasCtrl', function ($scope) {

    })

    .controller('calificacionesCtrl', function ($scope) {

    })
    .controller('tareasCtrlList', function ($scope) {

        $scope.data = {
            showDelete: false
        };

        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true

        $scope.items = [
            {
                "id": "2",
                "nombre": "Mestro",
                "apellido": "numero 1",
                "username": "maestro1",
                "password": "maestro1",
                "correo": "maestro@soloinnova.com",
                "edad": "22",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "4",
                "nombre": "Maestro",
                "apellido": "Número 2",
                "username": "maestro2",
                "password": "maestro2",
                "correo": "maestro@soloinnova.com",
                "edad": "25",
                "genero": "F",
                "tipo": "maestro"
            }, {
                "id": "6",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "sss",
                "correo": "correo@dominio.com",
                "edad": "27",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "7",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "sss",
                "correo": "correo@dominio.com",
                "edad": "27",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "8",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "sss",
                "correo": "correo@dominio.com",
                "edad": "27",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "9",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "sss",
                "correo": "correo@dominio.com",
                "edad": "27",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "10",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "sss",
                "correo": "correo@dominio.com",
                "edad": "27",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "11",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "jhhgjhgj",
                "correo": "correo@dominio.com",
                "edad": "11",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "12",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "jhhgjhgj",
                "correo": "correo@dominio.com",
                "edad": "11",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "13",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "jhhgjhgj",
                "correo": "correo@dominio.com",
                "edad": "11",
                "genero": "M",
                "tipo": "maestro"
            }, {
                "id": "14",
                "nombre": "carlos",
                "apellido": "samayoa",
                "username": "dlatios",
                "password": "jhhgjhgj",
                "correo": "correo@dominio.com",
                "edad": "11",
                "genero": "M",
                "tipo": "maestro"
            }
        ];

    });