var madLibs = function() {
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    var exclamation = document.getElementById("exclamation").value;
    var verb = document.getElementById("verb").value;
    
    storyDiv.innerHTML = name + " " + verb + " " + adjective + " " + noun + ", " + exclamation + "!";
}

