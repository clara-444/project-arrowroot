function copyEmailToClipboard() {
    var copyText = document.getElementById("emailAddress");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the email: " + copyText.value); // Optional: alert the user
}