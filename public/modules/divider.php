<?php

/**
 * Generate the HTML for a divider
 *
 * @param String $icon Font-Awesome Icon
 * @param String $size Size of the Icon
 * 
 * @return Null
 */
function outputDivider($icon, $size)
{
  $divider = '<!-- Divider -->
  <br /><div class="container text-center">
  <div class="row g-0 align-items-center justify-content-center">
  <hr class="col-md-4"/>
  <div class="col-md-2 divider-icon"><i class=" text-center fas fa-' . $icon . ' fa-' . $size . 'x text-light"></i></div>
  <hr class="col-md-4"/>
  </div>
  <br />
</div>
<br />';

  return $divider;
}
