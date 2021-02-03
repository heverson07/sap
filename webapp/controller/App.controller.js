sap.ui.define([
   "sap/ui/core/mvc/Controller",
    "sap/m/MessgeToast"
], function(Controller){
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        onShowHello : function(){
            alert("fala meu brother!");
            MessageToast.show("fala Meu Broother!")
        }
    });
});