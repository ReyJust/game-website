<!-- IMPORTS -->
<?php require_once('modules/head.php');
require_once('modules/leaderboard.php');
require_once('modules/navigation.php');
require_once('modules/footer.php');
require_once('modules/import.php');
?>

<!DOCTYPE html>
<?php outputHeader('Home');  ?>

<body>
  <?php
  outputNavigation('Leader board');
  outputLeaderboard();
  outputImport(); ?>
  <script type="module" src="./js/isLoggedIn.js"></script>
  <script type="module" src="./js/leaderboard.js"></script>
</body>

</html>
<?php outputFooter();  ?>