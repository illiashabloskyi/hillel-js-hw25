function openSite(url) {
  if (url.indexOf("https://") != -1 || url.indexOf("http://") != -1) {
    window.open(url);
  }
  const newUrl = "http://" + url;
  window.open(newUrl);
}
