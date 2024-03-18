console.log("Signup frontend javascript file");

function validateSignupForm() {
  const memberNick = $(".member-nick").val(); //
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("All fields must be filled out");
    return false;
  }
  if (memberPassword !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
}
