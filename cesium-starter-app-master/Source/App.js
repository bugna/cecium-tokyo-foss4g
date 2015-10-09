var viewer = new Cesium.Viewer('cesiumContainer');

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.620395,35.321708, 15000.0)});

//kml読み込み
//viewer.dataSources.add(Cesium.KmlDataSource.load('http://bugna.github.io/cecium-tokyo-foss4g/cesium-starter-app-master/Source/tokyo_foss4g.kml'));

//自宅
//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(139.598430,35.323275),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});

//福浦岸壁 35.337381,139.647418
//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(139.656833,35.350958),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});

//シーパラ 
//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(139.647418,35.337381),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});

//ルート1を追加 車で釣り
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([139.598430,35.323275,
                                                        139.656833,35.350958]),
        width : 5,
        material : Cesium.Color.GREEN
    }
});

//ルート2を追加　一旦帰る
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([139.656833,35.350958,
                                                        139.598430,35.323275]),
        width : 5,
        material : Cesium.Color.GREEN
    }
});

//ルート3を追加　シーパラへ自転車で
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([139.598430,35.323275,
                                                        139.647418,35.337381]),
        width : 5,
        material : Cesium.Color.YELLOW
    }
});

//ルート4を追加　シーパラへ自転車で
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([139.598430,35.323275,
                                                        139.620172,35.331114]),
        width : 5,
        material : Cesium.Color.RED
    }
});

//ルート5を追加　八景からシーパラ
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([139.620172,35.331114,
                                                        139.647418,35.337381]),
        width : 5,
        material : Cesium.Color.BLUE
    }
});