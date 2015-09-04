angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	
	var _getContatos = function(){
		return $http.get(config.apiBaseUrl + "/contatos");
	};
	
	var _saveContato = function(contato){
		return $http.post(config.apiBaseUrl + "/contatos", contato);
	};
	
	var _deleteContato = function(contatosDelete){
		console.log(contatosDelete);
		return $http.delete(config.apiBaseUrl + "/contatos/jefh-", '{prop1: val1}' ); //isso ainda é só teste
	};
	
	return {
		getContatos: _getContatos,
		saveContato: _saveContato,
		deleteContato: _deleteContato
	};
}); 