// var map = L.map('map',
//  {
//   crs: L.CRS.EPSG4326,
//   zoomControl: true,
//   editable:true
// }).setView([22.27231859990752,113.56710553339326], 13);
// //将图层加载到地图上，并设置最大的聚焦还有map样式
// //添加电子地图影像
//  var  vector_map=L.tileLayer("http://t1.tianditu.com/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=93724b915d1898d946ca7dc7b765dda5", {
//     maxZoom: 17,
//     tileSize: 256,
//     zoomOffset: 1,
//     minZoom: 3
// }).addTo(map);
// //添加注记
// var vector_note=L.tileLayer("http://t1.tianditu.com/cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=93724b915d1898d946ca7dc7b765dda5", {
//     maxZoom: 17,
//     tileSize: 256,
//     zoomOffset: 1,
//     zIndex:5,
//     minZoom: 3
// }).addTo(map);


// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// map.on('click', onMapClick);


var map = new AMap.Map('map',{
    mapStyle: 'amap://styles/darkblue', //设置地图的显示样式
});


    //初始化地图对象，加载地图
    var map = new AMap.Map('container', {
        // resizeEnable: true,
        mapStyle: 'amap://styles/darkblue', //设置地图的显示样式
    });
    var options = {
        'showButton': true,//是否显示定位按钮
		'buttonPosition': 'LB',//定位按钮的位置
		/* LT LB RT RB */
		'buttonOffset': new AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
		'showMarker': true,//是否显示定位点
		'markerOptions':{//自定义定位点样式，同Marker的Options
		  'offset': new AMap.Pixel(-18, -36),
		  'content':'<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
		},
		'showCircle': true,//是否显示定位精度圈
		'circleOptions': {//定位精度圈的样式
			'strokeColor': '#0093FF',
			'noSelect': true,
			'strokeOpacity': 0.5,
			'strokeWeight': 1,
			'fillColor': '#02B0FF',
			'fillOpacity': 0.25
		}
    }
    AMap.plugin(["AMap.Geolocation"], function() {
        var geolocation = new AMap.Geolocation(options);
        map.addControl(geolocation);
        geolocation.getCurrentPosition()
    });