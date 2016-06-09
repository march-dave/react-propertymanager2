'use strict';

var app = angular.module('propertymgrApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
      resolve: {
          clientDex: function(ClientService) {
            return ClientService.getAll();
          }
      }
    })
    .state('clients', {
      url: '/clients',
      templateUrl: '/html/clients.html',
      controller: 'clientsCtrl',
      resolve: {
        clientDex: function(ClientService) {
          return ClientService.getAll();
        }
      }
    })
    .state('newClient', {
      url: '/newClient',
      templateUrl: '/html/newClient.html',
      controller: 'newClientCtrl',
      resolve: {
        propertyDex: PropertymgrService => {
          return PropertymgrService.getPropertyAll();
        }
      }
    })
    .state('updateClient', {
      url: '/updateClient/:id',
      templateUrl: '/html/updateClient.html',
      controller: 'updateClientCtrl'
    })
    .state('properties', {
      url: '/properties/:id',
      templateUrl: '/html/properties.html',
      controller: 'propertiesCtrl',
      resolve: {
        propertyDex: function(PropertymgrService) {
          return PropertymgrService.getPropertyAll();
        }
      }
    })
    .state('newProperty', {
      url: '/newProperty',
      templateUrl: '/html/newProperty.html',
      controller: 'newPropertyCtrl'
    })
    .state('updateProperty', {
      url: '/updateProperty/:id',
      templateUrl: '/html/updateProperty.html',
      controller: 'updatePropertyCtrl'
    })

    $urlRouterProvider.otherwise('/');

});
