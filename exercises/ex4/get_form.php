<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Php edit</title>
</head>

<body>
    <section>
        Welcome
        <?php
            $nameErr = $emailErr = $passErr = "";
            $name = $_GET["name"];
            $email = $_GET["email"];
            $password = $_GET["pass"];
            /* const password */
            $cpassword = "Ok#123";
            
            if (preg_match("/^(?!.{51,})(\w+\s+\w+ ?)$/",$name)) {
                echo "<h2>" .$name. "</h2>";
            }
            else {
                $nameErr = "Invalid Full Name format";
                echo "<h2>" .$nameErr. "</h2>";
            }

            if (preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",$email)) {
                echo "<h2>" .$email. "</h2>";
            }
            else {
                $emailErr = "Invalid email format";
                echo "<h2>" .$emailErr. "</h2>";
            }

            if ($password == $cpassword) {
                echo "<h2> user " .$password. "</h2>";
            }
            else {
                $passErr = "Invalid password";
                echo "<h2>" .$passErr. "</h2>";
            }
        ?>
    </section>
</body>

</html>