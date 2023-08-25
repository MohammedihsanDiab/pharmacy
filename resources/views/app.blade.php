<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/bootstrap1.min.css" />

    <link rel="stylesheet" href="assets/css/themify-icons.css" />

    <link rel="stylesheet" href="assets/css/swiper.min.css" />

    <link rel="stylesheet" href="assets/css/select2.min.css" />

    <link rel="stylesheet" href="assets/css/nice-select.css" />

    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.css')}}" />

    <link rel="stylesheet" href="assets/css/gijgo.min.css" />

    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/tagsinput.css" />

    <link rel="stylesheet" href="assets/css/jquery.dataTables.min.css" />
    <link rel="stylesheet" href="assets/css/responsive.dataTables.min.css" />
    <link rel="stylesheet" href="assets/css/buttons.dataTables.min.css" />

    <link rel="stylesheet" href="assets/css/summernote-bs4.css" />

    <link rel="stylesheet" href="assets/css/morris.css">

    <link rel="stylesheet" href="assets/css/material-icons.css" />

    <link rel="stylesheet" href="assets/css/metisMenu.css">

    <link rel="stylesheet" href="assets/css/style1.css" />
    <link rel="stylesheet" href="assets/css/default.css" id="colorSkinCSS">
    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/stylee.css">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
        <link rel="stylesheet" href="{{asset('scss/_site-navbar.scss')}}">


    <title>Document</title>
    @vite(['resources/js/app.js'])

<style>
    .ff{
        font-size: 15px;
    display: block;
    margin-bottom: 0;
    color: #b3b3b3;
    }
    .owl-carousel {
    display: block;
    width: 100%;
    z-index: 1;
}

</style>
</head>
<body>
    
    <div id="app">
        
         
        <header-component></header-component>
        <router-view></router-view>
        <example-component></example-component>

        <footer class="site-footer bg-light">
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-md-4 col-lg-3 mb-4 mb-lg-0">

                        <div class="block-7">
                            <h3 class="footer-heading mb-4">About <strong class="text-primary">Pharmative</strong></h3>
                            <p>A pharmacy that allows you to buy medicines and provide consultations via the Internet.</p>
                        </div>

                    </div>
                    

                    <div class="col-md-4 col-lg-2">
                        <div class="block-5 mb-5">
                            <h3 class="footer-heading mb-4">Contact Info</h3>
                            <ul class="list-unstyled">
                                <li class="address">Tofah - Gaza - Palestine</li>
                                <li class="phone"><a href="tel://23923929210">+972595172263</a></li>
                                <li class="email">azazazaz5172263@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer> 
    

        
    <script src="https://js.stripe.com/v3/"></script>

    <!-- <script src="{{ mix('js/app.js') }}"></script> -->

    
    </div>


    <script src="assets/js/jquery-ui.js" defer></script>
    <script src="assets/js/popper.min.js" defer></script>
    <script src="assets/js/bootstrap.min.js" defer></script>
    <script src="assets/js/owl.carousel.min.js" defer></script>
    <script src="assets/js/jquery.magnific-popup.min.js" defer></script>
    <script src="assets/js/aos.js" defer></script>
    <script src="assets/js/slick.min.js" defer></script>
    <script src="assets/js/jquery-3.3.1.min.js" defer></script>
    <script src="assets/js/main.js" defer></script>
</body>

</html>

