angular.module("listaTelefonica").directive("uiAccordions", function() {
	return {
		controller: function($scope, $element, $attrs){
			var accordions = [];
			this.registerAccordion = function(accordion){
				accordions.push(accordion);
			};
			
			this.closeAll = function(){
				accordions.forEach(function(accordion) {
					accordion.isOpen = false;
				});
			};
		}
	};
});


angular.module("listaTelefonica").directive("uiAccordion", function() {
	return {
		templateUrl: "view/accordion.html",
		transclude: true,
		require: "^uiAccordions",
		scope: {
			title: "@",
		},		
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordion(scope);
			scope.open = function(){
				ctrl.closeAll();
				scope.isOpen = !scope.isOpen;
			};
		}
	};
});