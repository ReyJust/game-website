<?php
require_once('divider.php');

/**
 * Generate the HTML for each Achievement
 *
 * @param String $image image url
 * @param String $name achievement name
 * @param String $description achievement description
 * @param Boolean $isDone tell if achievement is done
 * 
 * @return Null
 */
function outputAchievements($image, $name, $description, $isDone)
{
  $achievements = '<div class="col-lg-6 achievement">
  <div class="row align-items-center">
    <div class="col-lg text-right achievement-item">
      <img class="achievement-img" src="data:' . $image . '," alt>
    </div>
    <div class="col text-start">
    <div class="row">
    ' . $name . '
    </div>
    <div class="row">
    ' . $description . ' 
      </div>
    </div>';
  $achievementHead = '<section class="section-black text-white mb-0">
    <div class="container">
      ' . outputDivider('star', '4') . '
      <br />
      <div class="row justify-content-center">';


  echo $achievementHead;
  for ($x = 0; $x < 6; $x++) {
    echo $achievements;
    if ($isDone) {
      echo "
      <div class='col-lg text-start'>
        <i class='fas fa-check'></i>
      </div>";
    }
    echo '</div></div>';
  };
  echo '</div>
  </div>
</section>';
}
