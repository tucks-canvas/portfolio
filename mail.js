var btn = document.getElementById('sendbtn');
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

btn.addEventListener('click', function(e){

    e.preventDefault()
    var name = document.getElementById('Name').value;
    var subject = document.getElementById('Subject').value;
    var email = document.getElementById('Email').value;
    var message = document.getElementById('Message').value;
    var body = 'Name: ' +name + '<br/> Email: ' +email + '<br/> Subject: ' +subject + '<br/> Message: ' +message;

    Email.send({
        SecureToken : "e6b49c08-6039-4082-b248-48e35f958c93",
        To : 'josiahjohngreen@gmail.com',
        From : "josiahjohngreen@gmail.com",
        Subject : "Website Contact Message!", 
        Body : body
    }).then(
      message => alert(message)
    );

})
