(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('loginController', function($scope) {
      /*Inicializacion de la variable comentario*/
      
        ons.ready(function() {
          console.log('cargo');
          openFB.init({appId: '874868115876369'});
        });
      
        /****************Control de login de facebook*****************/
        $scope.facebookLogin = function(){
            console.log('facebook');
            
            openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                        //alert('Facebook login succeeded, got access token: ' + response.authResponse.token);
                        /***************Mensaje de confirmacion y redireccion**************+*/
                        $scope.Navigator.pushPage('page1.html', { animation : 'fade' } )
                        toast.showShort('Te has logueado con facebook satisfactoriamente');
                    } else {
                        //alert('Facebook login failed: ' + response.error);
                        toast.showShort('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_stream'}
            );
        }
        
        /****************Control de login de twitter*****************/
        $scope.twitterLogin = function(){
            console.log('twitter');
            toast.showShort('twitter');
            $scope.Navigator.pushPage('page1.html', { animation : 'lift' } )
        }
        
        /****************Comentar en facebook *****************/
        $scope.comentar = function(){
            var elemento = document.querySelector( ".textarea");
            
            openFB.api({
            method: 'POST',
            path: '/me/feed',
            params: {
                message: elemento.value || 'Testing Facebook APIs'
            },
            success: function() {
                toast.showShort('El mensaje fue posteado con exito');
            },
            error: function(error){
                toast.showLong(error.message);
            }
            });
            
            //toast.showShort('Comentario exitoso');            
        }

  });



})();

