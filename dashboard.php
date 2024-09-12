<!DOCTYPE html>
<html>
<head>
    <title>Dashboard - List of Files</title>
</head>
<body>
    <h2>Welcome to the Dashboard!</h2>
    <p>Here is the list of files available on the server:</p>
    <ul>
        <?php
        $directory = 'files';
        $filesList = array_diff(scandir($directory), array('.', '..'));
        foreach ($filesList as $file) {
            echo "<li><a href='files/{$file}' target='_blank'>{$file}</a></li>";
        }
        ?>
    </ul>
</body>
</html>



