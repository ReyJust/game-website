<?php

/**
 * Generate the HTML for the navigation Bar
 *
 * @param String $title Tab name
 * 
 * @return Null
 */
function outputNavigation($title)
{
    $linkNames = array("Home", "Leader board", "Log In", "Sign Up");
    $linkAddresses = array("index.php", "leaderboard.php", "login.php", "signup.php");
    $className = array("index", "leaderboard", "login", "signup.php");

    $navigation = '<!-- Navigation-->
    <nav class="navbar navbar-expand-lg text-uppercase fixed-top navbar-custom" id="mainNav">
        <div class="container">
            <a class="navbar-brand navbar-brand-custom text-light" href="/index.php">Game Website</a>

            <button class="navbar-toggler font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul id="navbar" class="navbar-nav ml-auto">';

    echo $navigation;
    //Output navigation
    for ($x = 0; $x < count($linkNames); $x++) {
        echo '<li class="nav-item mx-0 mx-lg-1 ' . $className[$x] . '"><a ';
        if ($linkNames[$x] == $title) {
            echo 'class="nav-link py-3 px-0 px-lg-3 rounded active"';
        } else {
            echo 'class="nav-link py-3 px-0 px-lg-3 rounded"';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a></li>';
    }

    echo "</ul>
            </div>
        </div>
    </nav>';";
}
