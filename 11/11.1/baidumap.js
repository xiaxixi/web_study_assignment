/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-25 08:32:45
 * @version $Id$
 */

var map = new BMap.Map("myMap");
 //开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);

//向地图添加标准地图控件、平移缩放控件、比例尺控件和缩略图控件。
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl()); 
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州");

var point = new BMap.Point(120.118284, 30.228182);
map.centerAndZoom(point, 17);

// 显示附近的所有宾馆 
// 自定义图标
var local = new BMap.LocalSearch(map, {
  pageCapacity: 15,
  renderOptions: {
    map: map,
    panel: "result"
  }
});
local.search("宾馆");

local = new BMap.LocalSearch(map, {
  pageCapacity: 15,
  renderOptions: {
    map: map,
    panel: "result"
  }
});
local.search("酒店");

// 创建地址解析器实例     
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上    
myGeo.getPoint("宾馆", function(point) {
  if (point) {
    var myIcon = new BMap.Icon("hotel.png", new BMap.Size(30, 44));
    var marker = new BMap.Marker(point,{icon: myIcon});
    map.addOverlay(marker);
  }
}, "杭州市");

// 公交搜索酒店
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "results"
  }
});
transit.search("杭州市海曙路58号", "酒店");

// 标注学校
var u_point = new BMap.Point(120.015906, 30.296545);
map.centerAndZoom(u_point, 17);
var marker = new BMap.Marker(u_point);// 创建标注    
map.addOverlay(marker);

var opts_1 = {
    width: 250, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "杭州师范大学博文苑-9号楼" // 信息窗口标题
}
marker.addEventListener("click", function(){    
    var infoWindow = new BMap.InfoWindow("地址：浙江省杭州市余杭区塘南路附近", opts_1); // 创建信息窗口对象
    this.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
});

var u_point = new BMap.Point(120.016625, 30.29563);
map.centerAndZoom(u_point, 17);
var marker = new BMap.Marker(u_point);// 创建标注    
map.addOverlay(marker);

var opts_2 = {
    width: 250, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "杭州师范大学博文苑-5号楼" // 信息窗口标题
}
marker.addEventListener("click", function(){    
    var infoWindow = new BMap.InfoWindow("地址：浙江省杭州市余杭区海曙路58号杭州师范大学附近", opts_2); // 创建信息窗口对象
    this.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
});

var u_point = new BMap.Point(120.015635, 30.295093);
map.centerAndZoom(u_point, 17);
var marker = new BMap.Marker(u_point);// 创建标注    
map.addOverlay(marker);

var opts_3 = {
    width: 250, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "杭州师范大学照相馆" // 信息窗口标题
}
marker.addEventListener("click", function(){    
    var infoWindow = new BMap.InfoWindow("地址：仓田街道余杭塘路2318号杭州师范大学内", opts_3); // 创建信息窗口对象
    this.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
});