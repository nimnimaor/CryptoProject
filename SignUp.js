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
    alert ("Please enter same password");
    return false;
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()||!checkPassword()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
      

  })()
