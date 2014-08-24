/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['model/seccionCuposDisponibleModel'],function(){
    App.Model.SeccionCuposDisponibleModel=Backbone.Model.extend({
        defaults: {
            'name':'',
            cuposDisponible:'',
            cuposMaximo:''
            
        },
        getDisplay:function(name){
            return this.get(name);
        }
    });
    
    App.Model.SeccionCuposDisponibleModelList = Backbone.Collection.extend({
        model: App.Model.SeccionCuposDisponibleModel
    });
    
    return App.Model.SeccionCuposDisponibleModel;
});

