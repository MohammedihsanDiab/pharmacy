<template>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5 mr-auto">
            <div class="border text-center">
              <img :src="'uploades/' + medicine.img" alt="Image" class="img-fluid p-5">
            </div>
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{medicine.name}}</h2>
            <p>{{medicine.title}}.</p>
            <p class="price">
                            <del v-if="medicine.price !== medicine.discount_price"> {{medicine.price}} </del>
                         — <strong class="text-primary h4">{{medicine.discount_price}} </strong></p>

            <div v-if="this.$store.state.token != null">
              <button  class="buy-now btn btn-sm height-auto px-4 py-2 btn-primary"
              @click="removeFromCart(medicine)" v-if="cartItems !== null && cartContainsProduct(cartItems, medicine)">
                  Remove from Cart
              </button>

              <button class="buy-now btn btn-sm height-auto px-4 py-2 btn-primary"
              @click="addToCart(medicine)" v-else>
                  Add To Cart
              </button>
          </div>
            <div class="mt-5">
              <ul class="nav nav-pills mb-3 custom-pill" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                    aria-controls="pills-home" aria-selected="true">Ordering Information</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                    aria-controls="pills-profile" aria-selected="false">Specifications</a>
                </li>
            
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <table class="table custom-table">
                    <thead>
                      <th>Material</th>
                      <th>Description</th>
                      <th>Packaging</th>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">OTC022401</th>
                        <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                        <td>1 BT</td>
                      </tr>
                      <tr>
                        <th scope="row">OTC022401</th>
                        <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                        <td>144/CS</td>
                      </tr>
                      <tr>
                        <th scope="row">OTC022401</th>
                        <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                        <td>1 EA</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            
                  <table class="table custom-table">
            
                    <tbody>
                      <tr>
                        <td>HPIS CODE</td>
                        <td class="bg-light">999_200_40_0</td>
                      </tr>
                      <tr>
                        <td>HEALTHCARE PROVIDERS ONLY</td>
                        <td class="bg-light">No</td>
                      </tr>
                      <tr>
                        <td>LATEX FREE</td>
                        <td class="bg-light">Yes, No</td>
                      </tr>
                      <tr>
                        <td>MEDICATION ROUTE</td>
                        <td class="bg-light">Topical</td>
                      </tr>
                    </tbody>
                  </table>
            
                </div>
            
              </div>
            </div>

    
          </div>
        </div>
      </div>
    </div>

    <div class="main_content_iner container">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <div>
                        <div class="messages_box_area col-lg-12">
                            <div class="messages_chat mb_30">
                                <div class="white_box ">
                                  <h3>Comments :</h3>
                                  <br>
                                    <div class="single_message_chat"  v-for="item in comments" :key="item.medicine_id">
                                        <div class="message_pre_left">
                                            <div class="message_preview_thumb">
                                                <img src="assets/images/messages/1.png" alt="">
                                            </div>
                                            <div class="messges_info">
                                                <h4>{{ item.name }}</h4>
                                                <p>{{ formatDateTime(item.created_at) }}</p>
                                            </div>
                                        </div>
                                        <div class="message_content_view red_border" width="100">
                                            <p>
                                              {{ item.content }}
                                            </p>
                                        </div>
                                    </div>
                                    <div v-if="this.$store.state.token != null" class="message_send_field">
                                        <input type="text" placeholder="Write your message" name="content" rows="4" v-model="newComment.content" required>
                                        <button class="btn_1" type="button" @click="submitComment">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import moment from 'moment';
export default (await import('vue')).defineComponent({
    name: "singelmedicine",
    created() {
            const t = this;
            t.id = t.$store.state.singelmedicineid;
            axios.post('/api/singlemedicine/' + t.id)
            .then(function (response) {
              t.medicine = response.data.data;
                console.log(response.data.data);
                t.medicine = response.data.data;
            })
            axios.get('/api/commentss/' + t.id)
            .then(function (response) {console.log(response.data);
              t.comments = response.data.comments;
              t.newComment.name = t.$store.state.name ;
              console.log(t.$store.state.name )
            })
    },
    data() {
        return {
            medicine:[],
            comments:[],
            id:'',
            medicine:{id:''},
            comments: [],
            newComment: {
                content: '',
                name:''
            }
        }
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
        
    formatDateTime(dateTime) {
        return moment(dateTime).calendar(null, {
            lastWeek: '[Last] dddd [at] h:mm A',
            sameDay: '[Today at] h:mm A',
            lastDay: '[Yesterday at] h:mm A',
            sameElse: 'MMM D [at] h:mm A'
        });
    },

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
      submitComment() {
        const t = this ;
        axios.post('/api/comments', {
            name:t.newComment.name,
            content: t.newComment.content,
            medicine_id: t.medicine.id
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
          console.log(response.data.content)
            t.newComment.content = (response.data.content);
            t.newComment.content = '';
            axios.get('/api/commentss/' + t.id)
            .then(function (response) {console.log(response.data);
              t.comments = response.data.comments;
              t.newComment.name = t.$store.state.name ;
              console.log(t.$store.state.name )
            })
        })
        .catch(error => {
            console.log(error);
        });
    },
  },
})
</script>
