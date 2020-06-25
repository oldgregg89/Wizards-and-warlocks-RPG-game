import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Sword, IronChestPlate } from './items.js';
import { Character } from './Character.js';
import { Sword } from './items.js';
import $ from 'jquery';


$(document).ready(function() {
  let character;
  $("#character-build").submit(function() {
    event.preventDefault();
    const heroType = $("input:radio[name=hero]:checked").val();
    const name = $("#name-input").val();
    character = new Character(heroType, name);
    let sword = new Sword();
    character.handItem(sword);
    $(".name-span").text(name);
    $("#build-form").hide();
    $("#word-of-warning").fadeIn();
  });

});
