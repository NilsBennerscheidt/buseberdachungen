

  document.getElementById('submitForm').onclick = function()  {
    //get Form
    var Anfrage = [
      document.getElementById('vorname').value,
      document.getElementById('nachname').value,
      document.getElementById('emailadresse').value,
      document.getElementById('nachricht').value
    ]

    // console.log(vorname, nachname, mailadresse, nachricht)
    //validate
    let allValid = false;

    Anfrage.forEach((anfragenteil, index) => {
      console.log("anfragenteil: ", anfragenteil, " index: ", index);

      if(index == 0){
        document.getElementById('vorname').classList.add("falseInput")
        let falseInput = document.createElement("span");
        falseInput.innerText = "false input"
        document.getElementById('vorname').parentElement.appendChild(falseInput)
        
        console.log("jaja")
      }else if(index == 1){
        
      }else if(index == 2){
      
      }else if(index == 3){

      }
    });

    if(allValid){

    }
  }