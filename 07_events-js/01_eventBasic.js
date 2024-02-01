// go to one.html file for events

// two.html source js
const sayname = function(){
    console.log("Ashish Garg")
}

const changeText = function(){
    document.querySelector('h1').innerHTML = 'THis is a turtorial video'
}
setTimeout(sayname, 3000)
setTimeout(changeText, 5000)

document.getElementById('stop').addEventListener("click", function(){
        clearTimeout(changeText)
        console.log("stopped")
})