<?php
	if($_POST["us_name"] && $_POST["us_phone"]) {
		$message = "<h3>Уважаемый администор сайта,</h3>
		На сайте была отправлена форма с такими данными:<br><br>
		Форма: <b>".$_POST["us_name"]."</b><br>
		Телефон: <b>".$_POST["us_phone"]."</b><br>
		С уважением система сайта.";
		$to = "Drhell@yandex.ru";
		$from = "support@apl-service";
		$subject = "apl-service";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		if(mail($to, $subject, $message, $headers)) echo 7;
		else echo 2;
	}
	elseif($_POST["us_name"] && $_POST["us_phone"]) {
		$message = "<h3>Уважаемый администор сайта,</h3>
		На сайте была отправлена форма с такими данными:<br><br>
		Форма: <b>".$_POST["us_name"]."</b><br>
		Телефон: <b>".$_POST["us_phone"]."</b><br>
		С уважением система сайта.";
		$to = "Drhell@yandex.ru";
		$from = "support@apl-service";
		$subject = "apl-service";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		if(mail($to, $subject, $message, $headers)) echo 7;
		else echo 2;
	}
?>