<!-- IMPORTS -->
<?php require_once('modules/head.php');
require_once('modules/navigation.php');
require_once('modules/divider.php');
require_once('modules/achievements.php');
require_once('modules/footer.php');
require_once('modules/import.php');
?>

<!DOCTYPE html>
<?php
outputHeader('Home');  ?>

<body>
  <?php
  outputNavigation('My Account');  ?>
  <section class="section-indigo text-white">
    <div class="container">
      <?php echo outputDivider('user', '4'); ?>
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="row">
            <div class="col-lg-5 text-center" id="avatar" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="./assets/img/avatars/wolf.png" alt="Wolf" class="avatar" id="main-avatar">

            </div>
            <div class="col">
              <h3 class="title" id="username">Username</h3>
              <h4 id="highscore"> Highscore: 0000</h4>
            </div>


          </div>
          <br />
          <div class="row" style="padding-left: 5%;">
            <br />
            <input id="slogan" type="text" placeholder="Your Feeling" value="Today I'm feeling really lucky!">
          </div>
        </div>


        <div class="col-lg-5">

          <h3 class="title">General Informations</h3>
          <br />
          <ul id="general">
            <li>email</li>
            <li>Name</li>
            <li>Surname</li>
            <li>Phone Number</li>
            <li>Date created</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Select Avatar</h5>
        </div>
        <div class="modal-body">
          <div class="row text-center">
            <div class="image-container">
              <img src="./assets/img/avatars/wolf.png" alt="wolf" class="avatar avatar-item image-list-item ">
            </div>

            <div class="image-container">
              <img src="./assets/img/avatars/dragon.png" alt="dragon" class="avatar image-list-item">
            </div>

            <div class="image-container">
              <img src="./assets/img/avatars/eagle.png" alt="eagle" class="avatar image-list-item">
            </div>

            <div class="image-container">
              <img src="./assets/img/avatars/lion.png" alt="lion" class="avatar image-list-item">
            </div>

            <div class="image-container">
              <img src="./assets/img/avatars/shark.png" alt="shark" class="avatar image-list-item">
            </div>

            <div class="image-container">
              <img src="./assets/img/avatars/dodo.png" alt="dodo" class="avatar image-list-item">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="saveAvatar">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <?php
  outputAchievements("", "Name", "Description", "true");
  outputImport(); ?>
  <script type="module" src="./js/isLoggedIn.js"></script>
  <script type="module" src="./js/account.js"></script>
</body>

</html>
<?php
outputFooter();  ?>