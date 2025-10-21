// Example vulnerable code
var userInput = "<script>alert('XSS attack? Not here');</script>";
document.write(userInput);
