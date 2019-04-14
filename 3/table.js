/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-30 09:32:31
 * @version $Id$
 */


 function show_coords(event) {
    var x = event.clientX;
    var y = event.clientY;
    alert("X坐标：" + x + ", Y坐标：" + y);
 }


 window.onload = function () {
    var oTBL = document.getElementById("tbl");
    var aTr = oTBL.getElementsByTagName("tr");
    var aTd = oTBL.getElementsByTagName("td");

    for (var i = 0; i < aTd.length; i++) {

        //点击单元格11,使表格的背景颜色变成红色;
        if(0 === i) {
            aTd[i].onmousedown = function() {
                this.style.background = "red";
            } 
        }

        //击单元格12,将单元格的内容变成当前的日期,其格式为(yyyy-mm-dd);
        if(1 === i) {
            aTd[i].onmousedown = function() {
                this.innerHTML = Date();
            } 
        }

        //点击单元格21,将在现有单元格后面插入一行;
        var n = 3;
        if(2 === i) {
            aTd[i].onmousedown = function() {
                n++;
                var NewTr = document.createElement("tr");
                var NewTd1 = document.createElement("td");
                var NewTd2 = document.createElement("td");
                var node1 = document.createTextNode(n + "1");
                var node2 = document.createTextNode(n + "2");
                
                NewTd1.appendChild(node1);
                NewTd2.appendChild(node2);
                NewTr.appendChild(NewTd1);
                NewTr.appendChild(NewTd2);

                var element = document.getElementById("tbl");
                element.appendChild(NewTr);
            }

        }

        //点击单元格22,将删除表格的第2行;
        if(3 === i) {
            aTd[i].onmousedown = function() {
                var parent = aTr[1];
                var child = aTd[3];
                parent.removeChild(child);

                child = aTd[2];
                parent.removeChild(child);  

                parent = document.getElementById("tbl");
                child = aTr[1];
                parent.removeChild(child); 
            } 
        }

        //点击单元格31,显示当前的鼠标坐标;(见html的body)

        //击单元格32,打开一个新窗口,里面显示淘宝主页;
        if(5 === i) {
           aTd[i].onmousedown = function() {
                window.open("https://www.taobao.com/");
            } 
        }

    }
 }

