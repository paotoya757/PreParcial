/* ========================================================================
 * Copyright 2014 general
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 general

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define(['controller/_profesorController','delegate/profesorDelegate'], function() {
    App.Controller.ProfesorController = App.Controller._ProfesorController.extend({
        postInit:function(options){
            var self = this;
            this.listVinculationTemplate = _.template($('#profesorVinculationList').html());
            this.listVinculationModelClass= options.listModelClas;
        },
        darAniosVinculacion:function(fechaVinc){
            var hoy = new Date();
            var dateparts = fechaVinc.split("/");
            var dateVinc = new Date(dateparts[2], (dateparts[1]-1), dateparts[0]);
            return Math.floor(Math.abs(hoy-dateVinc)/(3600*24*365*1000));
        },
        calcularStatus:function(params){
            var self = this;
            var fechaVinc = params.fechaVinculacion;
            var aniosVinc = self.darAniosVinculacion(fechaVinc) ; 
            var aniosExp = parseInt(params.aniosExperiencia) ;
            var numPub = parseInt(params.numPublicaciones) ;
            
            var status = "de PLANTA";
            if( aniosExp > 20 || numPub >= 3*aniosVinc ){
                status = "TITULAR";
            }else if( (aniosExp>=10 && aniosExp<=20) || numPub >= 2*aniosVinc ){
                status = "ASISTENTE";
            }
            alert("El man es Profesor "+status);
        },
        _renderLista:function(){
           var self = this;
           this.$el.slideUp("fast",function(){
               self.$el.html(self.listVinculationTemplate({profesors: self.profesorVinculationModelList.models}));
               self.$el.slideDown("fast");
           });
        },
        desplegarLista:function(params){
            if(params){
                var data = params.data;
            }
            if (App.Utils.eventExists(this.componentId + '-' + 'instead-profesor-list')) {
                Backbone.trigger(this.componentId + '-' + 'instead-profesor-list', {view: this, data: data});
            } else {
                Backbone.trigger(this.componentId + '-' + 'pre-profesor-list', {view: this, data: data});
                var self = this;
                if(!this.profesorModelList){
                    this.profesorModelList = new this.listModelClass;
                }
                this.profesorModelList.fetch({
                    data:data,
                    success:function(){
                        var elementos = self.profesorModelList.models;
                        self.profesorVinculationModelList = new App.Model.ProfesorVinculationList;
                        _.each(elementos, function(e){
                            var yrs = self.darAniosVinculacion(e.attributes.fechaVinculacion);
                            var model = new App.Model.ProfesorVinculationModel({name:e.attributes.name,aniosVinculacion:yrs});
                            self.profesorVinculationModelList.models.push(model);
                        });
                        
                        self._renderLista(params);
                        Backbone.trigger(self.componentId + '-' + 'post-profesor-list', {view: self});
                    },
                    error: function(mode, error) {
                        Backbone.trigger(self.componentId + '-' + 'error', {event: 'profesor-list', view: self, error: error});
                    } 
                });
            }
        }
    });
    return App.Controller.ProfesorController;
}); 
