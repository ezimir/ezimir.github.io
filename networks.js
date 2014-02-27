
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
        },
        {
            name: 'Skype',
            url: 'skype:ezimir?userinfo',
            preview: 'skype:ezimir'
        },
        {
            name: 'LinkedIn',
            url: 'http://www.linkedin.com/in/ezimir'
        },
        {
            name: 'Email',
            url: 'mailto:ezimir@gmail.com',
            preview: 'ezimir@gmail.com'
        },
        {
            name: 'Github',
            url: 'https://github.com/ezimir'
        },
        {
            name: 'StackExchange',
            url: 'http://stackexchange.com/users/24432/martin-toth?tab=accounts',
            preview: 'SE/users/24432/martin-toth'
        },
        {
            name: 'Forrst',
            url: 'https://forrst.com/people/ezimir'
        },
        {
            name: 'Dribbble',
            url: 'http://dribbble.com/ezimir'
        },
        {
            name: 'DeviantArt',
            url: 'http://ezimir.deviantart.com'
        },
        {
            name: 'LastFM',
            url: 'http://last.fm/user/ezimir'
        },
        {
            name: 'YouTube',
            url: 'http://www.youtube.com/user/ezimir'
        },
        {
            name: 'Reddit',
            url: 'http://www.reddit.com/user/piatok'
        },
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

