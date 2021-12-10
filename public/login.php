<!-- IMPORTS -->
<?php require_once('modules/head.php');
require_once('modules/navigation.php');
require_once('modules/divider.php');
require_once('modules/footer.php');
require_once('modules/import.php');
?>

<!DOCTYPE html>
<?php outputHeader('Home');  ?>

<body>
  <?php outputNavigation('Log In');  ?>
  <section class="section-indigo text-white">
    <div class="container col-lg-5 ">
      <div class="signup">
        <h1 class="text-center title">Log In</h1>
        <?php echo outputDivider('key', '2'); ?>
        <br />
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <label for="username">Username</label>
            <input id="username" type="text" class="form-control" placeholder="Username" required>
            <br />
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" required>
          </div>
        </div>
        <br />
        <div class="text-center mt-4">
          <button type="submit" id="submit" class="btn btn-lg btn-outline-light text-center">Log In</button>
        </div>
      </div>
  </section>
  <section class="section-black text-white mb-0">
  </section>
  <?php outputImport(); ?>
  <script type="module" src="./js/login.js"></script>
</body>

</html>
<?php
outputFooter();  ?>