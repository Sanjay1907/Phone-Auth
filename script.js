const firebaseConfig = {
    apiKey: "AIzaSyCsYLrgAl_SC_Dl2YnraLAnhuTTJpl42-A",
    authDomain: "credit-card-fraud-detect-5e545.firebaseapp.com",
    projectId: "credit-card-fraud-detect-5e545",
    storageBucket: "credit-card-fraud-detect-5e545.appspot.com",
    messagingSenderId: "425751419755",
    appId: "1:425751419755:web:58292baf54e318660e0a2e",
    measurementId: "G-JS0CYPMDW5"
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
