export const formatMoney = function (t, e = simply.moneyFormat) {
  /* Shopify Money Format */
  function o(t, e) {
    return void 0 === t ? e : t
  }
  function i(t, e, i, r) {
    if (e = o(e, 2),
      i = o(i, ","),
      r = o(r, "."),
      isNaN(t) || null == t)
      return 0;
    t = (t / 100).toFixed(e);
    var n = t.split(".");
    return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? r + n[1] : "")
  }
  "string" == typeof t && (t = t.replace(".", ""));
  var r = ""
    , n = /\{\{\s*(\w+)\s*\}\}/
    , a = e || this.money_format;
  switch (a.match(n)[1]) {
    case "amount":
      r = i(t, 2);
      break;
    case "amount_no_decimals":
      r = i(t, 0);
      break;
    case "amount_with_comma_separator":
      r = i(t, 2, ".", ",");
      break;
    case "amount_with_space_separator":
      r = i(t, 2, " ", ",");
      break;
    case "amount_with_period_and_space_separator":
      r = i(t, 2, " ", ".");
      break;
    case "amount_no_decimals_with_comma_separator":
      r = i(t, 0, ".", ",");
      break;
    case "amount_no_decimals_with_space_separator":
      r = i(t, 0, " ");
      break;
    case "amount_with_apostrophe_separator":
      r = i(t, 2, "'", ".")
  }
  return a.replace(n, r)
};

export const setCookie = (cname, cValue, exDays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cValue + ";" + expires + ";path=/";
};

export const getCookie = cname => {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
export const overFlowHidden = (enable = true) => {
  if (enable) {
    qs('body').classList.add('overflow-hidden');
    qs('html').classList.add('overflow-hidden');
  }
  else {
    qs('body').classList.remove('overflow-hidden');
    qs('html').classList.remove('overflow-hidden');
  }
}
export const appendStyle = (css) => {
  if (!css) {
    return false;
  }
  let head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};
export const serializeForm = form => {
  const formData = new FormData(form);
  var data = new URLSearchParams();
  for (const pair of formData) {
    data.append(pair[0],pair[1])
  }
  return data;
};

export const setLocalData = (dataId, data) => {
  /* Set local data */
  if (dataId == null || data == null) {
    console.log("Missing valid id or parameter");
    return;
  }
  return localStorage.setItem(dataId, data);
};

export const getLocalData = (dataId) => {
  /* Get local data */
  if (dataId == null) {
    console.log("Missing valid id or parameter");
    return;
  }
  return localStorage.getItem(dataId);
};