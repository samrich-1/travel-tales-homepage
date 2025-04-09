<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  // Register the user (you may want to add code to save the user details to a database)

  // Redirect to login page after registration
  header("Location: login.html");
  exit();
}
?>