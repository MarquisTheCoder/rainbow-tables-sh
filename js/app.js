"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/15/22,
 Time Created: 10:40 AM,
 File Name: app.js,
 File Description:
 *
*/

let fileButton = document.getElementById('generate-hash-button');
let fileInput = document.getElementById('get-file');

fileInput.addEventListener('change', ()=>{
     
     let fr = new FileReader();
     
     fr.onload = function(){
          alert(fr.result);
     }
     
     fr.readAsText(this.file);
})

fileButton.onclick = function(){
     fileInput.click();
}


let currentFileInput = '';

