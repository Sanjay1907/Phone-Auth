var firebaseConfig = {
    apiKey: "AIzaSyBfjdiuXLpUcIERAxIVdIVH_5oRd-1gA8c",
    authDomain: "phone-auth-ba917.firebaseapp.com",
    projectId: "phone-auth-ba917",
    storageBucket: "phone-auth-ba917.appspot.com",
    messagingSenderId: "252592548392",
    appId: "1:252592548392:web:2938c3c8cae6475e5ea31d",
    measurementId: "G-C6XJ8ZKWCV"
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