


function getinput (){
  var keineFalscheEingabe = true;
  const vname = function () {
    let m = document.getElementById('vorname');
    if (m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe vorname")
    }
  }

  const nname = function () {
    let m = document.getElementById('nachname');
    if (m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe nachname")
    }

  }

  const email = function () {
    let m = document.getElementById('emailadresse');
    if (validateEmail(m.value) && m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe mail")
    }
  }

  const nachricht = function () {
    let m = document.getElementById('nachricht');
    if (m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe nachricht")
    }
  }

  console.log(vname())
  console.log(nname())
  console.log(email())
  console.log(nachricht())
  return [vname(), nname(), email(), nachricht(), keineFalscheEingabe]
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function fFalscheEingabe(pBetroffenesElement) {
  //Implement Error Handeling
  return pBetroffenesElement
}