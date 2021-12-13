document.addEventListener("DOMContentLoaded", function() {
    fields.Name = document.getElementById('Name');
    fields.email = document.getElementById('email');
    fields.PhoneNo = document.getElementById('PhoneNo');
   })
   function validateForm() {
    return checkPhone(),isEmail(email);
}
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function checkPhone() {
    var phone = document.forms["myForm"]["PhoneNo"].value;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(phone.value.match(phoneNum)) {
            return true;
        }
        else {
            document.getElementById("PhoneNo").className = document.getElementById("PhoneNo").className + " error";
            return false;
        }
    }
