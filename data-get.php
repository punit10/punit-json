<?php
include('dbconnect.php');
$sort = $_POST['sort'];
if ($sort) {
    $qry = "SELECT * FROM `messages` ORDER BY `date` DESC";
} else {
    $qry = "SELECT * FROM messages ORDER BY `id` DESC";
}
$res = mysqli_query($con, $qry);
if (mysqli_num_rows($res) > 0) {
    $data_array = array();
    while ($rows = mysqli_fetch_assoc($res)) {
        $data_array[] = $rows;
    }
}
echo (json_encode($data_array));
