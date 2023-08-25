
<template>
    <div>
        
        <div class="container">
            <h3 class="text-orange mb-5 py-4" style="color:#75b239;">Cart Page</h3>
            <div class="row align-items-center">
                <div class="col-1">
                    <h6 class="font-bold text-teal text-black">SL</h6>
                </div>
                <div class="col-2">
                    <h6 class="font-bold text-teal text-black">Image</h6>                   
                </div>
                <div class="col-3">
                    <h6 class="font-bold text-teal text-black">Product Name</h6>
                </div>
                <div class="col-1">
                    <h6 class="font-bold text-teal text-black">Quantity</h6>
                </div>
                <div class="col-2">
                    <h6 class="font-bold text-teal text-black">Unit Price</h6>
                </div>                
                <div class="col-2">
                    <h6 class="font-bold text-teal text-black">Total Price</h6>
                </div>
            </div>

            <div class="row align-items-center my-4" v-for="(product, index) in cartProducts" :key="index">
                <div class="col-1">
                    <h6 v-text="index + 1"></h6>
                </div>
                <div class="col-2 d-flex">
                    <img :src="'uploades/' + product.img" alt="" width="80" srcset="">
                </div>
                <div class="col-3">
                    <h6 v-text="product.name"></h6>
                </div>
                <div class="col-1 d-flex flex-row align-items-center cart-quantity">                    
                    <input type="number" class="form-control" 
                    v-model.number="product.quantity" min="1" max="10"
                    @keyup="updateQty(product)" 
                    @click="updateQty(product)">
                </div>
                <div class="col-2">
                    <h6 v-text="formatPrice(product.discount_price)"></h6>
                </div>                
                <div class="col-2">
                    <h6 v-text="productTotal(product)"></h6>
                </div>
                <div class="col-1">
                    
                    <button @click="removeFromCart(product); cartItems(); grandTotal(cartProducts)" class="btn btn-danger height-auto btn-sm">X</button>
               
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-7"></div>
                <div class="col-2">
                    <h4 class="font-bold text-teal">Grand Total</h4>
                </div>
                <div class="col-2">
                    <h5 class="font-bold text-primary" v-text="total"></h5>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-9"></div>
                <div class="col-3">
                    <router-link to='/checkout'>
                        <button class="btn bg-teal border-radius-5px text-primary mb-5">Proceed to Checkout</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "cart",
        created() {
        if (this.$store.state.token) {
            console.log(this.$store.state.token);
        }else{
            this.$router.push({ path: '/login' });
        }
    },
        data() {
            return {
                total : 0,
                cartProducts : [],
            }
        },

        methods : {
            ...mapActions(['removeFromCart', 'updateCartQty']),

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
                this.cartProducts = output
            },

            formatPrice(amount) {
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },

            productTotal(product) {
                let amount = product.quantity * product.discount_price
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },

            updateQty(product) {

                if(product.quantity < 0 || product.quantity == null || product.quantity == undefined) {
                    product.quantity = 1;
                }
                if(product.quantity > 10) {
                   product.quantity = 10; 
                }
                this.updateCartQty(this.cartProducts)
                this.grandTotal(this.cartProducts)                     
            },

            grandTotal(product) {
                if(product.length > 0) 
                {
                    let amount = product.reduce((acc, item) => acc + (item.quantity * item.discount_price), 0)
                    this.total = this.formatPrice(amount)
                }
                else
                {
                    this.total = 0
                }
            },
        },

        mounted() {
            this.cartItems()
            this.grandTotal(this.cartProducts)
        }
    }
</script>