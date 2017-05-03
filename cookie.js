function setCookie(u, p, username, password,day) {
    let d = new Date();
    d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = u + '=' + username+';'+"domain=;path=/";
    document.cookie = p + '=' + password+';'+expires;
}
function getCookie(n) {
    let name = n + '=';
    let allCookies = document.cookie.split(';');   //["u=12","p=12"]
    for (let i = 0; i < allCookies.length; i++) {
        let c = allCookies[i].trim();             //u=12,p=12
        if (c.indexOf(name) == 0)
        return c.substring(name.length, c.length);
    }
    return "";
}

function deleteAllCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let pos = cookie.indexOf("=");
        let name = pos > -1 ? cookie.substr(0, pos) : '';
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function checkCookie() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username != "" && password != '') {
        setCookie("u", "p", username, password,1);
    }
    console.log(getCookie("u"));
    console.log(getCookie("p"));
    // deleteAllCookies();
}

