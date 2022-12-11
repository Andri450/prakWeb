<?php
  
  $servername = "localhost";
  $username = "root";
  $password = "";
  $databasename = "prakweb";
  
  // CREATE CONNECTION
  $conn = new mysqli($servername, $username, $password, $databasename);
  
  // GET CONNECTION ERRORS
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  
  $q_isi1 = "SELECT * FROM isi_satu";
  $q_isi2 = "SELECT * FROM isi_dua";
  $q_foto = "SELECT * FROM foto";
  
  $isi1 = $conn->query($q_isi1)->fetch_assoc();
  $isi2 = $conn->query($q_isi2)->fetch_assoc();
  $foto = $conn->query($q_foto)->fetch_assoc();
  
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="asset/css/bootstrap.min.css">
    <link rel="stylesheet" href="asset/css/gaya.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script src="asset/js/jquery.min.js"></script>

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> -->
    <script src="asset/js/bootstrap.min.js"></script>

    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

</head>

<body class="w-gelap">

    <!-- navbar -->
    <nav class="w-gelap">
        <!-- logo -->
        <div class="logo">
            <h3>
                <div class="adr w-logo">Andr</div>
                <div class="ianim">!</div>&nbsp;&nbsp;
                <div class="tanim w-logo">.</div>
            </h3>
        </div>

        <!-- nav -->
        <ul>
            <li><a class="link w-terang" id="btn-home">Home</a></li>
            <li><a class="link w-terang" id="btn-ttg">Tentang</a></li>
        </ul>

        <div class="btnm">
            <p class="sidebtn" onclick="openNav();">Menu</p>
        </div>

        <!-- side nav -->
        <div id="mySidenav" class="sidenav">
            <span href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</span>
            <a id="btn-home">Home</a>
            <a id="btn-ttg">Tentang</a>
        </div>

    </nav>

    <!-- /navbar -->

    <div class="container-fluid" id="awal">
        <div class="box-tulisan col-6">
            <div style="color: white;">
                <p>Hi, My name is</p>
                <h1>Andri Setiawan</h1>
                <h3><?= $isi1['isi_satu'] ?></h3>
                <hr>
                <p class="note"></p>
            </div>
        </div>
        <div class="">
            <img class="gunung img-fluid" src="asset/foto/gunung.png">
            <img class="awan img-fluid" src="asset/foto/awan3.png">
        </div>
    </div>

    <div class="saklar">

        <p class="mode" style="display: none;">Gelap</p>

        <div class="bulan"><img src="asset/foto/bulan3.png" /></div>

        <div class="matahari"><img src="asset/foto/matahari.png" /></div>

    </div>

    <div class="container-fluid p-3 mb-5">
        <div class="container badan w-gelap p-3 mb-5">
            <div class="m1 col-md-12">
                <div class="row">
                    <div class="col-4 bimg">
                        <center>
                            <img class="fot img-fluid img" src="asset/foto/<?= $foto['foto'] ?>">
                        </center>
                    </div>
                    <hr>
                    <div class="col w-terang ttg" id="tentang">
                        <h5 class="text-center">About Me.</h5>
                        <p><?= $isi2['isi_dua'] ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="asset/js/app.js"></script>
    <script src="asset/js/velocity.js"></script>

</body>

</html>

<?php
    $conn->close();
?>
