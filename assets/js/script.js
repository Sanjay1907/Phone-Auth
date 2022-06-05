var firebaseConfig = {
    apiKey: "AIzaSyBAoxTTCYebCPvwJwdWGyvEfeYdLYfqn_Y",
  authDomain: "phone-auth-12dd4.firebaseapp.com",
  projectId: "phone-auth-12dd4",
  storageBucket: "phone-auth-12dd4.appspot.com",
  messagingSenderId: "200067738483",
  appId: "1:200067738483:web:af32d4276fab248da7b306"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
window.onload = function() {
    render();
};

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function sendOtp() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        console.log(coderesult);
        alert("Check Inbox....Message sent..Press Next Button and verify Otp");
    }).catch(function(error) {
        alert(error.message);
    });
}
function nextPage() {
    window.location.src = "verification.html";
  }
function verifyOtp() {
    var code = document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function(result) {
        alert("Verified Successfully");
        var user = result.user;
        console.log(user);
    }).catch(function(error) {
        alert(error.message);
    });
}
