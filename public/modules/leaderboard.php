<?php
require_once('modules/leaderboard-row.php');
require_once('modules/divider.php');

/**
 * Generate the HTML for a leaderboard
 * 
 * @return Null
 */
function outputLeaderboard()
{

  $leaderboardHead = '<section class="section-black text-white mb-0" >
    <div class="container">
      <h2 class="text-center text-uppercase text-white title">Leader Board</h2>' . outputDivider('trophy', '6') . '<ul class="list-group text-center">';


  $leaderboardbottom = '</ul>
      </div>
    </section>';

  echo $leaderboardHead;
  // Make 10 rows
  for ($x = 1; $x < 11; $x++) {
    outputLeaderboardRow($x, "Username", "0000", "16 OCT 2021");
  };
  echo $leaderboardbottom;
}
