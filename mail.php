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
$mail->Password = 'H1u8K7v9'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('robot@remwoodwind.ru'); // От кого будет уходить письмо
$mail->addAddress('moskitnet@mail.ru');     // Кому будет уходить письмо
$mail->isHTML(true);

$body = '<h2>Заявка на обратную связь</h2>';
$body.= '<p><b>Имя: </b>'.$name.'</p>';
$body.= '<p><b>Телефон: </b>'.$phone.'</p>';
$body.= '<p><b>Эл. почта: </b>'.$email.'</p>';

$mail->Subject = 'Заявка с сайта';
$mail->Body    = $body;

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: success.html');
}
?>