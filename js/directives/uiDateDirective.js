angular.module("listaTelefonica").directive("uiDate", function($filter){
	return {
		require: "ngModel",
		link: function(scope, element, attrs, control){
			var _formatDate = function(date){
				date = 	date.replace(/[^0-9]+/g, '');
				if(date.length > 2){
					date = date.substring(0, 2) + '/' + date.substring(2);					
				}
				if(date.length > 5){
					date = date.substring(0, 5) + '/' + date.substring(5, 9);
				}
				
				return date;
			};		
			
			element.bind("keyup", function(){
				control.$setViewValue(_formatDate(control.$viewValue));
				control.$render();
			});
			
			control.$parsers.push(function (value){
				if(value.length == 10){
					var dateArray = value.split('/');					
					return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
				}
			});
			
			control.$formatters.push(function (value){
				$filter("date")(value, "dd/MM/yyyy")
			});
		}
	};
});