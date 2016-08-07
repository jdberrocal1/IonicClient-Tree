(function () {
    'use strict';
    var serviceId = 'AddLandService';
    angular
        .module('app')
            .service(serviceId, [AddLandService]);

    function AddLandService ()
    {
        var lands = [
            {
                id:1,
                name:"La Ponderosa",
                address:{
                    province:{
                        name:'Alajuela'
                    },
                    canton: {
                        name:'San Carlos'
                    },
                    district: {
                        name:'Cutris'
                    },
                    direction: 'San Joaquin, 1Km Norte de la escuela'
                },
                points:[],
                owner:'jdberrocal1'
            }
        ];

        this.getLandsByUserName = function getLandsByUserName (username){
            return lands.filter(function(land){
                if(land.owner===username){
                    return true;
                }else{
                    return false;
                }
            });
        };

        this.saveLand = function saveLand(land){
            land.id=lands.length;
            lands.push(land);
        };

    }
})();
