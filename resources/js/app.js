/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import router from '@/router';
import store from '@/store';
import header from '@/components/headerComponent.vue';

import { createApp } from 'vue';

import Swal from 'sweetalert2'



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast = Toast;


/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */


const app = createApp({
    created() {
        if (localStorage.getItem("token") !== '') {
            this.$store.state.token = localStorage.getItem("token");
            this.$store.state.tokenadmin = localStorage.getItem("tokenadmin");
            this.$store.state.name = localStorage.getItem("name");
            this.$store.state.owner = localStorage.getItem("owner");
            this.$store.state.singelmedicineid = localStorage.getItem("singelmedicineid");
            console.log(localStorage.getItem("token"));
            console.log(localStorage.getItem("name"));
        } else {
            console.log('10');
        }

    }
});

app.component('header-component', header)

app.use(router);
app.use(store);
app.mount('#app');