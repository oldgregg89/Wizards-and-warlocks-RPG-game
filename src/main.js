import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Sword, IronChestPlate } from './items.js';
import { Character } from './Character.js';
import $ from 'jquery';


$(document).ready(function() {
  $("#character-build").submit(function() {
    event.preventDefault()
    const heroType = $("input:radio[name:hero]checked").val()
    const name = $("#name-input").val();
    let character = new Character(heroType, name);
    $("#build-form").hide();
    $("#word-of-warning").fadeIn();
  });

});
