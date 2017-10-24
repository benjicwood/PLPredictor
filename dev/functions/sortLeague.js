export default function sortLeague (a, b) {
  if (b.points === a.points) {
    return b.gd - a.gd;
  }
  return b.points - a.points;
}
