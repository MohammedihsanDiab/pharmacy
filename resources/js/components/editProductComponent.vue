<template>
    
<div class="crm_body_bg" style="display: flex;">

    
    <nav class="sidebar">
    <div class="logo d-flex justify-content-between">
        
        <div class="sidebar_close_icon d-lg-none">
            <i class="ti-close"></i>
        </div>
    </div>
    <br>
    <ul id="sidebar_menu">
        <li class="side_menu_title">
            <span>Dashboard</span>
        </li>
        <li>
            <a class="has-arrow" href="#" aria-expanded="false">

                <img src="assets/images/menu-icon/1.svg" alt="">
                <span>Dashboard</span>
            </a>
            <ul>
                 <li><router-link to="/Dashboard">Dashboard</router-link></li>
            </ul>
        </li>
        <li class="mm-active">
            <a class="has-arrow" href="#" aria-expanded="false">

                <img src="assets/images/menu-icon/1.svg" alt="">
                <span>Products</span>
            </a>
            <ul>
                <li><router-link class="active" to="/products">products</router-link></li>
            </ul>
        </li>
    </ul>
</nav>


    <section class="main_content dashboard_part">

        <div class="container ">
            <div class="row ">
                <div class="col-lg-12 p-0">
                    <div class="header_iner d-flex justify-content-between align-items-center">
                        <div class="sidebar_icon d-lg-none">
                            <i class="ti-menu"></i>
                        </div>
                        <div class="serach_field-area">
                            <div class="box_right d-flex lms_block ">
                                <div class="serach_field-area2">
                                    <div class="search_inner">
                                        <form Active="#">
                                            <div class="search_field">
                                                <input type="text" placeholder="Search here...">
                                            </div>
                                            <button type="submit"> <i class="ti-search"></i> </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>


                <div class="bg container">
                    <div class="row" style="margin-bottom: 30px;">
                        <div class="col-sm-12">
                            <h2 class="title text-center my-5 text-dark ">Edit the <span style="color: #75b239;">product</span></h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="contact-form">
                                <div class="status alert alert-success" style="display: none;"></div>
                               
                                <form id="main-contact-form"  method="post" name="contact-form" class="contact-form row"
                                enctype="multipart/form-data">
                                <div class="form-group col-md-6 mb-3"><input type="text" v-model="data.name" name="name"
                                    :class="['form-control', errors.name ? 'is-invalid' : '']" required="" placeholder="name">
                                    <span v-if="errors.name" class="bg-danger text-white p-1 rounded d-inline-block my-1 ">{{ errors.name[0]}}</span>
                                </div>
                                 
                                <div class="form-group col-md-6">
                                        <select name="subject" :class="['form-control', errors.category ? 'is-invalid' : '']" v-model="data.category">
                                            <option value="" disabled selected hidden style="color:#8c92a0 !important;">Select an categorys</option>
                                            <option>attintion</option>
                                            <option>makeup</option>
                                            <option>akamol</option>
                                    </select>
                                  <span v-if="errors.category" class="bg-danger text-white p-1 rounded d-inline-block my-2 ">{{ errors.category[0]}}</span>
                                </div>

                                <div class="form-group col-md-6 my-3"><input type="number" v-model="data.price" name="number"
                                         :class="['form-control', errors.price ? 'is-invalid' : '']" required="" placeholder="price">
                                        <span v-if="errors.price" class="bg-danger text-white p-1 rounded d-inline-block my-2 ">{{ errors.price[0]}}</span>
                                </div>

                                <div class="form-group col-md-6 my-3"><input type="number" v-model="data.discount_price" name="discount_price"
                                    :class="['form-control', errors.discount_price ? 'is-invalid' : '']" required="" placeholder="discount_price">
                                    <span v-if="errors.discount_price" class="bg-danger text-white p-1 rounded d-inline-block my-2 ">{{ errors.discount_price[0]}}</span>
                                </div>
                                <div class="form-group col-md-6 my-3"><input @change="chooseimge" type="file" name="img"
                                        :class="['form-control', errors.img ? 'is-invalid' : '']" required="" placeholder="img">
                                        <span v-if="errors.img" class="bg-danger text-white p-1 rounded d-inline-block my-2 ">{{ errors.img[0]}}</span>
                                </div>

                                <div class="form-group col-md-12 my-3"><textarea name="message" v-model="data.title"
                                        id="message" required="" :class="['form-control', errors.title ? 'is-invalid' : '']" rows="8"
                                        placeholder="discreption"></textarea>
                                        <span v-if="errors.title" class="bg-danger text-white p-1 rounded d-inline-block my-2 ">{{ errors.title[0]}}</span>
                                    </div>

                                    <div class="form-group col-md-12 my-4"><input type="button" @click="edit()" name="submit" class="btn btn-primary pull-right" value="Edit the product"></div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </section>

</div>

    



   
</template>

<script>

export default (await import('vue')).defineComponent({
    name: "editProduct",
    created() {
        if (this.$store.state.token && this.$store.state.tokenadmin == 1) {
            console.log(this.$store.state.token);
            const t = this;
            t.id = this.$store.state.editid;
            console.log(t.id);
            axios.get('/api/edit/' + t.id)
                .then(function (response) {
                    console.log(response.data);
                    t.data.name = response.data.data.name;
                    t.data.price = response.data.data.price;
                    t.data.category = response.data.data.category;
                    t.data.title = response.data.data.title;
                    t.data.discount_price = response.data.data.discount_price;
                    t.data.img = response.data.data.img;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else{
             this.$router.push({ path: '/login' });
        }
       

    },
    data() {
        return {
            data: {
                name: '',
                price: '',
                title: '',
                category:'',
                discount_price:'',
                img: ''
            },
            id: '',
            errors: [],
        }
    },
    methods: {
        chooseimge(event) {
            this.data.img = event.target.files[0];
        },
        edit() {
            const t = this;

            var data = new FormData();
            data.append('name', t.data.name);
            data.append('price', t.data.price);
            data.append('title', t.data.title);
            data.append('category', t.data.category);
            data.append('discount_price', t.data.discount_price);
            data.append('img', t.data.img);

            axios.post('/api/update/' + t.id, data)
                .then(function (response) {
                    console.log(t.id);
                    console.log(response.data.message);
                    if (response.data.data.errors) {
                        t.errors = response.data.data.errors;
                        console.log(t.errors);
                    } else {
                        Toast.fire({
                            icon: 'success',
                            title: response.data.message
                        })
                        t.$router.push({ path: '/products' });
                    }
                })
                .catch(function (error) {
                    Toast.fire({
                        icon: 'error',
                        title: 'medicine Edit failed'
                    })
                    console.log(error);
                });
        }
    }

})
</script>