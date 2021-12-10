<!--
Comment of different section are display inside php modules only to avoid duplication.
You can consult them in modules files or after html injection on the developer console.
-->

<!-- IMPORTS -->
<?php require_once('modules/head.php');
require_once('modules/navigation.php');
require_once('modules/leaderboard.php');
require_once('modules/footer.php');
require_once('modules/import.php'); ?>

<!DOCTYPE html>
<?php outputHeader('Home');  ?>

<body>
    <?php outputNavigation('Home');  ?>
    <!-- Landing Page -->
    <section class="section-indigo text-white text-center">
        <div class="row">
            <div class="container align-middle col-lg-6">
                <h1 class="title text-uppercase mb-0">Play Chrome Dino like never before!</h1>
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="/login.php">
                        Play Now!
                    </a>
                </div>
            </div>
            <!-- Image -->
            <div class="container align-items-center col-lg-4">
                <img src="/assets/img/gamePic.png" class="" id="MainImage" alt="Responsive image">
            </div>
        </div>


        </div>
    </section>
    <?php outputLeaderboard();
    outputImport(); ?>
    <script type="module" src="./js/leaderboard.js"></script>
    <script type="module" src="./js/isLoggedIn.js"></script>
</body>
<?php outputFooter();  ?>