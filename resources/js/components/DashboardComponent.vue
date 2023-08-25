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
        <li class="mm-active">
            <a class="has-arrow" href="#" aria-expanded="false">

                <img src="assets/images/menu-icon/1.svg" alt="">
                <span>Dashboard</span>
            </a>
            <ul>
                 <li><router-link class="active" to="/Dashboard">Dashboard</router-link></li>
            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">

                <img src="assets/images/menu-icon/1.svg" alt="">
                <span>Products</span>
            </a>
            <ul>
                <li><router-link to="/products">products</router-link></li>
            </ul>
        </li>
    </ul>
</nav>
        <section class="main_content dashboard_part">

            <div class="container-fluid g-0">
                <div class="row">
                    
                    <div class="col-lg-12 p-0">
                    </div>
                </div>
                
            </div> 
            
            <div class="main_content_iner ">
                <div class="container-fluid p-0">
                    <div class="row justify-content-center">
                        
                         <div class="col-xl-12">
                            <div class="col-lg-12">
                            <div class="single_element">
                                <div class="quick_activity">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="quick_activity_wrap">
                                                <div class="single_quick_activity d-flex">
                                                    <div class="icon">
                                                        <img src="assets/images/icon/man.svg" alt="">
                                                    </div>
                                                    <div class="count_content">
                                                        <h3><span class="counter">520</span> </h3>
                                                        <p>Doctors</p>
                                                    </div>
                                                </div>
                                                <div class="single_quick_activity d-flex">
                                                    <div class="icon">
                                                        <img src="assets/images/icon/cap.svg" alt="">
                                                    </div>
                                                    <div class="count_content">
                                                        <h3><span class="counter">6969</span> </h3>
                                                        <p>Nurses</p>
                                                    </div>
                                                </div>
                                                <div class="single_quick_activity d-flex">
                                                    <div class="icon">
                                                        <img src="assets/images/icon/wheel.svg" alt="">
                                                    </div>
                                                    <div class="count_content">
                                                        <h3><span class="counter">7510</span> </h3>
                                                        <p>Patients</p>
                                                    </div>
                                                </div>
                                                <div class="single_quick_activity d-flex">
                                                    <div class="icon">
                                                        <img src="assets/images/icon/pharma.svg" alt="">
                                                    </div>
                                                    <div class="count_content">
                                                        <h3><span class="counter">2110</span> </h3>
                                                        <p>Pharmacusts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                           <!-- <div class="white_box QA_section card_height_100">
                                <div class="white_box_tittle list_header m-0 align-items-center">
                                    <div class="main-title mb-sm-15">
                                        <h3 class="m-0 nowrap my-4">Patients</h3>
                                    </div>
                                </div>
                                <div class="QA_table ">

                                    <table class="table lms_table_active2">
                                        <thead>
                                            <tr>
                                                <th scope="col">Patients Name</th>
                                                <th scope="col">department</th>
                                                <th scope="col">Appointment Date</th>
                                                <th scope="col">Serial Number</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div class="patient_thumb d-flex align-items-center">
                                                        <div class="student_list_img mr_20">
                                                            <img src="assets/images/patient/3.png" alt="" srcset="">
                                                        </div>
                                                        <p>Jhon Kural</p>
                                                    </div>
                                                </th>
                                                <td>Monte Carlo</td>
                                                <td>11/03/2023</td>
                                                <td>MDC65454</td>
                                                <td>
                                                    <div class="amoutn_action d-flex align-items-center">
                                                        $29,192
                                                        <div class="dropdown ms-4">
                                                            <a class=" dropdown-toggle hide_pils" href="#" role="button"
                                                                id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">View</a>
                                                                <a class="dropdown-item" href="#">Edit</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="patient_thumb d-flex align-items-center">
                                                        <div class="student_list_img mr_20">
                                                            <img src="assets/images/patient/4.png" alt="" srcset="">
                                                        </div>
                                                        <p>Jhon Kural</p>
                                                    </div>
                                                </th>
                                                <td>Monte Carlo</td>
                                                <td>11/03/2023</td>
                                                <td>MDC65454</td>
                                                <td>
                                                    <div class="amoutn_action d-flex align-items-center">
                                                        $29,192
                                                        <div class="dropdown ms-4">
                                                            <a class=" dropdown-toggle hide_pils" href="#" role="button"
                                                                id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">View</a>
                                                                <a class="dropdown-item" href="#">Edit</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="patient_thumb d-flex align-items-center">
                                                        <div class="student_list_img mr_20">
                                                            <img src="assets/images/patient/5.png" alt="" srcset="">
                                                        </div>
                                                        <p>Jhon Kural</p>
                                                    </div>
                                                </th>
                                                <td>Monte Carlo</td>
                                                <td>11/03/2023</td>
                                                <td>MDC65454</td>
                                                <td>
                                                    <div class="amoutn_action d-flex align-items-center">
                                                        $29,192
                                                        <div class="dropdown ms-4">
                                                            <a class=" dropdown-toggle hide_pils" href="#" role="button"
                                                                id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">View</a>
                                                                <a class="dropdown-item" href="#">Edit</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="patient_thumb d-flex align-items-center">
                                                        <div class="student_list_img mr_20">
                                                            <img src="assets/images/patient/6.png" alt="" srcset="">
                                                        </div>
                                                        <p>Jhon Kural</p>
                                                    </div>
                                                </th>
                                                <td>Monte Carlo</td>
                                                <td>11/03/2023</td>
                                                <td>MDC65454</td>
                                                <td>
                                                    <div class="amoutn_action d-flex align-items-center">
                                                        $29,192
                                                        <div class="dropdown ms-4">
                                                            <a class=" dropdown-toggle hide_pils" href="#" role="button"
                                                                id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">View</a>
                                                                <a class="dropdown-item" href="#">Edit</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>-->
                        </div> 

                        <div class="col-xl-12">
                            <div class="white_box card_height_100">
                                <div class="box_header border_bottom_1px  ">
                                    <div class="main-title">
                                        <h3 class="mb_25">A pharmacist</h3>
                                    </div>
                                </div>
                                <div class="staf_list_wrapper sraf_active owl-carousel">

                                    <div class="single_staf">
                                        <div class="staf_thumb">
                                            <img src="assets/images/staf/1.png" alt="">
                                        </div>
                                        <h4>Dr. {{ this.$store.state.name }}</h4>
                                        <p>Doctor</p>
                                    </div>
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
    name: "Dashboard",
    created() {
        if (this.$store.state.token && this.$store.state.tokenadmin == 1) {
            console.log(this.$store.state.token);
        }else{
            this.$router.push({ path: '/login' });
        }
    },
    data() {
        return {

        }
    },

})
</script>
