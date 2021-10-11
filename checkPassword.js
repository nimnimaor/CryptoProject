function checkPassword() {
  var password1 = document.getElementById("Password").value;
  var password2 = document.getElementById("re-password").value;
  if(password1 === password2)
  {
      alert("ok!");
      return true;
  }
  else
  {
    alert ("No No No !! N.K");
    return false;
  }
}




