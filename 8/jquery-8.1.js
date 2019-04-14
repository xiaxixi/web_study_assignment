/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-04 08:21:18
 * @version $Id$
 */


 $('h2').bind('mouseover', function() {
    $(this).next().show();
 }).bind('mouseout', function() {
    $(this).next().hide();
 })

 $('element').show(600);
 $('element').hide(600);

