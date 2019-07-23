// access storage in arbitrary nests
function anyStorage(nest, source, name) {
  if (source == nest.name) return storage(nest, name);
  return routeRequest(nest, source, 'storage', name);
}

async function locateScalpel(nest) {
  let callingNest = nest.name;
  for (;;) {
    const searchedNest = await anyStorage(nest, callingNest, 'scalpel');
    if (callingNest === searchedNest) {
      return callingNest;
    }
    // naming is a bit off
    callingNest = searchedNest;
  }
}

function locateScalpel2(nest) {
  // Your code here.
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
