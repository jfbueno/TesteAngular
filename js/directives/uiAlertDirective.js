angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "view/alert.html",
		replace: true, //Remove o elemento que chama essa diretiva
		restrict: "AE", //atributo e elemento
		scope: {
			caption: "@title"			
		},
		transclude: true
	};
});