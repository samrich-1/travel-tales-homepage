<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username == 'admin' && $password == 'password') {
    echo "Login successful!";
  } else {
    echo "Invalid username or password.";
  }
}
?>