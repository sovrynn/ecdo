// Source: https://developers.google.com/earth-engine/apidocs/ee-featurecollection-style

// Define some example points with coordinates
var points = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([-122.292, 37.901]), {name: 'Point A'}),
  ee.Feature(ee.Geometry.Point([-122.295, 37.904]), {name: 'Point B'}),
  ee.Feature(ee.Geometry.Point([-122.300, 37.907]), {name: 'Point C'})
]);

// Print the points to the Console
print('Points:', points);

var pVis = points.style({
  color: 'red',
  pointSize: 6,
});

// Add the points to the map
Map.addLayer(pVis, null, 'My Inline Points');