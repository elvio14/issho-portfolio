<script setup>
import { onMounted, ref } from 'vue'
import { Loader } from "@googlemaps/js-api-loader"

// const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY

// const placeID = 'ChIJYzVmfebL1IkRK-6vJhXYGX8'

// const map = ref(null)

// const mapStyles = [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dae8dd"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#523735"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#f5f1e6"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#c9b2a6"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#dcd2be"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#ae9e90"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape.natural",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#91b89a"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#93817c"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#6b9675"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#447530"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f5f1e6"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#fdfcf8"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e6d670"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#e9bc62"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e6d670"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#e6d670"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#806b63"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#8f7d77"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#ebe3cd"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#b9d3c2"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#92998d"
//       }
//     ]
//   }
// ]

// onMounted(async () => {
//     try {
//         const loader = new Loader({
//             apiKey: apiKey, //standard vite env implementation
//             version: "weekly",
//             libraries: ["places"]
//         });

//         const google = await loader.load()

//         map.value = new google.maps.Map(document.getElementById('map'), {
//             center: { lat: 43.6654507343196, lng: -79.35220150204064 },
//             zoom: 16,
//             disableDefaultUI: true,
//             styles: mapStyles
//         });

//         const marker = new google.maps.Marker({
//             position: { lat: 43.6654507343196, lng: -79.35220150204064 },
//             map: map.value,
//             title: "Issho Bakery, 583 Gerrard St E, Toronto, ON M4M 1Y2"
//         })
        
//         marker.addListener("click", ()=>{
            
//             const url = `https://www.google.com/maps/place/?q=place_id:${placeID}`

//             window.open(url, '_blank')
//         })
//     } catch(error) {
//         console.error(error)
//     }

// })


</script>
<template>
<div  id="map" >
  <iframe id="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.170675882192!2d-79.35481092399704!3d43.665420071101586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cbe67d663563%3A0x7f19d81526afee2b!2sIssho%20Bakery!5e0!3m2!1sen!2sca!4v1734297124204!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</template>
<style>
#mapFrame {
  border-radius: 1rem;
}
#map{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

@media (max-width:600px){
  #map{
    margin-top: 2rem;
    margin-bottom: -4rem;
  }
  #mapFrame {
    height: 40vh;
  }
}
</style>