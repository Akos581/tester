<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nev = strip_tags(trim($_POST["nev"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $uzenet = trim($_POST["uzenet"]);

    if (empty($nev) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($uzenet)) {
        die("Hibás űrlapadatok. Kérlek, töltsd ki újra.");
    }

    // Címzett e-mail címed
    $to = "SAJAT_EMAIL_CIMED@pelda.hu";
    $subject = "Kapcsolatfelvétel: $nev";
    $body = "Név: $nev\nE-mail: $email\n\nÜzenet:\n$uzenet";
    $headers = "From: $nev <$email>";

    if (mail($to, $subject, $body, $headers)) {
        echo "Köszönjük! Az üzeneted elküldtük.";
    } else {
        echo "Hiba történt az üzenet küldése közben.";
    }
} else {
    http_response_code(403);
    echo "Hibás kérés.";
}
