function handleCredentialResponse(response) {
  // Decode the JWT token
  const jwt = response.credential;
  const userPayload = JSON.parse(atob(jwt.split(".")[1]));

  // Display user info
  document.getElementById("user-pic").src = userPayload.picture;
  document.getElementById("user-name").innerText = userPayload.name;
  document.getElementById("user-email").innerText = userPayload.email;

  const userInfoDiv = document.getElementById("user-info");
  userInfoDiv.style.display = "block";

  console.log("User information:", userPayload);
}

// Initialize the Google Sign-In button
window.onload = () => {
  google.accounts.id.initialize({
    client_id: "1066809650818-4ida6c8qa594h9v3s5ce427ts1ssck7t.apps.googleusercontent.com", // Your Client ID
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("g_id_signin"), // Target container
    {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "rectangular",
      text: "signin_with", // Customize button text
    }
  );

  // Optionally prompt user to sign in automatically if already signed in
  google.accounts.id.prompt();
};
