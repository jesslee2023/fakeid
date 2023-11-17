"use strict";

function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      document.getElementById("userInfo").style.display = "block";
      document.getElementById("userInfo").innerHTML = `
                <img src="${user.picture.large}" alt="User Image" class="user-img">
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}</p>
                <p>Gender: ${user.gender}</p>
            `;
    })
    .catch((error) => console.log(error));
}
