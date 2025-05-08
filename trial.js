maptilersdk.config.apiKey = 'eppeRtADpgbcNzKDoHlF';
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element in which the SDK will render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [-73.9816, 40.7538], // starting position [lng, lat]
  zoom: 12 // starting zoom
});    
    
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
        "Coordinates": "[40.772563, -73.952746]"
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
        "Coordinates": "[40.758959, -73.985503]"
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
        "Coordinates": "[40.777303, -73.982582]"
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
        "Coordinates": "[40.777963, -73.956871]"
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
        "Coordinates": "[40.790928, -73.974189]"
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
        "Coordinates": "[40.726434, -73.984195]"
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
        "Coordinates": "[40.71634, -73.988555]"
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
        "Coordinates": "[40.75236, -73.977412]"
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
        "Coordinates": "[40.750348, -73.975788]"
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
        "Coordinates": "[40.783908, -73.956778]"
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
        "Coordinates": "[40.75899, -73.96883]"
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
        "Coordinates": "[40.751824, -73.986948]"
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
        "Coordinates": "[40.742222, -74.004664]"
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
        "Coordinates": "[40.765006, -73.96596]"
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
        "Coordinates": "[40.738239, -73.998521]"
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
        "Coordinates": "[40.758373, -73.970993]"
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
        "Coordinates": "[40.702627, -73.958142]"
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
        "Coordinates": "[40.78438, -73.973924]"
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
        "Coordinates": "[40.738379, -74.00198]"
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
        "Coordinates": "[40.730198, -74.003256]"
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
        "Coordinates": "[40.783586, -73.957008]"
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
        "Coordinates": "[40.758959, -73.985503]"
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
        "Coordinates": "[40.729223, -74.001522]"
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
        "Coordinates": "[40.755846, -73.992143]"
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
        "Coordinates": "[40.730198, -74.003256]"
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
        "Coordinates": "[40.720952, -73.988673]"
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
        "Coordinates": "[40.726638, -73.988379]"
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
        "Coordinates": "[40.729019, -74.000369]"
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
        "Coordinates": "[40.761081, -73.994185]"
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
        "Coordinates": "[40.728027, -74.000968]"
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
        "Coordinates": "[40.703738, -74.010464]"
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
        "Coordinates": "[40.757804, -73.679653]"
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
        "Coordinates": "[40.703738, -74.010464]"
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
        "Coordinates": "[40.758669, -73.975545]"
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
        "Coordinates": "[40.740442, -73.98736]"
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
        "Coordinates": "[40.729913, -73.999272]"
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
        "Coordinates": "[40.756689, -73.982872]"
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
        "Coordinates": "[40.728704, -73.980157]"
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
        "Coordinates": "[40.733271, -74.005585]"
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
        "Coordinates": "[40.751898, -73.973399]"
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
        "Coordinates": "[40.777648, -73.978397]"
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
        "Coordinates": "[40.760841, -73.982409]"
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
        "Coordinates": "[40.75168, -73.977677]"
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
        "Coordinates": "[40.753837, -73.985458]"
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
        "Coordinates": "[40.757595, -73.973992]"
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
        "Coordinates": "[40.743964, -73.988827]"
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
        "Coordinates": "[40.766219, -73.957382]"
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
        "Coordinates": "[40.784443, -73.973879]"
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
        "Coordinates": "[40.704265, -74.009795]"
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
        "Coordinates": "[40.635138, -73.997057]"
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
        "Coordinates": "[40.758959, -73.985503]"
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
        "Coordinates": "[40.723652, -73.987955]"
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
        "Coordinates": "[40.737694, -73.991438]"
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
        "Coordinates": "[40.769271, -73.957791]"
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
        "Coordinates": "[40.716026, -73.995226]"
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
        "Coordinates": "[40.734571, -74.006343]"
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
        "Coordinates": "[40.76357, -73.967029]"
      }
     ]
       
           let container = document.getElementById('container');
       
           function makeCards(name, nbh, address, food, link, img, icon) {
               
               let elementDiv = document.createElement('div');
       
               elementDiv.classList.add('cards')
               elementDiv.style.backgroundImage = `url('../img/${img}')`;
               
               let name_txt = `<b>${name}</b>`;
               
               let nbh_txt = `<b>${nbh}</b>`;
               
               let address_txt = `${address}`;
       
               let food_txt = `${food}`;
       
               let link_txt = `<a href = "${link}" target = "_blank">Website</a>`;
       
               let cardText = `
               <h2>${name_txt}</h2>
               <p>${nbh_txt}</p>
               <p>${address_txt}</p>
               <p>${food_txt}</p>
               <p>${link_txt}</p>
               `;
       
               elementDiv.innerHTML = cardText;
       
               // let image = <img src="hurricane_damage.jpg">
       
               elementDiv.setAttribute('data-nbh', nbh);
               elementDiv.setAttribute('data-icon', icon);
           
               container.append(elementDiv);
               }
           
       
           df.forEach(function(c){
               makeCards(c.Name, c.Neighborhood, c.Address, c.TypeFood, c.Link, c.Img, c.Icon);
           });
         
         // let dropdown = document.querySelector('.dropdown');
           let allButtons = document.querySelectorAll('button');
           let cards = document.querySelectorAll('.cards');
         // let currentNBHFilter = 'Show All';
           let currentNBHFilter = 'all-nbh';
           let currentFoodFilter = 'all-icon';
       
       // filter function
         function filterCards() {
           cards = document.querySelectorAll('.cards'); // refresh list
           cards.forEach(card => {
             const matchesNeighborhood = currentNBHFilter === 'all-nbh' || card.getAttribute('data-nbh').trim() === currentNBHFilter;
             const matchesIcon = currentFoodFilter === 'all-icon' || card.getAttribute('data-icon').trim() === currentFoodFilter;
             card.style.display = (matchesNeighborhood && matchesIcon) ? 'block' : 'none';
           });
         }
       
       // neighborhood filter (dropdown)
       document.getElementById('neighborhood_form').addEventListener('submit', 
        function filternbh(event) {
            event.preventDefault();
            const neighborhood = document.getElementById('neighborhood').value;
            currentNBHFilter = neighborhood === "Show All" ? 'all-nbh' : neighborhood; 
            filterCards();
            const container = document.getElementById("container");
            container.style.display = "block";
        });
    //    const selectElement = document.getElementById('neighborhood');
    //         selectElement.addEventListener('change', function () {
    //         currentNBHFilter = this.getAttribute('value') === "Show All" ? 'all-nbh' : this.getAttribute('value');
    //         filterCards();
    //      });
       
       // food type filter (buttons)
       document.querySelectorAll('.button-container button').forEach(button => {
         button.addEventListener('click', function () {
           currentFoodFilter = this.getAttribute('data-value') === "Anything!" ? 'all-icon' : this.getAttribute('data-value');
           filterCards();
         });
       });
    
       
         let dropdown = document.querySelector('.dropdown');
         dropdown.addEventListener('mouseleave', function() {
           this.classList.remove('hover');
         });
         dropdown.addEventListener('click', function() {
           this.classList.add('clicked');
         });
                  
         ;