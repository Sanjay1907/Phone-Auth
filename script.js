const firebaseConfig = {
    apiKey: "AIzaSyDR1u-rCnLqTP47ozJhN1KLskhtFwW6VVs",
  authDomain: "phone-otp-158bd.firebaseapp.com",
  databaseURL: "https://phone-otp-158bd-default-rtdb.firebaseio.com",
  projectId: "phone-otp-158bd",
  storageBucket: "phone-otp-158bd.appspot.com",
  messagingSenderId: "226865888679",
  appId: "1:226865888679:web:9a90ac904a1be3f3694a82"
  };
      firebase.initializeApp(firebaseConfig);
  render();
  function render(){
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
      // function for send message
  function phoneAuth(){
      var number = document.getElementById('number').value;
      firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
          window.confirmationResult = confirmationResult;
          coderesult = confirmationResult;
          document.getElementById('sender').style.display = 'none';
          document.getElementById('verifier').style.display = 'block';
      }).catch(function(error){
          alert(error.message);
      });
  }
      // function for code verify
  function codeverify(){
      var code = document.getElementById('verificationcode').value;
      coderesult.confirm(code).then(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'block';
          document.getElementsByClassName('n-conf')[0].style.display = 'none';
      }).catch(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'none';
          document.getElementsByClassName('n-conf')[0].style.display = 'block';
      })
  }
