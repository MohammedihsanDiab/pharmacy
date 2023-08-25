<template>
    <div class="content">
        <div class="container">
            <div class="row justify-content-center">
                <!-- <div class="col-md-6 order-md-2">
          <img src="images/undraw_file_sync_ot38.svg" alt="Image" class="img-fluid">
        </div> -->
                <div class="col-md-6 contents">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="form-block">
                                <div class="mb-4">
                                    <h3>Sign In </h3>
                                    <br>
                                </div>
                                <form method="post">
                                    <label for="name" class="ff">name</label>
                                        <div class="form-group"><input type="text" id="name"  v-model="user.name" name="name"
                                        :class="['form-control my-1', errors.name ? 'is-invalid' : '']" required="">
                                        <span v-if="errors.name" class="bg-danger text-white p-1 rounded d-inline-block my-1 ">{{ errors.name[0]}}</span>
                                        </div>
                                        <br>
                                        <label for="email" class="ff">email</label>
                                        <div class="form-group"><input type="email" id="email" v-model="user.email" name="email"
                                        :class="['form-control my-1', errors.email ? 'is-invalid' : '']" required="">
                                        <span v-if="errors.email" class="bg-danger text-white p-1 rounded d-inline-block my-1 ">{{ errors.email[0]}}</span>
                                         </div>
                                         <br>
                                        <label for="password" class="ff">password</label>
                                            <div class="form-group"><input type="password" id="password" v-model="user.password" name="password"
                                            :class="['form-control my-1', errors.password ? 'is-invalid' : '']" required="">
                                            <span v-if="errors.password" class="bg-danger text-white p-1 rounded d-inline-block my-1 ">{{ errors.password[0]}}</span>
                                         </div>

                                         <input style="margin-top: 60px;" @click="regester()" type="button" value="Sign In " class="btn btn-pill btn-block btn-primary text-dark">

                                    <!-- <span class="d-block text-center my-4 text-muted"> or sign in with</span>

                                    <div class="social-login text-center">
                                        <a href="#" class="facebook">
                                            <span class="icon-facebook mr-3"></span>
                                        </a>
                                        <a href="#" class="twitter">
                                            <span class="icon-twitter mr-3"></span>
                                        </a>
                                        <a href="#" class="google">
                                            <span class="icon-google mr-3"></span>
                                        </a>
                                    </div> -->
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    
</template>


<script>
export default (await import('vue')).defineComponent({
    name: "regester",
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            },
            errors: [],
        }
    },
    methods: {
        regester() {
            const t = this;
            axios.post('/api/register', t.user)
                .then(function (response) {
                    if (response.data.data) {
                        t.errors = response.data.data;
                        console.log(t.errors);
                    }
                    if (response.data.status == true) {
                        t.$router.push({ path: '/login' });
                        Toast.fire({
                        icon: 'success',
                        title: response.data.message
                        });
                    }
                    
                })
                .catch(function (error) {
                    Toast.fire({
                    icon: 'error',
                    title: 'Registered failed'
                    });
                    console.log(error);
                });
        }
    }

})
</script>

