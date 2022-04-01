
const pokemonimage = document.getElementById("js--pokemon--image");
let randomnumber = Math.floor(Math.random() * 250 + 1);
let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomnumber)
.then(function(response){
    console.log(response);
        return response.json();
    }
)
.then(function(realdata){
    pokemonimage.src = realdata.sprites.front_default;
});


const catchbutton = document.getElementById("js--catch--button");
const pokemontext = document.getElementById("js--pokemon--text");
let pokemongameplayed = false;
catchbutton.onclick = function(){
    if(pokemongameplayed === false){
    let catchnumber = Math.floor(Math.random() * 2);
    if(catchnumber === 0){
        pokemontext.innerText = "Pokemon Fled!"
    }
    else{
        pokemontext.innerText = "Pokemon Caught!"

    }
    pokemongameplayed = true;
}
}



   const narutoh2 = document.getElementById("js--naruto-h2");
   const narutop = document.getElementById("js--naruto-p");



let naruto = fetch("https://api.tvmaze.com/search/shows?q=naruto")
.then(function(response){
    console.log(response);
       return response.json();
    }
)
.then(function(realdata){
    console.log(realdata);
    narutoh2.innerHTML =  realdata[0].show.name; 
    narutop.innerHTML = realdata[0].show.summary;
});


const nametext = document.getElementById("js--name")
const inputfield = document.getElementById("js--input")

inputfield.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputfield.value;
        let age = fetch("https://api.agify.io?name=" + name )
                .then(function(response){
                    return response.json();
                })
                .then(function(echtedata){
                    inputfield.style.display = "none";
                    nametext.innerText = echtedata.age

                })
                


    }

}

let age = fetch("https://api.agify.io?name=michael")
                .then(function(response){
                    return response.json();
                })
                .then(function(jsondata){
                    console.log(jsondata)

                })
                



