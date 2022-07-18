console.log('Starting debug');
function getInputFromTextBox() {
  /*var input = document.getElementById("age").value;
  if (input < 18){
    window.alert("You are not eligible to visit the website.");
  }*/
  var departureCountry = document.getElementById("departurecountry").value;
  var arrivalCountry = document.getElementById("arrivalcountry").value;
  var tripStart = document.getElementById("tripstart").value;
  var tripReturn = document.getElementById("tripreturn").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var passenger1Name = document.getElementById("passenger1name").value;
  var passenger2Name = document.getElementById("passenger2name").value;

  console.log('departureCountry '+departureCountry);
  console.log('departureCountry '+arrivalCountry);
  console.log('tripStart '+tripStart);
  console.log('tripReturn '+tripReturn);
  console.log('email '+email);
  console.log('passenger1Name '+passenger1Name);
  console.log('passenger2Name '+passenger2Name);

  var ele = document.getElementsByName('exampleRadios');
              
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      console.log(ele[i].value);
  }

  if(departureCountry === "" || arrivalCountry === "" || tripStart === "" || tripReturn === "" || email === "" || phone === ""){
    window.alert("Please fill all the mandatory inputs. All mandatory inputs are marked with *");
  } else if ((passenger1Name != "" && passenger1Name.length >5)||(passenger2Name != "" && passenger2Name.length >5)) {
    window.alert("The passenger name cannot be more than 5 characters.");
  } else {
    window.alert("Success");
  }

}
function isReturn() {
    if (document.getElementById('roundtrip').checked) {
        document.getElementById('return').style.visibility = 'visible';
    }
    else document.getElementById('return').style.visibility = 'hidden';

}
