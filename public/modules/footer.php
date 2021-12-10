<?php

/**
 * Generate the HTML for the footer
 *
 * @return Null
 */
function outputFooter()
{
    $footer = '<!-- Footer-->
<footer class="footer section-indigo text-light">
    <div class="container">
        <div class="row ">
            <div class="col-lg-6">
                <h4 class="text-uppercase mb-4 title  text-center">About</h4>
                <p class="lead mb-0 ">
                    This website is intended to recreate a commercial application of a video game website.To do so, HTML, CSS, JavaScript and PHP are used.<br />
                    Also Bootstrap have been use for a better implementation of the css and I found inspiration on free Templates.
                    CST2120 Coursework.
                </p>
            </div>
            <div class="col-lg-6 text-center">
                <h4 class="text-uppercase mb-4 title">Share your score</h4>
                <br/>
                <div class="row-lg-12 text-center">
                    <a class="btn btn-lg btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                </div>
                <br/>
                <div class="row-lg-12 text-center">
                    <a class="btn btn-lg btn-outline-light btn-social mx-3" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
<section class="copyright py-4 text-white row">
    <div class="container text-start col-lg-5"><small>Made with &#128156 by Justin Mayer</small></div>
    <div class="container text-right col-lg-5"><small>A Web Application and Database Coursework</small>
    </div>
</section>
</html>';
    echo $footer;
}
