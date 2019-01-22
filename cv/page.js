
['employment', 'position', 'project'].map(name => {
    Vue.component(name, {
        template: `#vue-${ name }`,
        props: ['o'],
    });
});

var app = new Vue({
    el: '#vue-app',
    data: {
        employments: WORK,
    },
});

