'use strict';

var app = angular.module('propertymgrApp');

app.service('ClientService', function($http, $q) {

  this.getAll = () => {
    return $http({
      method: "GET",
      url: `/api/clients`,
      cache: false
    })
    .then(res => $q.resolve(res.data));
  };
  this.getById = function(id) {
     return $http.get(`/api/clients/${id}`);
   };
  this.create = newClient => {
     return $http.post('/api/clients', newClient);
   };
  this.delete = function(id) {
    return $http.delete(`/api/clients/${id}`);
  };
  this.edit = function(id, client) {
    return $http.put(`/api/clients/${id}`, client);
  };
  this.addProperty = function(clientId, propertyId) {
      return $http.put(`/api/clients/${clientId}/addProperty/${propertyId}`);
  };
  this.removeProperty = function(clientId, propertyId) {
      return $http.put(`/api/clients/${clientId}/removeProperty/${propertyId}`);
  };
});

app.service('PropertymgrService', function($http, $q) {

  this.getPropertyAll = () => {
    return $http({
      method: 'GET',
      url: '/api/properties',
      cache: false
    })
    .then(res => $q.resolve(res.data));
  };
  this.getPropertyById = function(id) {
     return $http.get(`/api/properties/${id}`);
   };

  this.createProperty = newProperty => {
     return $http.post('/api/properties', newProperty);
   };

  this.deleteProperty = function(id) {
    return $http.delete(`/api/properties/${id}`);
  };

  this.editProperty = function(id, property) {
    return $http.put(`/api/properties/${id}`, property);
  }
});
