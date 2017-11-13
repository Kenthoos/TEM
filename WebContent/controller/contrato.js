var contratoModulo = angular.module('contratoModulo',[]);

contratoModulo.controller("contratoController", function($scope) {
	$scope.empresas = [

		{codigoempresa: 1, razaosocial:'Agile Logistica Ltda',cnpj:'199.165.168/0001-99',
		endereco:'Estrada do Sape',bairro:'Turiacu',cidade:'Rio de Janeiro',uf:'RJ',cep:'21550-010',
		contato: "Elder Pedrosa",email: "elder.pedrosa@agile.com.br",telefone: "021 96520-4909"},

		{codigoempresa: 2, razaosocial:'Contoso Bikes & Frozen Yogurt',cnpj:'195.252.252/0001-15',
		endereco:'Avenida João Ventura dos Santos',bairro:'Baronesa',cidade:'São Paulo',uf:'SP',cep:'06236-852',
		contato: "Jonh Mark",email: "jonh.mark@contoso.com",telefone: "011 97250-5555"},

		{codigoempresa: 3, razaosocial:'Arcos e Solda Eletrodos Ltda',cnpj:'022.222.168/2225-05',
		endereco:'Avenida Inocêncio Seráfico',bairro:'Centro',cidade:'Carapicuiba',uf:'SP',cep:'06320-291',
		contato: "Nicoletta Marina",email: "nicoletta@arcosolda.com.br",telefone: "011 4905-8000"},

		{codigoempresa: 4, razaosocial:'Instituto de Beleza Olga',cnpj:'515.854.111/2221-02',
		endereco:'Rua Dona Primitiva Vianco',bairro:'Centro',cidade:'Osasco',uf:'SP',cep:'06083-260',
		contato: "Arial Piteri",email: "ariel.piteri@olga.com.br",telefone: "011 3656-1452"}

	
	];

		$scope.contratos = [
		
		{codigocontrato: 7, numero:'100', empresa:{codigoempresa: 4, razaosocial:'Instituto de Beleza Olga',cnpj:'515.854.111/2221-02',
		endereco:'Rua Dona Primitiva Vianco',bairro:'Centro',cidade:'Osasco',uf:'SP',cep:'06083-260',
		contato: "Arial Piteri",email: "ariel.piteri@olga.com.br",telefone: "011 3656-1452"},datainicio:'01012000',datafim:'01012045',tipo:'DDR'},

		{codigocontrato: 8, numero:'101',empresa:{codigoempresa: 3, razaosocial:'Arcos e Solda Eletrodos Ltda',cnpj:'022.222.168/2225-05',
		endereco:'Avenida Inocêncio Seráfico',bairro:'Centro',cidade:'Carapicuiba',uf:'SP',cep:'06320-291',
		contato: "Nicoletta Marina",email: "nicoletta@arcosolda.com.br",telefone: "011 4905-8000"},datainicio:'01/01/2015',datafim:'01/01/2023',tipo:'SMP'},
		
		{codigocontrato: 9, numero:'102',empresa:{codigoempresa: 2, razaosocial:'Contoso Bikes & Frozen Yogurt',cnpj:'195.252.252/0001-15',
		endereco:'Avenida João Ventura dos Santos',bairro:'Baronesa',cidade:'São Paulo',uf:'SP',cep:'06236-852',
		contato: "Jonh Mark",email: "jonh.mark@contoso.com",telefone: "011 97250-5555"},datainicio:'01/01/2017',datafim:'01/01/2032',tipo:'LDN'},
		
		{codigocontrato: 10, numero:'103',empresa:{codigoempresa: 1, razaosocial:'Agile Logistica Ltda',cnpj:'199.165.168/0001-99',
		endereco:'Estrada do Sape',bairro:'Turiacu',cidade:'Rio de Janeiro',uf:'RJ',cep:'21550-010',
		contato: "Elder Pedrosa",email: "elder.pedrosa@agile.com.br",telefone: "021 96520-4909"},datainicio:'01012015',datafim:'01012022',tipo:'0800'},
		
		{codigocontrato: 11, numero:'104',empresa:{codigoempresa: 4, razaosocial:'Instituto de Beleza Olga',cnpj:'515.854.111/2221-02',
		endereco:'Rua Dona Primitiva Vianco',bairro:'Centro',cidade:'Osasco',uf:'SP',cep:'06083-260',
		contato: "Arial Piteri",email: "ariel.piteri@olga.com.br",telefone: "011 3656-1452"},datainicio:'01/01/2015',datafim:'01/01/2018',tipo:'NUN'},
	
	];



	$scope.selecionaContrato = function (contratoSelecionado){
		$scope.contrato = contratoSelecionado;
	}

	$scope.limparCampos = function (){
		$scope.contrato = null;
	}

	$scope.gravar = function (){

		$scope.contratos.push($scope.contrato); 
		$scope.limparCampos(); 

	}

	$scope.excluir = function(){

		$scope.contratos.splice($scope.contratos.indexOf($scope.contrato),1);
		$scope.limparCampos(); 
	}

});