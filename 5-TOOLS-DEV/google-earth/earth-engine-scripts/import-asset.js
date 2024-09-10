// Need to place this AFTER the DEM otherwise it'll get covered up

// Replace with your Asset ID
var assetId = 'projects/NAME/assets/ASSETNAME';
var featureCollection = ee.FeatureCollection(assetId);

// Print the feature collection to the Console
print('Feature Collection:', featureCollection);

// Define visualization parameters
var visParams = {
  color: 'red',
  pointSize: 5
};

// Add the feature collection to the map
Map.addLayer(featureCollection, visParams, 'my feature collection');

// Center the map on the asset
Map.centerObject(featureCollection);