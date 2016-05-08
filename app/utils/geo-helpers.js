const DEGREE_TO_RADIAN = 0.01745327;
const RADIAN_TO_DEGREES = 57.2957795;
// radius of earth in km
const R = 6371;
const PI = 3.14159265359;

// Equirectangular approximation good enough http://www.movable-type.co.uk/scripts/latlong.html
// returns meters
export function distance(lat1, lng1, lat2, lng2) {
  let φ1 = lat1 * DEGREE_TO_RADIAN;
  let λ1 = lng1 * DEGREE_TO_RADIAN;
  let φ2 = lat2 * DEGREE_TO_RADIAN;
  let λ2 = lng2 * DEGREE_TO_RADIAN;
  let x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
  let y = (φ2 - φ1);
  let d = Math.sqrt(x * x + y * y) * R * 1000;
  return d;
};