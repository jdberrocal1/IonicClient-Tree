(function () {
  var serviceId = 'PlacesService';
  angular
    .module('app')
        .service(serviceId, [PlacesService]);

    function PlacesService ()
    {
      var places = [
          {
              id: 1,
              name: 'San José',
              cantons:[
                  {
                      name:'San José',
                      districts:['Carmen', 'Merced', 'Hospital', 'Catedral', 'Zapote', 'San Francisco de Dos Ríos', 'Uruca', 'Mata Redonda', 'Pavas', 'Hatillo', 'San Sebastían']
                  },
                  {
                      name:'Escazú',
                      districts:['Escazú', 'San Antonio', 'San Rafael']
                  },
                  {
                      name:'Desamparados',
                      districts:['Desamparados', 'San Miguel', 'San Juan de Dios', 'San Rafael Arriba', 'San Antonio', 'Frailes', 'Patarrá', 'San Cristobal', 'Rosario', 'Damas', 'San Rafael Abajo', 'Gravilias', 'Los Guido']
                  },
                  {
                      name:'Puriscal',
                      districts:['Santiago', 'Mercedes Sur', 'Barbacoas', 'Grifo Alto', 'San Rafael', 'Candelarita', 'Desamparaditos', 'San Antonio', 'Chires']
                  },
                  {
                      name:'Tarrazú',
                      districts:['San Marcos','San Lorenzo','San Carlos']
                  },
                  {
                      name:'Aserrí',
                      districts:['Aserrí','Tarbaca','Vuelta de Jorco','San Gabriel','Legua','Monterrey','Salitrillos']
                  },
                  {
                      name:'Mora',
                      districts:['Colón','Guayabo','Tabarcia','Piedras Negras','Picagres','Jaris']
                  },
                  {
                      name:'Goicoechea',
                      districts:['Guadalupe','San Francisco','Calle Blancos','Mata de Plátano','Ipís','Rancho Redondo','Purral']
                  },
                  {
                      name:'Santa Ana',
                      districts:['Santa Ana','Salitral','Pozos','Uruca ','Piedades','Brasil']
                  },
                  {
                      name:'Alajuelita',
                      districts:['Alajuelita','San Josecito','San Antonio','Concepción','San Felipe']
                  },
                  {
                      name:'Vázquez de Coronado',
                      districts:['San Isidro','San Rafael','Dulce Nombre de Jesús','Patalillo','Cascajal']
                  },
                  {
                      name:'Acosta',
                      districts:['San Ignacio','Guaitil','Palmichal','Cangrejal','Sabanillas']
                  },
                  {
                      name:'Tibás',
                      districts:['San Juan','Cinco Esquinas','Anselmo Llorente','León XIII ','Colima']
                  },
                  {
                      name:'Moravia',
                      districts:['San Vicente','San Jerónimo','La Trinidad']
                  },
                  {
                      name:'Montes de Oca',
                      districts:['San Pedro','Sabanilla','Mercedes','San Rafael']
                  },
                  {
                      name:'Turrubares',
                      districts:['San Pablo','San Pedro','San Juan de Mata','San Luis','Carara']
                  },
                  {
                      name:'Dota',
                      districts:['Santa María','El Jardín','Copey']
                  },
                  {
                      name:'Curridabat',
                      districts:['Curridabat','Granadilla','Sánchez','Tirrases']
                  },
                  {
                      name:'Pérez Zeledón',
                      districts:['San Isidro de El General','El General','Daniel Flores','Rivas','San Pedro','Platanares','Pejibaye','Cajón','Barú','Río Nuevo','Páramo','La Amistad']
                  },
                  {
                      name:'León Cortés',
                      districts:['San Pablo','San Andrés','Llano Bonito','San Isidro','Santa Cruz','San Antonio']
                  }
              ]
          },
          {
              id: 2,
              name:'Alajuela',
              cantons:[

              ]

          },
          {
              id: 3,
              name:'Cartago',
              cantons:[
                  
              ]

          },
          {
              id: 4,
              name:'Heredia',
              cantons:[
                  
              ]

          },
          {
              id: 5,
              name:'Guanacaste',
              cantons:[
                  
              ]

          },
          {
              id: 6,
              name:'Puntarenas',
              cantons:[
                  
              ]

          },
          {
              id: 7,
              name:'Limón',
              cantons:[
                  {
                      name:'Limón',
                      districts:['Limón','Valle La Estrella','Río Blanco','Matama']
                  },
                  {
                      name:'Pococí',
                      districts:['Guápiles','Jiménez','Rita','Roxana','Cariari','Colorado','La Colonia']
                  },
                  {
                      name:'Siquirres',
                      districts:['Siquirres','Pacuarito','Florida','Germania','El Cairo','Alegría']
                  },
                  {
                      name:'Talamanca',
                      districts:['Bratsi','Sixaola','Cahuita','Telire']
                  },
                  {
                      name:'Matina',
                      districts:['Matina','Batán','Carrandi']
                  },
                  {
                      name:'Guácimo',
                      districts:['Guácimo','Mercedes ','Pocora','Río Jiménez','Duacarí']
                  }
              ]

          }
      ];
    }
})();
