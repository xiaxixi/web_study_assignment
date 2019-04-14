/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-18 08:29:37
 * @version $Id$
 */
window.onload = function () {
}

$(document).ajaxError(function (e, xhr, settings, error) {
    console.log(error);
  });

 $.ajax({
    url: "index.html",
    success: function() {
        alert("hvuoe");
    },
    error: function() {
        alert("sisuvuui");
    }
});


