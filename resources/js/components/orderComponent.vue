<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h6 class="text-teal" style="color:#75b239;">Thanks for your Order. We will get to you Soon</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-12 my-3">
                <h4 class="text-orange py-3" style="color:#75b239;">Order Details:</h4>
            </div>
            <!-- <div class="col-12 mb-4">
                <h6 class="text-teal mb-2"><strong>Order ID: </strong> <span class="text-primary" v-text="order.id"></span></h6>
                <h6 class="text-teal mb-2"><strong>Transection ID: </strong>
                    <span class="text-primary" v-text="order.transection_id"></span>
                </h6>
            </div> -->
        </div>

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

        <div class="row align-items-center my-4" v-for="(product, index) in order.items" :key="index">
            <div class="col-1">
                <h6 v-text="index + 1"></h6>
            </div>
            <div class="col-2 d-flex">
                <img :src="'uploades/' + product.img" alt="" width="80" class="cart-img img-fluid my-auto border-radius-5px">                   
            </div>
            <div class="col-3">
                <h6 v-text="product.name"></h6>
            </div>
            <div class="col-1 d-flex flex-row align-items-center cart-quantity">                    
                <h6 v-text="product.quantity"></h6>
            </div>
            <div class="col-2">
                <h6 v-text="formatPrice(product.discount_price)"></h6>
            </div>                
            <div class="col-3">
                <h6 v-text="productTotal(product)"></h6>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-7"></div>
            <div class="col-2">
                <h4 class="font-bold text-teal">Grand Total</h4>
            </div>
            <div class="col-2">
                <h5 class="font-bold text-primary" v-text="formatPrice(order.total_payment/100)"></h5>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        created() {
        if (this.$store.state.token) {
            console.log(this.$store.state.token);
        }else{
            this.$router.push({ path: '/login' });
        }
    },
        data() {
            return {
                order : {}
            }
        },

        methods : {          
            orderItems() {
                let items = undefined;
                let output;
                
                if(this.$store.getters.getOrderDetails !== undefined && items == undefined) {
                    output = this.$store.getters.cartItems
                }
                if(JSON.parse(sessionStorage.getItem('order')) !== undefined && items == undefined) {
                    output = JSON.parse(sessionStorage.getItem('order'))
                }
                else {
                    output = []
                }
                
                this.order = output
                this.order.items = JSON.parse(output.items)
            },
            
            formatPrice(amount) {
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },

            productTotal(product) {
                let amount = product.quantity * product.discount_price
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },
        },

        mounted() {
            this.orderItems()
        }
    }
</script>