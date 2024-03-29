//função para botao de retorno
function back(){
    document.getElementById("page-register").style.display="block";
    document.getElementById("page-sucess").style.display="none";
    return
}
//esconte o sucess ao carregar a pagina
document.getElementById("page-sucess").style.display="none";

const form = document.querySelector("#validation");

form.onsubmit = event => {
    let=cont=0;
    //constantes
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i
    const passwordRegex = /[0-9]/i
    const phoneRegex = /[0-9]/i

    // Receber o valor do campo
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let phone = document.querySelector("#phone").value;
    let birthday = document.querySelector("#date").value;
    let checkbox = document.getElementById('checkbox');

    //remove o conteudo o alert
    document.getElementById("alertName").innerHTML = "<p></p>";
    document.getElementById("alertEmail").innerHTML = "<p></p>";
    document.getElementById("alertPassword").innerHTML = "<p></p>";
    document.getElementById("alertPhone").innerHTML = "<p></p>";
    document.getElementById("alertDate").innerHTML = "<p></p>";
    document.getElementById("alertCheck").innerHTML = "<p></p>";

    //let e = document.querySelector(".alert")


    // Verificar campo name
    if (name === "") {
        event.preventDefault();
        document.getElementById("alertName").innerHTML = "<p>Fullname invalid</p>";  
        //e.style.display="flex"
    }else cont++
    //console.log(cont)
    if (name.length < 4 || (name = (string) => /\s/g.test(string))===true) {
        event.preventDefault();
        document.getElementById("alertName").innerHTML = "<p>Fullname invalid</p>";
    }else cont++

    // verifica campo email
    if (email === "") {
        event.preventDefault();
        document.getElementById("alertEmail").innerHTML = "<p>Email invalid</p>";
    
    }else cont++
    if (emailRegex.test(email) === true){
        event.preventDefault();
        document.getElementById("alertEmail").innerHTML = "<p>Email invalid</p>";
        console.log("true")
    }else cont++

    //verifica campo password
    if(passwordRegex.test(password)===false){
        event.preventDefault();
        document.getElementById("alertPassword").innerHTML = "<p>Password invalid</p>";
    }else cont++
    if(password.length <= 4 && password.length >= 9){
        event.preventDefault();
        document.getElementById("alertPassword").innerHTML = "<p>Password invalid</p>"; 
    }else cont++

    //verifica campo phone && passwordRegex.test(phone)===false
    if(phoneRegex.test(phone)===false ){
        event.preventDefault();
        document.getElementById("alertPhone").innerHTML = "<p>Phone invalid</p>";     
    }else cont++
    //document.getElementById("alertPhone").innerHTML = "<p>Phone invalid</p>";   

    //verifica campo birthday
    if(birthday === ""){
        event.preventDefault();
        document.getElementById("alertDate").innerHTML = "<p>Date invalid</p>";     
    }else cont++


    //verifica campo do checklist
    if(checkbox.checked===false) {
        event.preventDefault();
        document.getElementById("alertCheck").innerHTML = "<p>Checkbox invalid</p>";
        console.log("O não cliente marcou o checkbox");
    }else cont++
   
    if(cont===9){
        document.getElementById("page-register").style.display="none";
        document.getElementById("page-sucess").style.display="block";
    }
    //para não recarregar a pagina
    event.preventDefault();
    
    return;


}