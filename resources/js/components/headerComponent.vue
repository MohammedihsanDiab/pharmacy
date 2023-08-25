<template>
    <div class="site-navbar py-2">

        <div class="search-wrap">
            <div class="container">
                <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
                <form action="#" method="post">
                    <input type="text" class="form-control" placeholder="Search keyword and hit enter...">
                </form>
            </div>
        </div>

        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="logo">
                    <div class="site-logo">
                        <router-link to="/"><img style="width: 220px;height: auto;" src="assets/images/Screensho.png"
                                alt=""></router-link>
                    </div>
                </div>
                <div class="main-nav d-none d-lg-block">
                    <nav class="site-navigation text-right text-md-center" role="navigation">
                        <ul class="site-menu js-clone-nav d-none d-lg-block">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/shop">shop</router-link></li>
                            <li class="has-children">
                                    <a href="#">Categories</a>
                                    <ul class="dropdown">
                                        <li><router-link to="/attintion">attintion</router-link></li>
                                        <li><router-link to="/makeup">makeup</router-link></li>
                                        <li><router-link to="/akamol">akamol &amp; Vitamins</router-link></li>

                                    </ul>
                                </li>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/Contacts">Contact</router-link></li>
                            <li v-if="this.$store.state.tokenadmin == 1 && this.$store.state.token != null"><router-link to="/Dashboard">Control Panel</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="main-nav d-none d-lg-block">
                    <nav class="site-navigation text-right text-md-center" role="navigation">
                        <ul class="site-menu js-clone-nav d-none d-lg-block">
                            <li v-if="this.$store.state.token == null"><router-link to="/regester">Regester</router-link></li>
                            <li v-if="this.$store.state.token == null"><router-link to="/login">Login</router-link></li>
                            <li v-else><router-link to="/" @click="logout()">Logout</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="icons">
                    <a href="#" class="icons-btn d-inline-block js-search-open"><span class="icon-search"></span></a>
                    <router-link v-if="this.$store.state.token != null" to="/cart" class="icons-btn d-inline-block bag">
                        <span class="icon-shopping-bag"></span>
                        <span class="number">2</span>
                    </router-link>
                    <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                            class="icon-menu"></span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default (await import('vue')).defineComponent({
    data() {
    },
    methods: {
        logout() {

            localStorage.setItem('token', '');
            localStorage.setItem('tokenadmin', 0);
            localStorage.setItem('name', '');
            localStorage.setItem('owner', '');

            this.$store.state.token = null;
            this.$store.state.tokenadmin = 0;
            this.$store.state.name = '';
            this.$store.state.owner = '';
            
            console.log(response)

        },
        computed : {
            cartItems() {
                let output = undefined;
                if(this.$store.getters.cartItems !== undefined && output == undefined) {
                    output = this.$store.getters.cartItems
                }
                else if(JSON.parse(sessionStorage.getItem('cartItems')) !== undefined && output == undefined) {
                    output = JSON.parse(sessionStorage.getItem('cartItems'))
                }
                else {
                    output = []
                }
                return output
            }
        },

    },
})
</script>