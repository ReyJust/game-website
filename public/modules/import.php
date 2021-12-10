<?php

/**
 * Generate the HTML for the js imports
 *
 * @return Null
 */
function outputImport()
{
  $import = '<!-- Bootstrap JS for navbar animation -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Javascript -->
    <script src="js/scripts.js"></script>';
  echo $import;
}
