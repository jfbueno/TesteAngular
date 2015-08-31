angular.module("listaTelefonica").filter("name", function(){
	return function(input){
		var nomes = input.split(" ");
		
		var nomesFormadatos = nomes.map(function(nome){
			if(/(da|de|dos)/.test(nome))
				return nome;
			
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		
		return nomesFormadatos.join(" ");
	};
});