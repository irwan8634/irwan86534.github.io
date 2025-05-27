<?php
$nama   = htmlspecialchars($_POST['nama']);
$email  = htmlspecialchars($_POST['email']);
$pesan  = htmlspecialchars($_POST['pesan']);

$tujuan = "irwan865340@email.com";

$subjek = "Pesan dari Form Website - $nama";
$isi    = "Nama: $nama\nEmail: $email\n\nPesan:\n$pesan";

$headers = "From: $email";

if (mail($tujuan, $subjek, $isi, $headers)) {
  echo "✅ Pesan berhasil dikirim!";
} else {
  echo "❌ Gagal mengirim pesan. Coba lagi.";
}
?>
