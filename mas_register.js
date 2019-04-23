"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Nicholas Le 
   Date: 04/19/19   
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", function () {
      calcCart();
      regSubmit.onclick = sessionTest();
      document.getElementById("fnBox").oninput = calcCart;
      document.getElementById("lnBox").oninput = calcCart;
      document.getElementById("groupBox").oninput = calcCart;
      document.getElementById("mailBox").oninput = calcCart;
      document.getElementById("phoneBox").oninput = calcCart;
      document.getElementById("banquetBox").oninput = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;

})
//This function provides a validation test for the conference session selection list.
function sessionTest() {
      var sessionBox = document.getElementById("sessionBox")
      if (sessionBox.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a session package");
      } else {
            sessionBox.setCustomValidity("");
      };
};
// This function will calculate the registration cost and save information about the customer’s choices in session storage.
function calcCart() {
      var confName = document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value;

      var confGroup = document.getElementById("groupBox").value;

      var confMail = document.getElementById("mailBox").value;

      var confPhone = document.getElementById("phoneBox").value;

      var confBanquet = document.getElementById("banquetBox").value;

      var confBanquetCost = confBanquet * 55;

      var selectedIndex = document.forms.regForm.elements.sessionBox.value;

      if (sessionBox.selectedIndex !== -1) {
            var confsession = document.forms.regForm.elements.sessionBox[selectedIndex].textContext;

            var confSessionCost = document.forms.regForm.elements.sessionBox.value;
      } else {
            confsession = "";
            confSessionCost = 0;
      }

      if (document.getElementById("mediaCB").onclick) {
            var confPack = "yes";
            var confPackCost = 115;
      } else {
            confPack = "no";
            confPackCost = 0;
      }


}