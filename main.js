var animeList = ["AOT","FullMetalAlchemist","Black Clover","MyHeroAcademia","DemonSlayer","Naruto","DeathNote","REzero","Princess Mononoke","SpiritedAway"];


for( let i=0; i <animeList.length;++i){
    const url = "https://api.jikan.moe/v3/search/anime?q="+animeList[i];
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
        console.log(json);
        var div = document.createElement("div");
        var div2 =document.createElement("div");
        var p = document.createElement ("p")
        var h = document.createElement("h1");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var img = document.createElement("img");
        h3.appendChild(document.createTextNode( "Rating: "+json.results[0].score));
        img.src = json.results[0].image_url;
        h.appendChild(document.createTextNode(json.results[0].title));
        p.appendChild(document.createTextNode("\n" + json.results[0].synopsis));
        h4.appendChild(document.createTextNode( "Media type: " +json.results[0].type));
        img.className ='picture';
        h3.className ='rating';
        p.className = 'synopsis';
        div2.className ='side'
        div2.appendChild(h);
        div2.appendChild(h3);
        div2.appendChild(h4);

        div.appendChild(div2);
        div.appendChild(p);
        div.appendChild(img);
        
        div.className='animes';
        document.getElementById("anime").appendChild(div);

    });

}

