/**
 * Main JS file for project.
 */

import utilsFn from './utils.js';

/********** CONSTANTS **********/

const utils = utilsFn({});
const popover_thresh = 500; // The width of the map when tooltips turn to popovers

const isMobile = (window.innerWidth <= popover_thresh || document.body.clientWidth) <= popover_thresh || utils.isMobile();
const adaptive_ratio = utils.isMobile() ? 1.05 : 1.07; // Height/width ratio for adaptive map sizing

// Probably a better way than declaring this up here, but ...
let center = null;

mapboxgl.accessToken = 'pk.eyJ1IjoiY2pkZDNiIiwiYSI6ImNqZWJtZWVsYjBoYTAycm1raTltdnpvOWgifQ.aPWEg8C-5IJ0_7cXusY-1g';

/********** INITIALIZE MAP AND GEOCODER **********/

// Set adaptive sizing
// let mapHeight = window.innerWidth * adaptive_ratio;
// document.getElementById("map").style.height = mapHeight.toString() + "px";

// Init map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/cjdd3b/cjseugkrg0fvf1fqiox8ab1vk',
  center: [-97.508988, 35.167854],
  zoom: 4.07,
  pitch: 45, // pitch in degrees
  maxZoom: 8,
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