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
  <?php
  outputNavigation('Sign Up');  ?>
  <section class="section-indigo text-white">
    <div class="container col-lg-5 ">
      <div class="signup">
        <h1 class="text-center title">Sign Up</h1>
        <?php echo outputDivider('plus', '2'); ?>
        <br />
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <label for="username">Username</label>
            <input id="username" type="text" class="form-control" placeholder="Username" required>
            <br />
            <label for="name">Name</label>
            <input id="name" type="text" class="form-control" placeholder="Name" required>
            <br />
            <label for="surname">Surname</label>
            <input id="surname" type="text" class="form-control" placeholder="Surname" required>
            <br />
            <label for="email">Email Address</label>
            <input id="email" type="email" class="form-control" placeholder="Email" required>
            <br />
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" required>
            <br />
            <label for="phone_number">Phone Number</label>
            <input id="phone_number" type="number" class="form-control" placeholder="Phone number" required>
          </div>
        </div>

        <br />

        <div class="text-center mt-4">
          <button type="submit" id="submit" class="btn btn-lg btn-outline-light text-center">Register Now</button>
        </div>
      </div>
    </div>
  </section>
  <section class="section-black text-white mb-0">
  </section>
  <?php outputImport(); ?>

  <script type="module" src="./js/signup.js"></script>
</body>

</html>
<?php outputFooter();  ?>