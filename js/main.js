"use strict";

let input_field = document.getElementById("input");
let footer = document.getElementById("footer");

input_field.onfocus = function() {
    footer.style.display = "none";
}

input_field.onblur = function() {
    footer.style.display = "";
}