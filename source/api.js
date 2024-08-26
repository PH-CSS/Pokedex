const innerList = document.querySelector(".innerListPoke");

function colorBG(typesPoke, innerCont) {
    console.log("aa");
    
    const bgGround = {
        normal:"#8F98A0",
        fire:"#FF9C55",
        water:"#4D90D4",
        grass:"#63BC5C",
        flying:"#90AADC",
        fighting:"#CF406A",
        poison:"#A969C7",
        electric:"#F3D23C",
        ground:"#DB7848",
        rock:"#C7B78A",
        psychic:"#FA7378",
        ice:"#74CFC0",
        bug:"#90C22D",
        ghost:"#536AAF",
        steel:"#5B8F9F",
        dragon:"#0A6EC4",
        dark:"#595463",
        fairy:"#ED8FE8",
    }
    
    let nomeAA = typesPoke[0].type.name;
    console.log(nomeAA);
    
    console.log(bgGround[nomeAA]);
    
    if (typesPoke.length === 1) {
        innerCont.style.backgroundColor = bgGround[nomeAA];
    }else{
        let Tiposarr = []
        for (let i = 0; i < typesPoke.length; i++) {
            Tiposarr.push(typesPoke[i].type.name)
            console.log(Tiposarr);
            
        }
        innerCont.style.background = `linear-gradient(80deg,  ${bgGround[Tiposarr[0]]} 5%, ${bgGround[Tiposarr[1]]} 100%)`;
    }
    
}

 function addContent(innerCont, i, nomePokemon, numpoke, typesPoke ) {
    console.log("aa");
    
    const content = document.createElement("div")
        content.classList.add("content");
        innerCont.appendChild(content)
        const namePOKE = document.createElement("h1");
        content.appendChild(namePOKE)
        namePOKE.innerHTML = `${nomePokemon}`
        const labelNumber = document.createElement("label")
        content.appendChild(labelNumber)
        labelNumber.innerText = `${numpoke}`
        const espace1 = document.createElement("br")
        content.appendChild(espace1)
        const espace2 = document.createElement("br")
        content.appendChild(espace2)
        const elementOne = document.createElement("div")
        elementOne.classList.add("pokeClass");
        elementOne.classList.add("elementOne");
        content.appendChild(elementOne);
        elementOne.innerText = `${typesPoke[0].type.name}`
        if (typesPoke.length == 2) {
            // se tiver mais de dois tipos
        const elementTwo = document.createElement("div")
        elementTwo.classList.add("pokeClass");
        elementTwo.classList.add("elementOne");
        content.appendChild(elementTwo)
        elementTwo.innerText = `${typesPoke[1].type.name}`
        }


        // const linhaEvol = document.createElement("div")
        // linhaEvol.classList.add("linhaEvol");
        // content.appendChild(linhaEvol)
        // conteúdos de info
}

 function addIMG(i, innerCont, sprities) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const image = document.createElement("img");
    image.setAttribute("src", sprities)
    // as imgs vão ser substiruidas dps
    containerDiv.appendChild(image)
    innerCont.appendChild(containerDiv)
}

async function selecaoAPIPokemon() {
    console.log('ola');
    
    const asyncroPoke = await fetch("https://pokeapi.co/api/v2/pokedex/1/").then((poke) => poke.json())
    const lista_de_pokemon = asyncroPoke.pokemon_entries;
    // criação de blocos
    let promises = [];

    for (let i = 1; i <= lista_de_pokemon.length; i++) {
        const listPokeStats = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((poke) => poke.json());
        promises.push(listPokeStats)
    }
    const resolved = await Promise.all(promises);
    
    console.log(resolved);
    
    for (let i = 0; i < resolved.length; i++) {
        let nomePokemon = lista_de_pokemon[i].pokemon_species.name
        let sprities = resolved[i].sprites.front_default;
        let typesPoke = resolved[i].types;


        let numbers = i + 1;
        if (numbers <= 10) {
            // number como comparação já que é o numero do pokemon
            numpoke = `N°000${numbers}`
            // numpoke é apenas a string que vai adicionar o numero do pokemon
            console.log(numpoke);
        } if (numbers >= 10 && numbers <= 100) {
            numpoke = `N°00${numbers}`
            console.log(numpoke);

        } if (numbers >= 100 && numbers <= 999) {
            numpoke = `N°0${numbers}`
            console.log(numpoke);

        }if(numbers >= 1000){
            numpoke = `N°${numbers}`
            console.log(numpoke);

        }
        
        const innerCont = document.createElement("div")
        innerCont.classList.add("innerCont");
        innerList.appendChild(innerCont)
        // conteúdo geral
        if (i % 2 == 0) {
            // se é impar (por enquanto) o conteúdo fica na esquerda e visse versa
            addIMG(i, innerCont, sprities)
            addContent(innerCont, i, nomePokemon, numpoke, typesPoke )
            colorBG(typesPoke, innerCont);
            
        }else{
            addContent(innerCont, i, nomePokemon, numpoke, typesPoke )
            addIMG(i, innerCont, sprities)
            colorBG(typesPoke, innerCont);

        }

    }
    
}
selecaoAPIPokemon()
