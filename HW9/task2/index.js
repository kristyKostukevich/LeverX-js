sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        sap.ui.getCore().setModel(oProductModel, "products");
        var oAddressModel = new JSONModel();
        oAddressModel.loadData("./model/Address.json");
        sap.ui.getCore().setModel(oAddressModel, "address");
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");


    });
});
