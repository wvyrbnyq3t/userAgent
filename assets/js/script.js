const btnGetUserAgent = document.getElementById('btnGetUserAgent');
btnGetUserAgent.addEventListener("click", () => {
  alert(window.navigator.userAgent.toLowerCase());
})