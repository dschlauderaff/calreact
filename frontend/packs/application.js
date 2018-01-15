import React from "react";
import ReactDOM from "react-dom";
import Rails from "rails-ujs";
import jQuery from "jquery";
import "init";
import Appointment from "../components/appointments.jsx";

Rails.start();
window.$ = window.jQuery;
window.jQuery = jQuery;

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Appointment />,
//     document.body.appendChild(document.createElement('div')
//     ),
//   )
// })
