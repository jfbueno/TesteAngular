angular.module("listaTelefonica").filter("ellipsis", function (){
	return function(input, tamanho){
		
		if(input.length <= tamanho)
			return input;
			
		var output = input.substring(0, (tamanho || 8)) + "...";
		return output;	
	};
});