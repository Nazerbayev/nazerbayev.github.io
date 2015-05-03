var app = angular.module('cvApp', ['pascalprecht.translate', 'angular-loading-bar']);
app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('es', {
		'TLF': 'Teléfono',
		'CORREO': 'Correo',
		'ESTUDIOS_ACADEMICOS': 'Estudios Academicos',
		'ING_INFORMATICA': 'Ingeniería en Informática',
		'STATUS_INCOMPLETA': 'Incompleta',
		'STATUS_COMPLETA': 'Completa',
		'ACADEMIA_LOURTEC': 'Academia Lourtec',
		'CURSOS_Y_SEMINARIOS_REALIZADOS': 'Cursos y Seminarios Realizados',
		'JORNADAS': '2da Jornadas Interuniversitarias de Ciencias de la Computación',
		'PROC_IMAGENES': 'Curso de Procesamiento Dígital de Imágenes',
		'COMP_GRAFICA': 'Curso de Computación Gráfica',
		'CONOCIMIENTOS': 'Conocimientos',
		'LENGUAJES': 'Lenguajes de Programación',
		'EN_ESTUDIO': 'En Estudio:',
		'FRAMEWORKS': 'Frameworks y Librerías',
		'LIB_APP': 'Librerías Gráficas para Programación de Aplicaciones de Escritorio',
		'SOFTWARE': 'Software',
		'OP_SYSTEMS': 'Sistemas Operativos',
		'XP': 'Experiencia',
		'CARGO_ACTUAL': 'Coordinador de Aplicaciones (Extranet)',
		'RESP_1': 'Supervisión de Proyectos de Innovación',
		'RESP_2': 'Desarrollo y Mantenimiento de las Páginas de la Extranet (Venezuela, Guatemala, Panamá y Puerto Rico)',
		'CARGO_LVSV_INICIO': 'Especialista en Aplicaciones Web',
		'RESP_3': 'Supervisión, Desarrollo y Mantenimiento de las Páginas de la Extranet (Venezuela)',
		'CARGO_MEDIANET': 'Consultor Semi Senior',
		'RESP_4': 'Creación y Mantenimiento de soluciones para Empresas',
		'TIG': 'Trabajo Instrumental de Grado',
		'RESP_5': 'Creación de una Interfaz Web para el CRM/ERP Opensource Compiere usando Google GWT y programado en Java',
		'PASANTE': 'Pasante',
		'RESP_6': 'Creación y Mantenimiento de Módulos de Pivotal para el Banco de Brasil',
		'CARGO_NOVA': 'Desarrollador Web Junior',
		'RESP_7': 'Creación de Sitios web en Flash',
		'RESP_8': 'Creación de Backends usando PHP, ASP.NET y MySQL'
	});
	$translateProvider.translations('en', {
		'TLF': 'Phone',
		'CORREO': 'Mail',
		'ESTUDIOS_ACADEMICOS': 'Academic Studies',
		'ING_INFORMATICA': 'Informatics Engineer',
		'STATUS_INCOMPLETA': 'Incomplete',
		'STATUS_COMPLETA': 'Complete',
		'ACADEMIA_LOURTEC': 'Lourtec Academy',
		'CURSOS_Y_SEMINARIOS_REALIZADOS': 'Cursos y Seminarios Realizados',
		'JORNADAS': '2da Jornadas Interuniversitarias de Ciencias de la Computación',
		'PROC_IMAGENES': 'Digital Processing of Images Course',
		'COMP_GRAFICA': 'Curso de Computación Gráfica',
		'CONOCIMIENTOS': 'Knowledge',
		'LENGUAJES': 'Programming Languages',
		'EN_ESTUDIO': 'Currently Studying:',
		'FRAMEWORKS': 'Frameworks and Libraries',
		'LIB_APP': 'Graphic Libraries for Desktop Application Design',
		'SOFTWARE': 'Software',
		'OP_SYSTEMS': 'Operative Systems',
		'XP': 'Experience',
		'CARGO_ACTUAL': "Application's Coordinator(Extranet)",
		'RESP_1': "Innovation Projects' Supervisor",
		'RESP_2': 'Extranet Development and Maintenance (Venezuela, Guatemala, Panama & Puerto Rico)',
		'CARGO_LVSV_INICIO': 'Web Application Especialist',
		'RESP_3': 'Extranet Supervision, Development & Maintenance (Venezuela)',
		'CARGO_MEDIANET': 'Semi Senior Consultor',
		'RESP_4': 'Enterprise Solutions Development and Maintenance',
		'TIG': "Graduation's Instrumental Project",
		'RESP_5': 'Creation of Web Interface for the CRM/ERP Opensource Compiere Application using Google\'s GWT & Java',
		'PASANTE': 'Intern',
		'RESP_6': 'Creaton and Maintenance of Pivotal Modules for Banco de Brasil',
		'CARGO_NOVA': 'Junior Web Developer',
		'RESP_7': 'Creation of Flash based Websites',
		'RESP_8': 'Backend creation using PHP, ASP.NET and MySQL'
	});
	$translateProvider.translations('pt', {
		'TLF': 'Teléfono',
		'CORREO': 'Correo',
		'ESTUDIOS_ACADEMICOS': 'Estudios Academicos',
		'ING_INFORMATICA': 'Ingeniería en Informática',
		'STATUS_INCOMPLETA': 'Incompleta',
		'STATUS_COMPLETA': 'Completa',
		'ACADEMIA_LOURTEC': 'Academia Lourtec',
		'CURSOS_Y_SEMINARIOS_REALIZADOS': 'Cursos y Seminarios Realizados',
		'JORNADAS': '2da Jornadas Interuniversitarias de Ciencias de la Computación',
		'PROC_IMAGENES': 'Curso de Procesamiento Dígital de Imágenes',
		'COMP_GRAFICA': 'Curso de Computación Gráfica',
		'CONOCIMIENTOS': 'Conocimientos',
		'LENGUAJES': 'Lenguajes de Programación',
		'EN_ESTUDIO': 'En Estudio:',
		'FRAMEWORKS': 'Frameworks y Librerías',
		'LIB_APP': 'Librerías Gráficas para Programación de Aplicaciones de Escritorio',
		'SOFTWARE': 'Software',
		'OP_SYSTEMS': 'Sistemas Operativos',
		'XP': 'Experiencia',
		'CARGO_ACTUAL': 'Coordinador de Aplicaciones (Extranet)',
		'RESP_1': 'Supervisión de Proyectos de Innovación',
		'RESP_2': 'Desarrollo y Mantenimiento de las Páginas de la Extranet (Venezuela, Guatemala, Panamá y Puerto Rico)',
		'CARGO_LVSV_INICIO': 'Especialista en Aplicaciones Web',
		'RESP_3': 'Supervisión, Desarrollo y Mantenimiento de las Páginas de la Extranet (Venezuela)',
		'CARGO_MEDIANET': 'Consultor Semi Senior',
		'RESP_4': 'Creación y Mantenimiento de soluciones para Empresas',
		'TIG': 'Trabajo Instrumental de Grado',
		'RESP_5': 'Creación de una Interfaz Web para el CRM/ERP Opensource Compiere usando Google GWT y programado en Java',
		'PASANTE': 'Pasante',
		'RESP_6': 'Creación y Mantenimiento de Módulos de Pivotal para el Banco de Brasil',
		'CARGO_NOVA': 'Desarrollador Web Junior',
		'RESP_7': 'Creación de Sitios web en Flash',
		'RESP_8': 'Creación de Backends usando PHP, ASP.NET y MySQL'
	});
	$translateProvider.preferredLanguage('es');
}]);

app.controller('pepe', ['$scope','$translate', 'cfpLoadingBar', '$timeout', function($scope, $translate,cfpLoadingBar, $timeout) {
	$scope.idioma = function(idioma) {
		cfpLoadingBar.start();
		$timeout(function(){
			cfpLoadingBar.complete();
			$translate.use(idioma);

		}, 200);

	};
  
}]);

