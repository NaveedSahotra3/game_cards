
$(document).ready(function() {
	$.AjaxifyDefaults.loading_img = '/images/loading.gif';
	$('.ajaxify').livequery(function() {
		$(this).ajaxify();
	});
});

jQuery.fn.time_from_seconds = function(settings) {
    var config = {
            'hour': 'hour',
            'min': 'minute',
            'sec': 'second',
            'plural': true
        };
    if (settings){$.extend(config, settings);}
    return this.each(function() {
        var t = parseInt($(this).text(), 10);
        $(this).data('original', t);
        var h = Math.floor(t / 3600);
        t %= 3600;
        var m = Math.floor(t / 60);
        var s = Math.floor(t % 60);
        $(this).text((h > 0 ? h + ' ' + config.hour + ((h > 1 && config.plural) ? 's ' : ' ') : '') +
                     (m > 0 ? m + ' ' + config.min + ((m > 1 && config.plural) ? 's ' : ' ') : '') +
                     s + ' ' + config.sec + ((s > 1 && config.plural) ? 's' : ''));
    });
};