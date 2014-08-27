/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['model/profesorVinculationModel'],function(){
    App.Model.ProfesorVinculationModel = Backbone.Model.extend({
        defaults:{
            'name':'',
            'aniosVinculacion':''
        },
        getDisplay:function(name){
            return this.get(name);
        } 
    });
    App.Model.ProfesorVinculationList = Backbone.Collection.extend({
            model:App.Model.ProfesorVinculationModel
        });
        return App.Model.ProfesorVinculationModel;
});


