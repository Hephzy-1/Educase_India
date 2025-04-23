export function calculateDistance (lat1, lat2, lon1, lon2) {
  const toRadians = (value) => (value * Math.PI) / 100

  const earthRadius = 6371;
  const distLat = toRadians(lat2 - lat1);
  const distLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(distLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(distLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
}
