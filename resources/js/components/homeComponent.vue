<template>
    <div class="site-wrap">

        <div class="owl-carousel owl-single px-0">
             <!-- <div class="site-blocks-cover overlay" style="background-image: url('images/hero_bg.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mx-auto align-self-center">
                            <div class="site-block-cover-content text-center">
                                <h1 class="mb-0"><strong class="text-primary">Pharmative</strong> Opens 24 Hours</h1>

                                <div class="row justify-content-center mb-5">
                                    <div class="col-lg-6 text-center">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex perspiciatis
                                            non quibusdam vel quidem.</p>
                                    </div>
                                </div>

                                <p><a href="#" class="btn btn-primary px-5 py-3">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            
            <div class="site-blocks-cover overlay" style="background-image: url('images/hero_bg_2.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mx-auto align-self-center">
                            <div class="site-block-cover-content text-center">
                                <h1 class="mb-0">New Medicine <strong class="text-primary">Everyday</strong></h1>
                                <div class="row justify-content-center mb-5">
                                    <div class="col-lg-6 text-center">
                                        <p>Discover the latest breakthroughs in healthcare. Explore cutting-edge treatments, diagnostic tools, and digital health advancements that are transforming the field.</p>
                                    </div>
                                </div>
                                <p><router-link class="btn btn-primary px-5 py-3" to="/shop">Shop Now</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 



        <div class="site-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="feature">
                            <span class="wrap-icon flaticon-24-hours-drugs-delivery"></span>
                            <h3><a href="#">Free Delivery</a></h3>
                            <p>The possibility of shopping for free without subscribinge.</p>
                            <p><a href="#" class="d-flex align-items-center"><span class="mr-2">Learn more</span> <span
                                        class="icon-keyboard_arrow_right"></span></a></p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature">
                            <span class="wrap-icon flaticon-medicine"></span>
                            <h3><a href="#">New Medicine Everyday</a></h3>
                            <p>Renewing medicines every day to ensure they are available to all patients.</p>
                            <p><a href="#" class="d-flex align-items-center"><span class="mr-2">Learn more</span> <span
                                        class="icon-keyboard_arrow_right"></span></a></p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature">
                            <span class="wrap-icon flaticon-test-tubes"></span>
                            <h3><a href="#">Medicines Guaranteed</a></h3>
                            <p>Medicines are imported from companies that are guaranteed not to be tampered with.</p>
                            <p><a href="#" class="d-flex align-items-center"><span class="mr-2">Learn more</span> <span
                                        class="icon-keyboard_arrow_right"></span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-section bg-light">
            <div class="container">
                <div class="row">
                    <div class="title-section text-center col-12">
                        <h2>Pharmacy <strong class="text-primary">Products</strong></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 block-3 products-wrap">
                        <div class="nonloop-block-3 owl-carousel">

                            <div class="row">
                                <div  v-for="item in this.$store.state.search" :key="item.id" class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                                    <span class="onsale">Sale</span>
                                    <router-link to="/singelmedicine"> <img :src="'uploades/' + item.img" @click="singlemedicine(item.id)"  style="padding: 20px;" alt="Image"></router-link>
                                    <h3 class="text-dark"><a href="shop-single.html">{{item.name}}</a></h3>
                                    <p class="price">
                                        <del v-if="item.price !== item.discount_price"> {{item.price}} </del>
                                    — <strong >{{item.discount_price}} </strong></p>
                                    <div v-if="this.$store.state.token != null">
                                    <button  class="buy-now btn btn-sm height-auto px-4 py-2 btn-primary"
                                    @click="removeFromCart(item)" v-if="cartItems !== null && cartContainsProduct(cartItems, item)">
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
        </div>

        <div class="site-section bg-image overlay" style="background-image: url('images/hero_bg_2.jpg');">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-7">
                        <h3 class="text-white">Sign up for discount up to 55% OFF</h3>
                        <p class="text-white">When subscribing to the application, you can get great discounts of up to 50%..</p>
                        <p class="mb-0"><router-link class="btn btn-outline-white" to="/regester">Sign up</router-link></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-section">
            <div class="container">

                <div class="row justify-content-between">
                    <div class="col-lg-6">
                        <div class="title-section">
                            <h2>Happy <strong class="text-primary">Customers</strong></h2>
                        </div>
                        <div class="block-3 products-wrap">
                            <div class="owl-single no-direction owl-carousel">
                                <div class="testimony">
                                    <blockquote>
                                        <img src="images/person_3.jpg" alt="Image" class="img-fluid">
                                        <p>&ldquo;Amazing online pharmacy! Quick delivery, great customer service, and a wide range of affordable medications. Highly recommended!.&rdquo;
                                        </p>
                                    </blockquote>

                                    <p class="author">&mdash; Lucas Gallone</p>
                                </div>

                                <div class="testimony">
                                    <blockquote>
                                        <img src="images/person_4.jpg" alt="Image" class="img-fluid">
                                        <p>&ldquo;Impressed with the quality and authenticity of the medications received. The website is user-friendly, and the prices are competitive. A trustworthy online pharmacy.&rdquo;
                                        </p>
                                    </blockquote>

                                    <p class="author">&mdash; Andrew Neel</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="title-section">
                            <h2 class="mb-5">Why <strong class="text-primary">Us</strong></h2>
                            <div class="step-number d-flex mb-4">
                                <span>1</span>
                                <p>Ensuring the import of medicines from their warehouses</p>

                            </div>

                            <div class="step-number d-flex mb-4">
                                <span>2</span>
                                <p>The possibility of requesting a consultation at any time possible</p>

                            </div>

                            <div class="step-number d-flex mb-4">
                                <span>3</span>
                                <p>The possibility of payment through the application, which makes it easier for patients</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div></template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    created() { 
        this.getProducts()
        const t = this;
        t.aa();
    },
    data() {
        return {
            search:'',
            // medicines:[],
        }
    },
    mounted() {
        console.log('Component mounted.')
    },
    methods:{
       
        ...mapActions(['getProducts', 'addToCart', 'removeFromCart']),

        formatPrice(amount) {
            return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
        },

        cartContainsProduct(cart, product) {
            let index = false;
            cart.forEach(check)

            function check(item) {
                if(item.id == product.id) {
                    return index = true
                }
            }
            return index
        },
        aa() {
            const t = this;
            axios.get('/api/medicines')
                .then(function (response) {
                    console.log(response.data);
                    t.$store.state.search = response.data;
                })
        },
        searchh(){
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
        singlemedicine(id){
            const t = this;
            t.$store.state.singelmedicineid = id;
            localStorage.setItem("singelmedicineid",t.$store.state.singelmedicineid);
        }
    },
    
    computed : {
            ...mapGetters(['products']),

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
            },
            searchh(){
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
        }
        },
}

</script>
