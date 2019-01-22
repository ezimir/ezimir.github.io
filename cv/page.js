
let obj_mixin = {
    props: ['o'],
};

Vue.component('employment', {
    template: '#vue-employment',
    mixins: [obj_mixin],
});

Vue.component('project', {
    template: '#vue-project',
    mixins: [obj_mixin],
});


var app = new Vue({
    el: '#vue-app',
    data: {
        employments: WORK,
    },
});

