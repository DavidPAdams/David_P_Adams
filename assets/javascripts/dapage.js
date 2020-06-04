let copyMyEmail = function(str) {
  let listener = function(e) { 
  	e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
  alert('Email copied to clipboard!');
};
