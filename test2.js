function validateForm() {
      const name = document.forms["messageUs"]["name"].value;
      const email = document.forms["messageUs"]["email"].value;
      const phone = document.forms["messageUs"]["phone"].value;
      const birth = document.forms["messageUs"]["birth"].value;
      const gender = document.forms["messageUs"]["gender"].value;
      const message = document.forms["messageUs"]["message"].value;

      if (name === "" || email === "" || phone === "" || birth === "" || gender === "" || message === "") {
            document.getElementById("error").innerHTML = "Please complete the form before submitting.";
            return false;
      } else {
            document.getElementById("senderName").textContent = "Full Name: " + name;
            document.getElementById("senderEmail").textContent = "Email: " + email;
            document.getElementById("senderPhone").textContent = "Phone Number: " + phone;
            document.getElementById("senderBirth").textContent = "Date of Birth: " + birth;
            document.getElementById("senderGender").textContent = "Gender: " + gender;
            document.getElementById("senderMessage").textContent = "Message: " + message;

            // Menampilkan elemen senderInfo
            document.getElementById("senderInfo").style.display = "block";

            // Menghilangkan pesan error jika ada
            document.getElementById("error").innerHTML = "";

            return false; // Mengembalikan false agar halaman tidak refresh
      }
}
