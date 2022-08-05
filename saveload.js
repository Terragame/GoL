function saveToButton1() {
    for (row in currGen) {
        for (col in currGen[row]) {
            SaveOne[row][col] = currGen[row][col];
        }
    }

}

function loadToButton1() {
    for (row in currGen) {
        for (col in currGen[row]) {
            currGen[row][col] = SaveOne[row][col];
        }
    }
    updateWorld();

}

function loadLocal(lsave) {
    currGen = JSON.parse(localStorage.getItem(lsave));

    document.getElementById("demo").innerHTML = currGen;
    updateWorld();
}

function saveLocal(lsave) {
    localStorage.setItem(lsave, JSON.stringify(currGen));
}

function delLocal(lsave) {
    localStorage.removeItem(lsave);

}

function setCookie(cname, exdays) {
    let cvalue = document.getElementById('nameInp');
    if (cvalue) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue.value + ";" + expires + ";path=/";
        //alert("Name is" + cname + "=" + cvalue.value + ";" + expires + ";path=/");
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    //debugger;
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
            //      alert("C is " + c);
        }
        if (c.indexOf(name) == 0) {
            //debugger;
            //alert("Name is - " + c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    //debugger;
    return "";
}

function checkCookie() {
    //    document.getElementById("plrname").innerHTML = getCookie("username");
    let user = getCookie("username");
    if (user != "") {
        document.getElementById("plrnameloc").innerHTML = "Welcome back - " + getCookie("username");
    } else {
        document.getElementById("plrname").innerHTML = "Please enter your name below:";
        //user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 1);
        }
    }
}

function clearCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}