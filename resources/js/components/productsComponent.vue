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

    <div class="container-fluid g-0">
        <div class="row">
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
                                            <input type="text"  v-model="search" placeholder="Search here...">
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
    </div>
    <div class="row justify-content-center">
        <div class="col-xl-11">
            <div class="white_box QA_section card_height_100">
                <div class="white_box_tittle list_header m-0 align-items-center my-4">
                    <div class="main-title mb-sm-15">
                        <h3 class="m-0 nowrap">Products</h3>
                    </div>
                    <div class="message_send_field">
                        <router-link to="/addProduct"><button class="btn_1" type="submit">Add a new product</button></router-link>
                    </div>
                </div>
                <div class="QA_table ">

                    <table class="table lms_table_active2">
                        <thead>
                            <tr>
                                <th scope="col">Products Name</th>
                                <th scope="col">price</th>
                                <th scope="col">discreption</th>
                                <th scope="col">Categories</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in this.$store.state.search" :key="item.id">
                                <th scope="row" v-if="this.$store.state.owner === item.owner">
                                    <div class="patient_thumb d-flex align-items-center">
                                        <div class="student_list_img mr_20">
                                            <img :src="'uploades/' + item.img" alt="" srcset="">
                                        </div>
                                        <p>{{ item.name }}</p>
                                    </div>
                                </th>
                                <td v-if="this.$store.state.owner === item.owner">{{ item.price }}</td>
                                <td v-if="this.$store.state.owner === item.owner">{{ item.title }}</td>
                                <td v-if="this.$store.state.owner === item.owner">{{ item.category }}</td>
                                <td v-if="this.$store.state.owner === item.owner">
                                    <div class="amoutn_action d-flex align-items-center">

                                        <div class="dropdown ms-4">
                                            <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">View</a>
                                                <router-link to="/editProduct" @click="edit(item.id)" class="dropdown-item" href="#">Edit</router-link>
                                                <a class="dropdown-item" href="#" @click="del(item.id)">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

</div>

    



   
</template>


<script>
import Swal from 'sweetalert2'
export default (await import('vue')).defineComponent({
    name: "products",
    created() {
        if (this.$store.state.token && this.$store.state.tokenadmin == 1) {
            console.log(this.$store.state.token);
            const t = this;
            t.aa();
        }else{
            this.$router.push({ path: '/login' });
        }
    },
    data() {
        return {
            search:''
        }
    },

    methods:{

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

        edit(id) {
            this.$store.state.editid = id;
        },

        del(id) {
            const t = this;
            if (t.$store.state.token) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('/api/delete/' + id)
                            .then(function (response) {
                                console.log(response.data.message);
                                Toast.fire({
                                    icon: 'success',
                                    title: response.data.message
                                })
                                t.aa();
                            })
                    }
                })
                    .catch(function (error) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Book delete failed'
                        })
                        console.log(error);
                    });
            }else{
                t.$router.push({ path: '/login' });
            }
        },
    },
 


})
</script>
