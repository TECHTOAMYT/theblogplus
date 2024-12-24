function handleCredentialResponse(response) {
  // Decode the JWT response to get user information
  const jwt = response.credential;
  const userPayload = JSON.parse(atob(jwt.split(".")[1]));

  // Display user info
  const userInfoDiv = document.getElementById("user-info");
  userInfoDiv.innerHTML = `
    <img src="${userPayload.picture}" alt="Profile Picture">
    <h2>${userPayload.name}</h2>
    <p>${userPayload.email}</p>
  `;
  userInfoDiv.style.display = "block";

  console.log("User information:", userPayload);
}

// Initialize Google Sign-In Button
window.onload = () => {
  google.accounts.id.initialize({
    client_id: "AIzaSyAgDWxtKEazA4XDslpiBt6EwSvV5qiH3p0",
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.querySelector(".g_id_signin"),
    {
      theme: "outline",
      size: "large",
      type: "standard",
    }
  );

  google.accounts.id.prompt();
};
