<!-- IMPORTS -->
<?php require_once('modules/head.php');
require_once('modules/divider.php');
require_once('modules/navigation.php');
require_once('modules/footer.php');
require_once('modules/import.php');
?>

<!DOCTYPE html>
<?php
outputHeader('Home');  ?>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

<body id="myGame">
  <?php
  outputNavigation('Play');  ?>
  <section class="section-black align-middle text-center" id="game-section">
    <?php echo outputDivider('gamepad', '4'); ?>
  </section>
  <?php outputImport(); ?>
  <script type="module" src="./js/isLoggedIn.js"></script>
  <script type="module" src="./js/game/game.js"></script>
</body>

</html>
<?php outputFooter();  ?>