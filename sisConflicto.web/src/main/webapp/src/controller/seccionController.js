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
define(['controller/_seccionController','delegate/seccionDelegate'], function() {
    App.Controller.SeccionController = App.Controller._SeccionController.extend({
        javascripter:function(){
              
        },
        postInit:function( options ) {
           var self = this;
           var x = $('#cuposDisponibleList');
           this.listSeccionCuposTemplate =_.template( x.html() );
           this.listSeccionCuposModelClass=options.listModelClass;
           console.log('holaa')
        },
       _renderC:function(){
           var self = this;
           this.$el.slideUp("fast",function(){
               var x = self.seccionCuposModelList;
               self.$el.html(self.listSeccionCuposTemplate({sections: x.models})); 
               self.$el.slideDown("fast");
           });
       },
      displayResults:function(params){
           if(params){
               var data = params.data;
           }
           if( App.Utils.eventExists(this.componentId + '-' + 'instead-seccion-list') ){
               Backbone.trigger(this.componentId + '-' + 'instead-seccion-list', {view: this, data: data});
           }else{
               Backbone.trigger(this.componentId + '-' + 'pre-seccion-list', {view: this, data: data});
               var self = this;  
               if(!this.seccionModelList){
                   this.seccionModelList=new this.listModelClass;
               }
               
               this.seccionModelList.fetch({
                   data:data,
                   success:function(){
                       var elementos = self.seccionModelList.models;
                       self.seccionCuposModelList = new App.Model.SeccionCuposDisponibleModelList;
                       _.each ( elementos , function(d){
                           var nombre = d.attributes.name;
                           var cupMax = d.attributes.cupoMaximo;
                           var cuposDisp = ""+(parseInt(d.attributes.cupoMaximo)-parseInt(d.attributes.inscritos));
                           var model = new App.Model.SeccionCuposDisponibleModel({name:nombre,cuposDisponible:cuposDisp,cuposMaximo:cupMax});
                           self.seccionCuposModelList.models.push(model);
                       });
                       self._renderC(params);
                       Backbone.trigger(self.componentId + '-' + 'post-seccion-list', {view: self});
                   },
                    error: function(mode, error) {
                        Backbone.trigger(self.componentId + '-' + 'error', {event: 'seccion-list', view: self, error: error});
                    }
               });
                       
           }
       }
       
    });
    return App.Controller.SeccionController;
}); 