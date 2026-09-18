(function () {
  var VALID_ORIGINS = ["geelong", "melbourne", "mornington"];

  function applyHomeLinks(origin) {
    var target = "https://" + origin + ".truetally.com.au/";
    document.querySelectorAll('a[href="/"]').forEach(function (a) {
      a.setAttribute("href", target);
    });
  }

  var params = new URLSearchParams(window.location.search);
  var from = params.get("from");

  if (from && VALID_ORIGINS.indexOf(from) !== -1) {
    try {
      sessionStorage.setItem("tt_origin", from);
    } catch (e) {}
    params.delete("from");
    var query = params.toString();
    var cleanUrl = window.location.pathname + (query ? "?" + query : "") + window.location.hash;
    window.history.replaceState(null, "", cleanUrl);
  }

  var origin;
  try {
    origin = sessionStorage.getItem("tt_origin");
  } catch (e) {
    origin = null;
  }

  if (origin && VALID_ORIGINS.indexOf(origin) !== -1) {
    applyHomeLinks(origin);
  }
})();
