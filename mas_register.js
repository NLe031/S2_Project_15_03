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
//These events watch for a change in the input boxes.
window.addEventListener("load", function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
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
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;

      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;

      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;

      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;

      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;

      var selectedIndex = document.forms.regForm.elements.sessionBox.value;

      if (sessionStorage.selectedIndex !== -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex];

            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox.value;
      } else {
            sessionStorage.confsession = "";
            sessionStorage.confSessionCost = 0;
      }

      if (document.getElementById("mediaCB").onclick) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }

      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

      writeSessionValues();
}

//This function will write the data values from session storage in to the registration summary form.
function writeSessionValues() {

}