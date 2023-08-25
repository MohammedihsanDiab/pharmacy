<template>
    <div class="site-wrap">


        <div class="bg-light py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong
                            class="text-black">Store</strong></div>
                </div>
            </div>
        </div>

        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="serach_field-area">
                        <div class="box_right d-flex lms_block ">
                            <div class="serach_field-area2">
                                <div class="search_inner">
                                    <form Active="#">
                                        <div class="search_field">
                                            <input type="text" v-model="search" placeholder="Search here...">
                                        </div>
                                        <button @click="searchh" type="button"> <i class="ti-search"></i> </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-section bg-light">
            <div class="container">
                <h2 class="text-center" style="font-size: 30px;margin-bottom: 70px;"> Akamol <span
                        style="color:#75b239;">Products</span></h2>

                <div class="row">
                    <div v-for="item in this.$store.state.search" :key="item.id">
                        <div v-if="item.category == 'akamol'" class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <span class="onsale">Sale</span>
                            <router-link to="/singelmedicine"> <img :src="'uploades/' + item.img"
                                    @click="singlemedicine(item.id)" style="padding: 20px;" alt="Image"></router-link>
                            <h3 class="text-dark"><a href="shop-single.html">{{ item.name }}</a></h3>
                            <p class="price">
                            <del v-if="item.price !== item.discount_price"> {{item.price}} </del>
                         — <strong >{{item.discount_price}} </strong></p>
                            <div v-if="this.$store.state.token != null">
                                <button class="buy-now btn btn-sm height-auto px-4 py-2 btn-primary"
                                    @click="removeFromCart(item)"
                                    v-if="cartItems !== null && cartContainsProduct(cartItems, item)">
                                    Remove from Cart
                                </button>

                                <button class="buy-now btn btn-sm height-auto px-4 py-2 btn-primary"
                                    @click="addToCart(item)" v-else>
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default (await import('vue')).defineComponent({
    name: "shop",
    created() {
        const t = this;
        t.aa();
    },
    data() {
        return {
            search: '',
            // medicines:[],
        }
    },
    methods: {
        aa() {
            const t = this;
            axios.get('/api/medicines')
                .then(function (response) {
                    console.log(response.data);
                    t.$store.state.search = response.data;
                })
        },
        searchh() {
            const t = this;
            var search = t.search;
            axios.get('/api/search/' + search)
                .then(function (response) {
                    console.log(response);
                    t.$store.state.search = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    
        ...mapActions(['getProducts', 'addToCart', 'removeFromCart']),

        formatPrice(amount) {
            return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        },

        cartContainsProduct(cart, product) {
            let index = false;
            cart.forEach(check)

            function check(item) {
                if (item.id == product.id) {
                    return index = true
                }
            }
            return index
        },
        singlemedicine(id){
            const t = this;
            t.$store.state.singelmedicineid = id;
            localStorage.setItem("singelmedicineid",t.$store.state.singelmedicineid);
        }
    },
    computed: {
        ...mapGetters(['products']),

        cartItems() {
            let output = undefined;
            if (this.$store.getters.cartItems !== undefined && output == undefined) {
                output = this.$store.getters.cartItems
            }
            else if (JSON.parse(sessionStorage.getItem('cartItems')) !== undefined && output == undefined) {
                output = JSON.parse(sessionStorage.getItem('cartItems'))
            }
            else {
                output = []
            }
            return output
        },
    },
})
</script>
