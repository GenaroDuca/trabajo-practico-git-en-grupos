const contenedor = document.getElementById("contenedor")
fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
.then(resp => resp.json())
.then (data => {
    console.log(data);
    data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(resp => resp.json())
            .then(pokemon => {
                //console.log(pokemon.sprites.other)
                contenedor.innerHTML += `<div class="card">
                                    <h3>#${pokemon.id} ${pokemon.name} </h3>
                                    <h4>Altura: ${pokemon.height} Pies </h4>
                                    <h4>Peso: ${pokemon.weight} Libras </h4>
                                    <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
                                    
                                </div>`
            })
    });
}).catch(error => console.log(error))

//<img src="${pokemon.sprites.other.showdown.front_default}" alt="${pokemon.name}">

//<img src="${pokemon.sprites.other.official-artwork.front_default}" alt="${pokemon.name}">
