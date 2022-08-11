mapboxgl.accessToken = 'pk.eyJ1IjoiemVpbnp6dSIsImEiOiJjbDZpajJoejEwMDRjM2pqdHk5OTR3c3NtIn0.K39ZfeJfxbHD6mq_lKxmjw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/raphaella-rose/cl6o2azxu000a15laarotakgd',
  zoom: 12,
  center: [-0.118092, 51.509865]
});


// INITIAL LOCATION centre OPTIONS:

// mapbox needs them to be in the order: longitude-latitude, else it will not center
// London, longitude - latitude [-0.118092, 51.509865]
// Paris, longitude - latitude [2.3522, 48.8566] 
// New York, longitude - latitude [-74.005974, 40.712776]
// Taipei, longitude - latitude [121.565414, 25.032969]

// STYLE OPTIONS:

// style: 'mapbox://styles/mapbox/dark-v10'  - DARK
// style: 'mapbox://styles/mapbox/light-v10' - LIGHT
// style: 'mapbox://styles/raphaella-rose/cl6o2azxu000a15laarotakgd' - Primary color for the land, secondary color for the water
// style: 'mapbox://styles/raphaella-rose/cl6o45ol9000z14p7paz9sv3y' - Grey for land, light blue for water
// style: 'mapbox://styles/raphaella-rose/cl6o4aqdn001014p7r8i493x2'

// Fetch stores from API
async function getShops() {
  const response = await fetch('/api/map');
  const received= await response.json()
  const shops = received.data.map(shop => {

  return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [shop.coordinates[0].$numberDecimal, shop.coordinates[1].$numberDecimal]
      },
      properties: {
        storeId: shop.name,
        hours: shop.openingHours,
        website: shop.website,
        address: shop.address,
      }
    }
  });

  loadMap(shops);
}

// Load map with stores
function loadMap(shops) {
  map.on('load', function() {
          // add markers to map
    for (const feature of shops) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            setInfo(feature)
          )
      )
      .addTo(map)
    }

    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: shops,
        
      }
    },
    layout: {
      'text-field': '{storeId}',
      'text-size': 10,
      'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      'text-offset': [0, 1.5],
      'text-anchor': 'top'
    },
    paint: {
      'text-color': '#182100',
    }
  });

});

}

const setInfo = (feature) => {
let formattedHours = "";
let formattedAddress = "";

feature.properties.hours.forEach(line => formattedHours += `${line} <br/>`);
feature.properties.address.forEach(line => formattedAddress += `${line} <br/>`);

const name = feature.properties.storeId;
const hours = formattedHours;
const website = feature.properties.website;
const address = formattedAddress;

return `
      <a class="bookshop-name" href=${website} target="_blank" >${name}</a>
      <br>
      <p class="bookshop-address mt-3">${address}</p>
      <br>
      <p class="times">${hours}</p>
      `
}



getShops();



// const showMap = (searched) => {
  
//   let buttonEl = document.querySelector('#toggle');
//   let rows = document.querySelectorAll('.shop-row');
//   let search = document.querySelector('.search-container');
 
//   if (buttonEl.innerHTML == "Map") {
//     document.querySelector('#map').classList.remove('hide-map')
//     map.resize()

//     rows.forEach(row => row.classList.add('hide-list'))
//     search.classList.add('hide-list')

//     buttonEl.innerHTML = "List"
//   } else if (buttonEl.innerHTML == "List") {
//     rows.forEach(row => row.classList.remove('hide-list'))
//     search.classList.remove('hide-list')

//     document.querySelector('#map').classList.add('hide-map')
    
//     buttonEl.innerHTML = "Map"
//   } else {
//     location.href = "/openbook";
//   }


// }

