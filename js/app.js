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

fileInput.addEventListener('change', (event)=>{
     const fileList = event.target.files;
     
     let fr = new FileReader();
     
     fr.onload = function(){
          let passwordList = fr.result;
          passwordList = passwordList.split('\n');
          alert(passwordList)
     }
     
     fr.readAsText(fileList[0]);
})

fileButton.onclick = function(){
     fileInput.click();
}


let currentFileInput = '';

