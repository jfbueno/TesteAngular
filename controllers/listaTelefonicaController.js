angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
	$scope.app = "Lista Telefônica";
	$scope.contatos = [];
	$scope.operadoras = [];
	
	var carregarContatos = function(){
		$http.get("http://localhost:3412/contatos").success(function(data){
			$scope.contatos = data;
		}).error(function(data, status){
			$scope.message = "Aconteceu um erro " + data;
		});	
	};
	
	var carregarOperadoras = function(){
		$http.get("http://localhost:3412/operadoras").success( function (data){
			$scope.operadoras = data;
		});
	};
	
	$scope.adicionarContato = function(contato){
		contato.data = new Date();
		$http.post("http://localhost:3412/contatos", contato).success(function(data){
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