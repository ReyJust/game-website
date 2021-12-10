<?php

/**
 * Generate the HTML for a the page Header
 *
 * @param String $title Name of the Tab
 * 
 * @return Null
 */
function outputHeader($title)
{
  $header = '<html><head>
      <link rel="icon" href="../assets/game.ico" sizes="16x16">
      <title>' . $title . '</title>
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />

    <!-- CSS -->
    <link href="css/styles.css" rel="stylesheet" />

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>';

  echo $header;
}
