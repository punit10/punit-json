<?php
include('dbconnect.php');
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$date = $_POST['date'];
$sort=$_POST['sort'];
if ($id) {
    $qry = "UPDATE `messages` SET `name`='$name',`email`='$email',
        `message`='$message',`date`='$date' WHERE `id`='$id' ";
} else {
    $qry = "INSERT INTO `messages`(`name`, `email`, `message`, `date`)
    VALUES ('$name','$email','$message','$date') ";
}
$result = mysqli_query($con, $qry);
