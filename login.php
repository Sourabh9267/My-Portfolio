<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
<?php
// Replace 'your_host', 'your_username', 'your_password', and 'MYDB' with your actual database credentials
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'mydb';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Prepare the SQL query
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = :username AND password = :password");

        // Bind parameters
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);

        // Execute the query
        $stmt->execute();

        // Check if the login is successful
        if ($stmt->rowCount() === 1) {
            echo "Login successful!";
            header("Location: dashboard.php");
            // You can redirect the user to another page here if needed
           
        } else {
            echo "Invalid username or password.";
        }
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>


<body>
    
</body>
</html>
