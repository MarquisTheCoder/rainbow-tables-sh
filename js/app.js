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

let hashTable = {
     
}

let fileButton = document.getElementById('generate-hash-button');
let fileInput = document.getElementById('get-file');
let tbody = document.querySelector('.main-tbody')

fileInput.addEventListener('change', (event)=>{
     const fileList = event.target.files;
     let fr = new FileReader();
<<<<<<< HEAD
=======
     function resolveHash(password){
          return new Promise(resolve => sha256(password))
     }
>>>>>>> main
     fr.onload = function(){
          
          let passwordList = fr.result;
     
          passwordList = passwordList.split('\n');
<<<<<<< HEAD
          passwordList.forEach(password => {
               let hash = sha256(password);
               hashTable[password] = hash;
               tbody.innerHTML += 
                    "\t\t\t\t\t\t<tr class=\"tbody-row\">\n" +
                    `\t\t\t\t\t\t\t<td id="password">${password}</td>\n` +
                    `\t\t\t\t\t\t\t<td id='hash'>${hash}</td>\n` +
                    "\t\t\t\t\t\t</tr>\n"
          })
=======
          async function load(){
               passwordList.forEach(password => {
                    let hash = await resolveHash(password);
                    
          
               }) 
          }
          
          
          
>>>>>>> main
     }
     fr.readAsText(fileList[0]);
})

fileButton.onclick = function(){
     fileInput.click();
}

document.querySelector('#crack-password-btn').onclick = function(){
<<<<<<< HEAD
     
     let textInput = document.querySelector('#hash-input').value;
     console.log(textInput)
     Object.entries(hashTable).forEach( entry => {
          if(entry[1] === textInput){
               alert(`password is ${entry[0]}`)
          }
          
     })
     
=======
     let textInput = document.querySelector('#hash-input').value;
     console.log(textInput)
     Object.entries(hashTable).forEach( hashMap => {
          if(textInput == hashMap[1])
               alert(`Cracked password is: "${hashMap[0]}"`)
     })
>>>>>>> main
}

let currentFileInput = '';

