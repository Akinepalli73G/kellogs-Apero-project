var barcodeValidation = document.getElementById("esg-barcode-validation");

barcodeValidation.addEventListener('click', function() {
  var urlExtract = window.location.href;
  var urlLanguageCountry = urlExtract.split("/");
  var loginUrl = urlLanguageCountry[3] + "/login.html";
  var succesPageUrl = barcodeValidation.href;
  
  var username = 'admin';
  var password = 'A3iYt8yU';
  var encodedCredentials = btoa(username + ':' + password);

  fetch('http://globalpromoservicedev.dmitkellogg.com/promotionservice/api/v1/token/validate?hashcode=123456ef75e4ab2afa4950447059', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + encodedCredentials,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.ok);
    if (!response.ok) {
      if (response.status === 401) {
        // Redirect to login page for authentication failure
        window.location.href = loginUrl;
      } else {
        // Redirect to login page for other API failures
        window.location.href = loginUrl;
      }
    } else {
      return response.json();
    }
  })
  .then(data => {
    // Handle the API response data here
    console.log(data);

    const entryId = "12592"; // Replace with the actual entry ID
    const apiUrl = `http://globalpaapservicedev.dmitkellogg.com/promotionservice/api/v1/promotions/entry/${entryId}/update/score`;
    const username = "gpp_denstu";
    const password = "Vt1K3lmR8i";
    const gameScore = sessionStorage.getItem("gameScore"); // Retrieve game score from session storage
    const headers = new Headers();
    headers.append("Authorization", `Basic ${btoa(`${username}:${password}`)}`);
    headers.append("Content-Type", "application/json");

    const requestBody = JSON.stringify({
      isGameCompleted: true,
      gameScore: gameScore,
    });

    fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: requestBody,
    })
      .then((response) => {
        if (response.ok) {
          // Game score update successful
          // Redirect to success page
          window.location.href = succesPageUrl;
        } else {
          // Game score update failed
          // Redirect to login page
          window.location.href = urlLanguageCountry[3] + "/login.html";
        }
      })
      .catch((error) => {
        console.log("Error occurred:", error);
        // Redirect to login page
        window.location.href = urlLanguageCountry[3] + "/login.html";
      });
  })
  .catch(error => {
    // Redirect to login page in case of API failure
    window.location.href = loginUrl;
  });
});