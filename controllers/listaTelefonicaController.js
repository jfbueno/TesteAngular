angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI){
	$scope.app = "Lista Telefônica";
	$scope.contatos = [];
	$scope.operadoras = [];
	
	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data){
			$scope.contatos = data;
		}).error(function(data, status){
			$scope.message = "Aconteceu um erro " + data;
		});	
	};
	
	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success( function (data){
			$scope.operadoras = data;
		});
	};
	
	$scope.adicionarContato = function(contato){
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function(data){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
		//$scope.contatos.push(contato); aqui o objeto seria adicionado no final do array
		//tb pode ser usado angular.copy(contato) que cria uma cópia de "contato"
	};
	
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado)
				return contato;
		});					
	};				
	
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});					
	};
	
	$scope.ordenarPor = function(campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	};
	
	carregarContatos();
	carregarOperadoras();
	});