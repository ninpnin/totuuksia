// Shuffle the <p> elems on window loading
function shuffle(contatinerID) {
  var container = document.getElementById(contatinerID);
  var elementsArray = Array.prototype.slice.call(container.childNodes);
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

window.onload = function(e){ 
    console.log("window.onload");
    shuffle("truths");
}