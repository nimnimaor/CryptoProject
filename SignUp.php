<?php $host = "ec2-34-228-154-153.compute-1.amazonaws.com";
$user = "opflbumqkeqsgg";
$pass = "0d84a9a649dc42a8b02c8e18b932a72b499aaec479d6250380b23bc6fc785831";
$db="d80ptr5co3t6sc";
$con = pg_connect("host=$host dbname=$db user=$user password=$pass") or die ("could not connect to Server\n");

if(!$con)
{
    echo "Error : Unable to open db\n";
}
else{
    $UserName = $_post['UserName'];
    $Email = $_post['Email'];
    $Password = $_post['Password'];

    $query = "INSERT INTO users (UserName,Email,Password) VALUES ('$UserName','$Email','$Password')";
    $result = pg_query($con,$query);  
}
pg_close($con);
?>