

const map = new maplibregl.Map({
container: 'map',
  style:
      'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [-73.9816, 40.7538],
    zoom: 12
});
 // add default point on map //
//  const marker = new maplibregl.Marker()
//  .setLngLat([-73.985503, 40.758959])
//  .addTo(map);   

    
    const df = [
      {
        "Name": "Agata & Valentina",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "1513 First Ave at 79th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Bagel",
        "Icon": "Bakery",
        "Link": "https://www.agatavalentina.com/",
        "Img": "bagels.jpeg",
        "Long": -73.952746,
        "Lat": 40.772563
      },
      {
        "Name": "Ben&#39;s Fast Food",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "245 West 46th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://bensfastfood.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.98618,
        "Lat": 40.758995
      },
      {
        "Name": "Birria Landia",
        "Borough": "Manhattan",
        "Neighborhood": "Upper West Side",
        "Address": "Amsterdam & W 70th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Mexican",
        "Icon": "Latin American",
        "Link": "https://birrialandia.com/",
        "Img": "birrialandia.jpg",
        "Long": -73.957533,
        "Lat": 40.811449
      },
      {
        "Name": "Bungalow",
        "Borough": "Manhattan",
        "Neighborhood": "East Village",
        "Address": "24 First Ave",
        "TypeEst": "Restaurant",
        "TypeFood": "Indian",
        "Icon": "Asian",
        "Link": "https://www.bungalowny.com/menu",
        "Img": "bungalow.png",
        "Long": -73.987955,
        "Lat": 40.723652
      },
      {
        "Name": "By The Way Bakery",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "1236 Lexington Avenue",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "http://www.btwBakery.com",
        "Img": "bagels.jpeg",
        "Long": -73.956871,
        "Lat": 40.777963
      },
      {
        "Name": "By The Way Bakery",
        "Borough": "Manhattan",
        "Neighborhood": "Upper West Side",
        "Address": "2440 Broadway",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "http://btwBakery.com",
        "Img": "bagels.jpeg",
        "Long": -73.974189,
        "Lat": 40.790928
      },
      {
        "Name": "Crepe Master",
        "Borough": "Manhattan",
        "Neighborhood": "Lower East Side",
        "Address": "123 East 7th Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "http://www.crepemasternyc.com",
        "Img": "crepe.jpg",
        "Long": -73.984195,
        "Lat": 40.726434
      },
      {
        "Name": "D&ugrave;ND&uacute;",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "140 E 41st",
        "TypeEst": "Fast Casual",
        "TypeFood": "Nigerian",
        "Icon": "African",
        "Link": "https://eatdundu.com/",
        "Img": "dundu.jpg",
        "Long": -73.975788,
        "Lat": 40.750348
      },
      {
        "Name": "Doughnut Plant",
        "Borough": "Manhattan",
        "Neighborhood": "Lower East Side",
        "Address": "379 Grand St",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Doughnut",
        "Icon": "Bakery",
        "Link": "http://www.doughnutplant.com",
        "Img": "donut.jpg",
        "Long": -73.988555,
        "Lat": 40.71634
      },
      {
        "Name": "Doughnut Plant",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "89 East 42nd Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Doughnut",
        "Icon": "Bakery",
        "Link": "http://www.doughnutplant.com",
        "Img": "donut.jpg",
        "Long": -73.977412,
        "Lat": 40.75236
      },
      {
        "Name": "GLACE by NoGlu",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "1268 Madison Avenue",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "https://noglu.fr/en/new-york/Bakery",
        "Img": "glace.jpg",
        "Long": -73.956778,
        "Lat": 40.783908
      },
      {
        "Name": "Kati Shop",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "162 East 55th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Thai",
        "Icon": "Asian",
        "Link": "https://www.katishopnyc.com/",
        "Img": "kati.jpg",
        "Long": -73.96883,
        "Lat": 40.75899
      },
      {
        "Name": "Kati Shop",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "104 West 37th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Thai",
        "Icon": "Asian",
        "Link": "https://www.katishopnyc.com/",
        "Img": "kati.jpg",
        "Long": -73.986948,
        "Lat": 40.751824
      },
      {
        "Name": "Kimbap Lab",
        "Borough": "Manhattan",
        "Neighborhood": "Chelsea",
        "Address": "75 9th Ave",
        "TypeEst": "Fast Casual",
        "TypeFood": "Korean",
        "Icon": "Asian",
        "Link": "https://www.kimbaplab.com/",
        "Img": "korean.jpg",
        "Long": -74.004664,
        "Lat": 40.742222
      },
      {
        "Name": "Le Botaniste",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "833 Lexington Avenue",
        "TypeEst": "Restaurant",
        "TypeFood": "Salads",
        "Icon": "Salads",
        "Link": "https://lebotaniste.us/",
        "Img": "littlebeet.jpeg",
        "Long": -73.96596,
        "Lat": 40.765006
      },
      {
        "Name": "Lilli and Loo",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "785 Lexington Av",
        "TypeEst": "Restaurant",
        "TypeFood": "Chinese",
        "Icon": "Asian",
        "Link": "https://lilliandloonyc.com/",
        "Img": "lilliandloo.jpg",
        "Long": -73.967029,
        "Lat": 40.76357
      },
      {
        "Name": "Mission Ceviche",
        "Borough": "Manhattan",
        "Neighborhood": "Union Square",
        "Address": "7 East 17th street",
        "TypeEst": "Restaurant",
        "TypeFood": "Peruvian",
        "Icon": "Latin American",
        "Link": "https://missionceviche.com/",
        "Img": "birrialandia.jpg",
        "Long": -73.991438,
        "Lat": 40.737694
      },
      {
        "Name": "Mission Ceviche",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "1400 2nd Avenue",
        "TypeEst": "Restaurant",
        "TypeFood": "Peruvian",
        "Icon": "Latin American",
        "Link": "https://missionceviche.com/",
        "Img": "birrialandia.jpg",
        "Long": -73.957791,
        "Lat": 40.769271
      },
      {
        "Name": "Modern Bread and Bagel",
        "Borough": "Manhattan",
        "Neighborhood": "Chelsea",
        "Address": "139 Wes 14th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Bagel",
        "Icon": "Bakery",
        "Link": "https://www.modernbreadandbagel.com/",
        "Img": "bagels.jpeg",
        "Long": -73.998521,
        "Lat": 40.738239
      },
      {
        "Name": "Modern Bread and Bagel",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "53rd and Lexington Ave",
        "TypeEst": "Fast Casual",
        "TypeFood": "Bagel",
        "Icon": "Bakery",
        "Link": "https://www.modernbreadandbagel.com/",
        "Img": "bagels.jpeg",
        "Long": -73.983616,
        "Lat": 40.763636
      },
      {
        "Name": "Modern Bread and Bagel",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "Penn Station",
        "TypeEst": "Fast Casual",
        "TypeFood": "Bagel",
        "Icon": "Bakery",
        "Link": "https://www.modernbreadandbagel.com/",
        "Img": "bagels.jpeg",
        "Long": -73.993584,
        "Lat": 40.75058
      },
      {
        "Name": "Modern Bread and Bagel",
        "Borough": "Manhattan",
        "Neighborhood": "Upper West Side",
        "Address": "472 Columbus Av.",
        "TypeEst": "Fast Casual",
        "TypeFood": "Bagel",
        "Icon": "Bakery",
        "Link": "https://www.modernbreadandbagel.com/",
        "Img": "bagels.jpeg",
        "Long": -73.973924,
        "Lat": 40.78438
      },
      {
        "Name": "NADAS NYC",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "146 Greenwich Av",
        "TypeEst": "Fast Casual",
        "TypeFood": "Colombian",
        "Icon": "Latin American",
        "Link": "https://www.nadas.nyc/",
        "Img": "nadas.jpg",
        "Long": -74.00198,
        "Lat": 40.738379
      },
      {
        "Name": "Nami Nori",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "33 Carmine Street",
        "TypeEst": "Restaurant",
        "TypeFood": "Sushi",
        "Icon": "Asian",
        "Link": "https://naminori.nyc/",
        "Img": "naminori.jpg",
        "Long": -74.003256,
        "Lat": 40.730198
      },
      {
        "Name": "NoGlu NY",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "1260 Madison Avenue",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Cafe",
        "Icon": "Bakery",
        "Link": "https://www.noglu.nyc/",
        "Img": "bagels.jpeg",
        "Long": -73.957008,
        "Lat": 40.783586
      },
      {
        "Name": "Palmita",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "245 West 46th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.eatpalmita.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.98618,
        "Lat": 40.758995
      },
      {
        "Name": "PoshPop Bakeshop",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "192 Bleecker Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "https://www.poshpopbakeshop.com/",
        "Img": "bagels.jpeg",
        "Long": -74.001522,
        "Lat": 40.729223
      },
      {
        "Name": "PoshPop Bakeshop",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "315 West 39th Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "https://www.poshpopbakeshop.com/",
        "Img": "bagels.jpeg",
        "Long": -73.992143,
        "Lat": 40.755846
      },
      {
        "Name": "Postcard",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "31-33 Carmine Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "http://www.postcardBakery.co",
        "Img": "bagels.jpeg",
        "Long": -74.003256,
        "Lat": 40.730198
      },
      {
        "Name": "Rawsome Treats",
        "Borough": "Manhattan",
        "Neighborhood": "Lower East Side",
        "Address": "158 Orchard Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "http://www.rawsometreats.co",
        "Img": "bagels.jpeg",
        "Long": -73.988673,
        "Lat": 40.720952
      },
      {
        "Name": "Risotteria Melotti",
        "Borough": "Manhattan",
        "Neighborhood": "East Village",
        "Address": "309 East 5th st",
        "TypeEst": "Restaurant",
        "TypeFood": "Italian",
        "Icon": "Italian",
        "Link": "https://www.risotteriamelottinyc.com/",
        "Img": "risotto.jpg",
        "Long": -73.988379,
        "Lat": 40.726638
      },
      {
        "Name": "Senza Gluten",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "206 Sullivan Street",
        "TypeEst": "Restaurant",
        "TypeFood": "Italian",
        "Icon": "Italian",
        "Link": "https://senzaglutennyc.com/",
        "Img": "italian.jpg",
        "Long": -74.000369,
        "Lat": 40.729019
      },
      {
        "Name": "Senza Gluten by Jemiko",
        "Borough": "Manhattan",
        "Neighborhood": "Hell's Kitchen",
        "Address": "626 10th Avenue",
        "TypeEst": "Restaurant",
        "TypeFood": "Italian",
        "Icon": "Italian",
        "Link": "https://senzaglutenbyjemiko.com/",
        "Img": "italian.jpg",
        "Long": -73.994185,
        "Lat": 40.761081
      },
      {
        "Name": "Senza Gluten Cafe & Bakery",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "171 Sullivan Street",
        "TypeEst": "Bakeries and Desserts",
        "TypeFood": "Desserts",
        "Icon": "Bakery",
        "Link": "https://senzaglutenbyjemiko.com/",
        "Img": "bagels.jpeg",
        "Long": -74.000968,
        "Lat": 40.728027
      },
      {
        "Name": "Spring Burgers and Fries",
        "Borough": "Manhattan",
        "Neighborhood": "Financial District",
        "Address": "74 Pearl Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Burgers",
        "Icon": "American",
        "Link": "https://www.instagram.com/eatspringy/",
        "Img": "burger.jpeg",
        "Long": -74.010464,
        "Lat": 40.703738
      },
      {
        "Name": "Springbone",
        "Borough": "Manhattan",
        "Neighborhood": "Financial District",
        "Address": "225 Brookfield Place",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "http://springbone.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.996328,
        "Lat": 40.750422
      },
      {
        "Name": "Springbone",
        "Borough": "Manhattan",
        "Neighborhood": "Financial District",
        "Address": "74 Pearl Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "http://springbone.com/",
        "Img": "littlebeet.jpeg",
        "Long": -74.010464,
        "Lat": 40.703738
      },
      {
        "Name": "Springbone",
        "Borough": "Manhattan",
        "Neighborhood": "Flatiron",
        "Address": "25 East 51 st St",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "http://springbone.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.975545,
        "Lat": 40.758669
      },
      {
        "Name": "Springbone",
        "Borough": "Manhattan",
        "Neighborhood": "Flatiron",
        "Address": "38 East 23rd St",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "http://springbone.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.98736,
        "Lat": 40.740442
      },
      {
        "Name": "Springbone",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "90 West 3rd Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "http://springbone.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.999272,
        "Lat": 40.729913
      },
      {
        "Name": "Springbone",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "104 West 45th St",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "http://springbone.com/",
        "Img": "littlebeet.jpeg",
        "Long": -73.982872,
        "Lat": 40.756689
      },
      {
        "Name": "Sushi Counter",
        "Borough": "Manhattan",
        "Neighborhood": "East Village",
        "Address": "523 East 12th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Sushi",
        "Icon": "Asian",
        "Link": "https://sushicounternyc.com/",
        "Img": "NamiNori.jpg",
        "Long": -73.980157,
        "Lat": 40.728704
      },
      {
        "Name": "Sushi Counter",
        "Borough": "Manhattan",
        "Neighborhood": "Greenwich Village",
        "Address": "119 Christopher Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Sushi",
        "Icon": "Asian",
        "Link": "https://sushicounternyc.com/",
        "Img": "NamiNori.jpg",
        "Long": -74.005585,
        "Lat": 40.733271
      },
      {
        "Name": "TAP NYC",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "685 3rd Av",
        "TypeEst": "Fast Casual",
        "TypeFood": "Brazilian",
        "Icon": "Latin American",
        "Link": "https://www.eattap.co/",
        "Img": "birrialandia.jpg",
        "Long": -73.973399,
        "Lat": 40.751898
      },
      {
        "Name": "TAP NYC",
        "Borough": "Manhattan",
        "Neighborhood": "Upper West Side",
        "Address": "267 Columbus Avenue bt 72 and 73rd",
        "TypeEst": "Fast Casual",
        "TypeFood": "Brazilian",
        "Icon": "Latin American",
        "Link": "https://www.eattap.co/",
        "Img": "birrialandia.jpg",
        "Long": -73.978397,
        "Lat": 40.777648
      },
      {
        "Name": "The Little Beet",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "135 West 50th St",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.thelittlebeet.com/locations",
        "Img": "littlebeet.jpeg",
        "Long": -73.982409,
        "Lat": 40.760841
      },
      {
        "Name": "The Little Beet",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "125 Park Avenue",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.thelittlebeet.com/locations",
        "Img": "littlebeet.jpeg",
        "Long": -73.977677,
        "Lat": 40.75168
      },
      {
        "Name": "The Little Beet",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "111 W 40th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.thelittlebeet.com/locations",
        "Img": "littlebeet.jpeg",
        "Long": -73.985458,
        "Lat": 40.753837
      },
      {
        "Name": "The Little Beet",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "320 Park Av",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.thelittlebeet.com/locations",
        "Img": "littlebeet.jpeg",
        "Long": -73.973992,
        "Lat": 40.757595
      },
      {
        "Name": "The Little Beet",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "1140 Broadway",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.thelittlebeet.com/locations",
        "Img": "littlebeet.jpeg",
        "Long": -73.988827,
        "Lat": 40.743964
      },
      {
        "Name": "The Little Beet",
        "Borough": "Manhattan",
        "Neighborhood": "Upper East Side",
        "Address": "1291 1st Avenue",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://www.thelittlebeet.com/locations",
        "Img": "littlebeet.jpeg",
        "Long": -73.957382,
        "Lat": 40.766219
      },
      {
        "Name": "Thyme and Tonic",
        "Borough": "Manhattan",
        "Neighborhood": "Upper West Side",
        "Address": "474 Columbus Avenue",
        "TypeEst": "Restaurant",
        "TypeFood": "American",
        "Icon": "American",
        "Link": "https://www.thymeandtonic.com/",
        "Img": "burger.jpeg",
        "Long": -73.973879,
        "Lat": 40.784443
      },
      {
        "Name": "TLK-Tigerlilly Kitchen",
        "Borough": "Manhattan",
        "Neighborhood": "East Village",
        "Address": "125 Canal St",
        "TypeEst": "Restaurant",
        "TypeFood": "Asian",
        "Icon": "Asian",
        "Link": "https://www.tlk-nyc.com/",
        "Img": "lilliandloo.jpg",
        "Long": -73.995226,
        "Lat": 40.716026
      },
      {
        "Name": "Twenty one Grains",
        "Borough": "Manhattan",
        "Neighborhood": "Financial District",
        "Address": "100 Pearl St",
        "TypeEst": "Fast Casual",
        "TypeFood": "Cafe",
        "Icon": "Bakery",
        "Link": "https://twentyonegrains.com",
        "Img": "bagels.jpeg",
        "Long": -74.009795,
        "Lat": 40.704265
      },
      {
        "Name": "Twenty one Grains",
        "Borough": "Manhattan",
        "Neighborhood": "Hell's Kitchen",
        "Address": "1152 W 52nd Strett",
        "TypeEst": "Fast Casual",
        "TypeFood": "Cafe",
        "Icon": "Bakery",
        "Link": "https://twentyonegrains.com",
        "Img": "bagels.jpeg",
        "Long": -73.983891,
        "Lat": 40.763256
      },
      {
        "Name": "Umami Express",
        "Borough": "Manhattan",
        "Neighborhood": "Midtown",
        "Address": "245 West 46th Street",
        "TypeEst": "Fast Casual",
        "TypeFood": "Salads and Bowls",
        "Icon": "Salads",
        "Link": "https://Umamiexpress.co",
        "Img": "littlebeet.jpeg",
        "Long": -73.98618,
        "Lat": 40.758995
      },
      {
        "Name": "Wild",
        "Borough": "Manhattan",
        "Neighborhood": "West Village",
        "Address": "535 Hudson St",
        "TypeEst": "Restaurant",
        "TypeFood": "Italian",
        "Icon": "Italian",
        "Link": "https://eatdrinkwild.com/",
        "Img": "italian.jpg",
        "Long": -74.006343,
        "Lat": 40.734571
      }
     ]
       
     let container = document.getElementById('container');

     function makeCards(name, nbh, address, food, link, img, icon, long, lat) {
         let elementDiv = document.createElement('div');
         elementDiv.classList.add('cards');
         elementDiv.style.backgroundImage = `url('../img/${img}')`;
     
         let cardText = `
             <h2><b>${name}</b></h2>
             <p><b>${nbh}</b></p>
             <p>${address}</p>
             <p>${food}</p>
             <p><a href="${link}" target="_blank">Website</a></p>
         `;
     
         // Add marker
         const markerEl = document.createElement('div');
         markerEl.className = 'marker';
         markerEl.dataset.nbh = nbh;
         markerEl.dataset.icon = icon;
     
         const marker = new maplibregl.Marker(markerEl)
             .setLngLat([long, lat])
             .setPopup(
                 new maplibregl.Popup({ offset: 10 })
                 .setHTML(`<h2>${name}</h2><p>${address}</p>`)
             )
             .addTo(map);
          
          
         mapMarkers.push({ marker, nbh, icon });
     
         elementDiv.innerHTML = cardText;
         elementDiv.setAttribute('data-nbh', nbh);
         elementDiv.setAttribute('data-icon', icon);
         container.append(elementDiv);
     }
     
     const mapMarkers = [];
     
     df.forEach(c => {
         makeCards(c.Name, c.Neighborhood, c.Address, c.TypeFood, c.Link, c.Img, c.Icon, c.Long, c.Lat);
     });
     
     let currentNBHFilter = 'all-nbh';
     let currentFoodFilter = 'Anything';
   
   function filterCards() {
      const cards = document.querySelectorAll('.cards');
      const noResults = document.getElementById('no-results');
      let visibleCount = 0;

      cards.forEach(card => {
         const matchesNeighborhood = currentNBHFilter === 'all-nbh' || card.getAttribute('data-nbh').trim() === currentNBHFilter;
         const matchesIcon = currentFoodFilter === 'Anything' || card.getAttribute('data-icon').trim() === currentFoodFilter;
         const shouldShow = matchesNeighborhood && matchesIcon;
         card.style.display = shouldShow ? 'block' : 'none';
         if(shouldShow){
           visibleCount++;
         }
      });
      if(visibleCount === 0){
       noResults.style.display = 'block';
      } else {
       noResults.style.display = 'none';
      }
      applyFilters();
  }  
  
     
     function applyFilters() {
         mapMarkers.forEach(({ marker, nbh, icon }) => {
             const matchesNeighborhood = currentNBHFilter === 'all-nbh' || nbh.trim() === currentNBHFilter;
             const matchesIcon = currentFoodFilter === 'Anything' || icon.trim() === currentFoodFilter;
             marker.getElement().style.display = (matchesNeighborhood && matchesIcon) ? '' : 'none';
         });
         console.log("Filtering map markers by:", currentNBHFilter, currentFoodFilter);
     }
     
     function filternbh(event) {
         event.preventDefault();
         const neighborhood = document.getElementById('neighborhood').value;
         currentNBHFilter = neighborhood === "Show All" ? 'all-nbh' : neighborhood;
         filterCards();
     }
     function showAllPlaces () {
      allmMarkers.forEach(marker=> marker.remove());
      allMarkers = [];
      const marker = new maplibregl.Marker()
      .setLngLat()
      .addTo(map);
      allMarkers.push(marker);
     }
     document.getElementById('neighborhood_form').addEventListener('submit', filternbh);
    //  document.getElementById('anything-button').addEventListener('click', () =>{showAllPlaces();})
     
     document.querySelectorAll('.button-container button').forEach(button => {
         button.addEventListener('click', function () {
             currentFoodFilter = button.getAttribute('data-value');
             filterCards();
         });
     });
     
     // Dropdown UX
     let dropdown = document.querySelector('.dropdown');
     dropdown.addEventListener('mouseleave', function () {
         this.classList.remove('hover');
     });
     dropdown.addEventListener('click', function () {
         this.classList.add('clicked');
     });
     