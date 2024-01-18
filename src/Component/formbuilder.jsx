import $ from "jquery";
import React, { Component, Createref } from "react";
import "../index.css";
import {SUBMIT_DATA} from "../Action/Index";
import store from "../Store";

window.jQuery = $;  
window.$ = $;

require("formBuilder/dist/form-render.min.js");
require("jquery-ui-sortable");
require("formBuilder");



$(function ($) {
  
  var fbTemplate = document.getElementById("build-wrap");
  var options = {
    onSave: function (evt, formData) {
      console.log("formbuilder saved", formData);
      toggleEdit(false);
      $(".render-wrap").formRender({ formData });

      store.dispatch({ type: SUBMIT_DATA, payload: formData });
    },
  };
  $(fbTemplate).formBuilder(options);
});
function toggleEdit(editing) {
  document.body.classList.toggle("form-rendered", !editing);
}
class FormBuilder extends Component {
  fb = Createref();
  componentDidMount() {
    $(this.fb.current).formBuilder({});
  }

  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}
export default FormBuilder;
