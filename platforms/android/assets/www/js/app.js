(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('loginController', function($scope) {
        ons.ready(function() {
          console.log('cargo');
        });
        $scope.facebookLogin = function(){
            console.log('facebook');
            toast.showShort('facebook');
            $scope.Navigator.pushPage('page1.html', { animation : 'lift' } )
        }
        
        $scope.twitterLogin = function(){
            console.log('twitter');
            toast.showShort('twitter');
            $scope.Navigator.pushPage('page1.html', { animation : 'lift' } )
        }
  });



})();

