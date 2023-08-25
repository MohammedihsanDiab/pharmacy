import Home from '@/components/homeComponent.vue';
import about from '@/components/aboutComponent.vue';
import contacts from '@/components/contactsComponent.vue';
import shop from '@/components/shopComponent.vue';
import Dashboard from '@/components/DashboardComponent.vue';
import regester from '@/components/regesterComponent.vue';
import login from '@/components/loginComponent.vue';
import products from '@/components/productsComponent.vue';
import addProduct from '@/components/addProductComponent.vue';
import editProduct from '@/components/editProductComponent.vue';
import singelmedicine from '@/components/singelmedicineComponent.vue';
import attintion from '@/components/attintionComponent.vue';
import makeup from '@/components/makeupComponent.vue';
import akamol from '@/components/akamolComponent.vue';
import PaymentSuccess from '../components/PaymentSuccess.vue';
import PaymentFailed from '../components/PaymentFailed.vue';
import cart from '@/components/cartComponent.vue';
import checkout from '@/components/checkoutComponent.vue';
import order from '@/components/orderComponent.vue';

import { createRouter, createWebHistory } from 'vue-router';

// app.component('example-component', ExampleComponent);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: about },
    { path: '/contacts', component: contacts },
    { path: '/shop', component: shop },
    { path: '/Dashboard', component: Dashboard },
    { path: '/regester', component: regester },
    { path: '/login', component: login },
    { path: '/products', component: products },
    { path: '/addProduct', component: addProduct },
    { path: '/editProduct', component: editProduct },
    { path: '/singelmedicine', component: singelmedicine },
    { path: '/attintion', component: attintion },
    { path: '/makeup', component: makeup },
    { path: '/akamol', component: akamol },
    { path: '/cart', component: cart },
    { path: '/checkout', component: checkout },
    { path: '/order', component: order },
    {
        path: '/payment/success',
        name: 'PaymentSuccess',
        component: PaymentSuccess,
    },
    {
        path: '/payment/failed',
        name: 'PaymentFailed',
        component: PaymentFailed,
        props: true,
    },
]

const router = createRouter({
        history: createWebHistory(),
        routes,
    })
    /**
     * The following block of code may be used to automatically register your
     * Vue components. It will recursively scan this directory for the Vue
     * components and automatically register them with their "basename".
     *
     * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
     */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

export default router