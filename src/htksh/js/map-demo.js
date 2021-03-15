var map = L.map('map',
 {
  crs: L.CRS.EPSG4326,
  zoomControl: true,
  editable:true
}).setView([22.27231859990752,113.56710553339326], 13);
//将图层加载到地图上，并设置最大的聚焦还有map样式
//添加电子地图影像
 var  vector_map=L.tileLayer("http://t1.tianditu.com/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=93724b915d1898d946ca7dc7b765dda5", {
    maxZoom: 17,
    tileSize: 256,
    zoomOffset: 1,
    minZoom: 3
}).addTo(map);
//添加注记
var vector_note=L.tileLayer("http://t1.tianditu.com/cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=93724b915d1898d946ca7dc7b765dda5", {
    maxZoom: 17,
    tileSize: 256,
    zoomOffset: 1,
    zIndex:5,
    minZoom: 3
}).addTo(map);


var popup = L.popup();

// 地图添加坐标提示.
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var circle = L.circle([22.269652, 113.541985], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
