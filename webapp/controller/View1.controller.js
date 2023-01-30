sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-8_XMLModel.controller.View1", {
		
		onInit : function(){
			var oModel = new sap.ui.model.xml.XMLModel();
			oModel.loadData("model/student.xml");
			this.getView().setModel(oModel);
		}

	});
});