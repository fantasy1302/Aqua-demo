
let careersSlide = function(parentSelector) {
 $(parentSelector + ' .careers-tabs-tab').each(function(i, tab) {
     $(tab).click(function() {
         $(parentSelector + ' .careers-tabs-tab').each(function(j, item) {
             $(item).removeClass('careers-tabs-tab-active');
         });
         $(tab).addClass('careers-tabs-tab-active');
         $(parentSelector + ' .careers-tabs-content-item').each(function(k, container) {
             if (i == k) {
                 setTimeout(function() {
                     $(container).fadeIn(200);
                 }, 200);
             } else {
                 $(container).fadeOut(200);
             }
         });
     });
 });
};