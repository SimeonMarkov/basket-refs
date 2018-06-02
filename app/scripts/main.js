(function () {
    function loadUser() {
        var data = [{
            name: 'Krum'
        }, {
            name: 'Simo'
        }]
        var template = $('#data-list').html();
        Mustache.parse(template);   // optional, speeds up future uses
        var rendered = Mustache.render(template, {data: data});
        $('#data-list').html(rendered);
    }
    
    loadUser();
})();