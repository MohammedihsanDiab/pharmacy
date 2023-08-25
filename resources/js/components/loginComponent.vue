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
                                    <h3>Login </h3>

                                </div>
                                <form>
                                  
                                        
                                        <br>
                                        <label for="email" class="ff">email</label>
                                        <div class="form-group"><input type="email" id="email" v-model="email" name="email"
                                        :class="['form-control my-1', errors.email ? 'is-invalid' : '']" required="">
                                        <span v-if="errors.email" class="bg-danger text-white p-1 rounded d-inline-block my-1 ">{{ errors.email[0]}}</span>
                                         </div>
                                    <br>
                                        <label for="password" class="ff">password</label>
                                        <div class="form-group"><input type="password" id="password" v-model="password" name="password"
                                        :class="['form-control my-1', errors.password ? 'is-invalid' : '']" required="">
                                        <span v-if="errors.password" class="bg-danger text-white p-1 rounded d-inline-block my-1 ">{{ errors.password[0]}}</span>
                                         </div>

                                    <div class="d-flex mb-5 align-items-center" style="margin: 40px 0;">
                                        <label class="control control--checkbox mb-0"><span class="caption">Remember
                                                me</span>
                                            <input type="checkbox" checked="checked" />
                                            <div class="control__indicator"></div>
                                        </label>
                                        <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
                                    </div>

                                    <input type="button" @click="login()" value="Log In"
                                        class="btn btn-pill btn-block btn-primary text-dark">

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
    name: "login",
    data() {
        return {
            email: '',
            password: '',
            errors:[]
        }
    },
    methods: {
        login() {
            const t = this;
            axios.post('/api/login', {
                email: t.email,
                password: t.password
            })
                .then(function (response) {
                    console.log(response.data.data.email);
                    if (response.data.data) {
                        t.errors = response.data.data;
                        console.log(t.errors);
                    }
                    if (response.data.status == true) {
                        localStorage.setItem("token", response.data.data.token);
                        t.$store.state.token = response.data.data.token;
                        console.log(response.data.data.token);
                        
                        t.$store.state.name = response.data.data.name;
                        localStorage.setItem("name", t.$store.state.name);

                        t.$store.state.owner = response.data.data.useremail;
                        localStorage.setItem("owner", t.$store.state.owner);
                        if (t.email === 'azz@gmail.com' || t.email === 'aa@gmail.com') {
                            t.$store.state.tokenadmin = 1;
                            localStorage.setItem("tokenadmin", t.$store.state.tokenadmin);
                            t.$router.push({ path: '/Dashboard' });
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                        }
                        else {
                            t.$router.push({ path: '/' });
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                        }
                    }
                })
                .catch(function (error) {
                    Toast.fire({
                    icon: 'error',
                    title: 'Login failed'
                    });
                    console.log(error);
                });
        }
    }

})
</script>
