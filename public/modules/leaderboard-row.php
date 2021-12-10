<?php

/**
 * Generate the HTML for 1 leaderboard row
 *
 * @param Integer $rank leaderboard place
 * @param String $name Username
 * @param Integer $score highest score
 * @param Date $date Date achieved
 * 
 * @return Null
 */
function outputLeaderboardRow($rank, $name, $score, $date)
{

  $leaderboard = '<li class="list-group-item d-flex leaderboard-row">
  <div class="col-lg-2">
    <h2><span class="align-self-center badge rounded-pill bg-dark font-weight-bold">' . $rank . '</span></h2>
  </div>
  <div class="col-lg-3">
    <h2 class="text-dark font-weight-bold">' . $name . '</h2>
  </div>
  <div class="col-lg-3 align-self-center">
    <h4 class="text-dark font-weight-bold">' . $score . '</h4>
  </div>
  <div class="col-lg-3 ms-auto align-self-center">
    <h4 class="text-dark font-weight-bold">' . $date . '</h4>
  </div>
</li>';

  echo $leaderboard;
}
