/**
 * Main JS file for project.
 */

import utilsFn from './utils.js';

/********** CONSTANTS **********/

const utils = utilsFn({});
const mobile_thresh = 500; // The width of the map when tooltips turn to popovers

const isMobile = (window.innerWidth <= mobile_thresh || document.body.clientWidth) <= mobile_thresh || utils.isMobile();
const adaptive_ratio = utils.isMobile() ? 0.49 : 0.49; // Height/width ratio for adaptive map sizing

mapboxgl.accessToken = 'pk.eyJ1IjoiY2pkZDNiIiwiYSI6ImNqZWJtZWVsYjBoYTAycm1raTltdnpvOWgifQ.aPWEg8C-5IJ0_7cXusY-1g';

/********** INITIALIZE MAP AND GEOCODER **********/

// Set adaptive sizing
let mapHeight = window.innerWidth * adaptive_ratio;

console.log(mapHeight);
document.getElementById("map").style.height = mapHeight.toString() + "px";

// Init map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/cjdd3b/cjseugkrg0fvf1fqiox8ab1vk',
  center: [-97.508988, 35.167854],
  pitch: 35, // pitch in degrees
  maxZoom: 6,
  maxBounds: [-124.848974, 24.396308, -66.885444, 49.384358],
  scrollZoom: false
});

/********** MAP BEHAVIORS **********/
map.addControl(new mapboxgl.NavigationControl({ showCompass: false }));

if (utils.isMobile()) {
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
} else {
}