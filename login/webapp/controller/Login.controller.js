sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("login.controller.Login", {
        onInit: function () {

        },
        onLoginPress: function () {
            // Get the input values from the view
            var oView = this.getView();
            var sUsername = oView.byId("usernameInput").getValue();
            var sPassword = oView.byId("passwordInput").getValue();

            // Perform login logic here (e.g., call a backend service)
            if (sUsername === "admin" && sPassword === "admin") {
                MessageToast.show("Login successful!");
                // Navigate to the next page or perform further actions
            } else {
                MessageToast.show("Invalid username or password.");
            }
        }
    });
});
