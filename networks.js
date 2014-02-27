
var networks = [
        {
            name: 'Facebook',
            url: 'https://facebook.com/martin.toth'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/ezimir'
        },
        {
            name: 'Instagram',
            url: 'http://instagram.com/martinblogads'
        }
    ];

var network_template = '\
        <li><a href="%(url)s" target="_blank">\
            <span class="icon-%(icon)s"></span>\
            <div class="network"> %(name)s </div>\
            <span class="link"> %(preview)s </span>\
        </a></li>\
    ',
    target = document.getElementById('links');

for (var i = 0; network = networks[i]; i++) {
    network = prepareData(network);

    var item = document.createElement('li');
    item.innerHTML = sprintf(network_template, network);
    target.appendChild(item);
}

function prepareData(network) {
    network.icon = network.name.toLowerCase();

    if (typeof network.preview === 'undefined') {
        network.preview = network.url.replace(/^https?:\/\/(www\.)?/, '');
    }

    return network;
}

