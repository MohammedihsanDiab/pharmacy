<template>

    <div class="site-wrap">

        <div class="bg-light py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-0">
                        <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>
                        <strong class="text-black">Contact</strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="h3 mb-5 text-black">Get In Touch</h2>
                    </div>
                    <div class="col-md-12">

                        <form>

                            <div class="p-3 p-lg-5 border">
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="c_fname" class="text-black"> Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" v-model="form.name" id="c_fname" name="name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_email" class="text-black">Email <span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" v-model="form.email" id="c_email" name="email" placeholder="">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_subject" class="text-black">Subject </label>
                                        <input type="text" class="form-control" v-model="form.subject" id="c_subject" name="subject">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_message" class="text-black">Message </label>
                                        <textarea name="message" id="c_message" v-model="form.message" cols="30" rows="7" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-12">
                                        <input type="button" @click="submitForm()" class="btn btn-primary btn-lg btn-block" value="Send Message">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>



        <div class="site-section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-black mb-4">Offices</h2>
                    </div>
                    <div class="col-lg-4">
                        <div class="p-4 bg-white mb-3 rounded">
                            <span class="d-block text-black h6 text-uppercase">New York</span>
                            <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="p-4 bg-white mb-3 rounded">
                            <span class="d-block text-black h6 text-uppercase">London</span>
                            <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="p-4 bg-white mb-3 rounded">
                            <span class="d-block text-black h6 text-uppercase">Canada</span>
                            <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>
<script>
import axios from 'axios';
export default (await import('vue')).defineComponent({
    name: "contacts",
    data() {
        return {
            form:{
                name:'',
                email:'',
                subject:'',
                message:'',
            }
            
        }
    },
    methods: {
        submitForm() {
           const t = this;
            // Make a POST request to the Laravel route or controller
            axios.post('/api/contact', this.form)

            .then(response => {
            // Handle the response, such as showing a success message
            Toast.fire({
                        icon: 'success',
                        title: 'Email send successfully'
                    })
                    this.form.name = '';
                    this.form.email = '';
                    this.form.subject = '';
                    this.form.message = '';
            
            })
            .catch(error => {
            // Handle any errors, such as displaying an error message
            Toast.fire({
                        icon: 'error',
                        title: 'Email send failed'
                    })
            console.error(error);
            });
        }
    }   
})
</script>
