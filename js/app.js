/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var app = angular.module('calendar', [ ]);

app.controller('MainSchedulerCtrl', function($scope) {
  $scope.events = [
    { id:1, text:"Task A-12458",
      start_date: new Date(2013, 10, 12),
      end_date: new Date(2013, 10, 16) },
    { id:2, text:"Task A-83473",
      start_date: new Date(2013, 10, 22 ),
      end_date: new Date(2013, 10, 24 ) }
  ];

  $scope.scheduler = { date : new Date(2013,10,1) };

});
