let generateBtn = document.getElementById("generate-btn")
let firstPasswordEl = document.getElementById("password-first")
let secondPasswordEl = document.getElementById("password-second")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]



function generatePasswordOne() {
    for ( i = 0; i < 15; i++) {
        let passwordOne = Math.floor(Math.random() * characters.length)
        let passwordTwo = Math.floor(Math.random() * characters.length)
        firstPasswordEl.textContent += characters[passwordOne]
        secondPasswordEl.textContent += characters[passwordTwo]
    }    
}
