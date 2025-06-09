sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("login.controller.Login", {
      onInit: function () {

        // var fireAuth = this.getView().getModel("fbModel")
        // console.log(fireAuth);
      },
      onLoginPress: function () {
        // Get the input values from the view
        var oView = this.getView();
        sap.ui.core.BusyIndicator.show();
        var sUsername = oView.byId("usernameInput").getValue();
        var sPassword = oView.byId("passwordInput").getValue();

        try {
            var oModel = this.getView().getModel("fbModel").getData();
            console.log(oModel);
            var fireAuth = oModel.fireAuth;
            var firestoreData = oModel.firestore;
            fireAuth.signInWithEmailAndPassword(email, password).then(function (usersigned) {
                sap.ui.core.BusyIndicator.hide();
                MessageBox.success("You are Logged in!");
                that.onReset();
            }).catch(function (error) {
                sap.ui.core.BusyIndicator.hide();
                // Handle Errors here.
                errorMessage = error.message;
                MessageBox.error(errorMessage);
            });
        } catch (error) {
          // Handle any errors that occur during the login process
          sap.ui.core.BusyIndicator.hide();
          MessageToast.show("Login failed: " + error.message);
          return;
            
        }
      },
    });
  }
);
