<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];

$mail->isSMTP();
$mail->Host = 'mail.hosting.reg.ru';
$mail->SMTPAuth = true;
$mail->Username = 'robot@remwoodwind.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qwerty123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('robot@remwoodwind.ru'); // От кого будет уходить письмо
$mail->addAddress('moskitnet@mail.ru');     // Кому будет уходить письмо
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$mail->Body    = 'Имя: '.$name. '<br>Номер телефона: '.$phone. '<br>Эл. почта: '.$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: success.html');
}
?>