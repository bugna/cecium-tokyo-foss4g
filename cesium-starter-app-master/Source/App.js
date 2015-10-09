var viewer = new Cesium.Viewer('cesiumContainer');

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});

//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('http://bugna.github.io/cecium-tokyo-foss4g/cesium-starter-app-master/Source/tokyo_foss4g.kml'));

