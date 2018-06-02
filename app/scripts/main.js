(function () {
    function renderData(data) {
        var template = $('#data-list').html();
        Mustache.parse(template);   // optional, speeds up future uses
        var rendered = Mustache.render(template, { data: data });
        $('#data-list').html(rendered);
    };

    function getData(params, cb) {
        var data = [{
            name: 'Правило 1',
            data: [{
                name: 'Чл. 1',
                data: [{
                    name: 'A paragraph of text with an unassigned link.'
                }]
            }, {
                name: 'A second row of text with a web link'
            }]
        }, {
            name: 'Правило 2 ',
            data: [{
                name: 'Чл. 2',
                data: [{
                    name: 'A paragraph of text with an unassigned link.'
                }, {
                    name: 'A second row of text with a web link'
                }]
            }, {
                name: 'Чл. 3',
                data: [{
                    name: 'A paragraph of text with an unassigned link.'
                }]
            }, {
                name: 'A second row of text with a web link'
            }]
        }];

        cb(data);
    };

    getData({}, renderData);

    $('.data-list-header').click(function () {
        $(this).next().toggleClass('hidden');
    });

    $('#toggle-btn').click(function (ev) {
        ev.preventDefault()
        $('.data-list-items').toggleClass('hidden');
    });
})();
