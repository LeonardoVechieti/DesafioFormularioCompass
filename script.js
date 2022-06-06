//função para botao de retorno
function back(){
    document.getElementById("page-register").style.display="block";
    document.getElementById("page-sucess").style.display="none";
    return
}
//esconde o sucess ao carregar a pagina
document.getElementById("page-sucess").style.display="none";


function register() {
    let=cont=0;
    //constantes
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i
    const passwordRegex = /[0-9]/i
    const phoneRegex = /[0-9]/i

    // Receber o valor do campo
    let name = document.querySelector("#name").value;
    console.log(name);
    let email = document.querySelector("#email").value;
    console.log(email);
    let password = document.querySelector("#password").value;
    console.log(password);
    console.log(password.length)
    let phone = document.querySelector("#phone").value;
    console.log(phone);
    let birthday = document.querySelector("#date").value;
    console.log(birthday);
    let checkbox = document.getElementById('checkbox');

    //local storage
    let storage = {name, email, password, phone, birthday}
    //Transformar o objeto em string e salvar em localStorage
    localStorage.setItem('storage', JSON.stringify(storage));
    //Receber a string
    let storageString = localStorage.getItem('storage');
    //transformar em objeto novamente
    let storageObj = JSON.parse(storageString);
    console.log(storageObj.nome);

    //remove o conteudo o alert
    document.getElementById("alertName").innerHTML = "<p></p>";
    document.getElementById("alertEmail").innerHTML = "<p></p>";
    document.getElementById("alertPassword").innerHTML = "<p></p>";
    document.getElementById("alertPhone").innerHTML = "<p></p>";
    document.getElementById("alertDate").innerHTML = "<p></p>";
    document.getElementById("alertCheck").innerHTML = "<p></p>";

    // Verificar campo name
    if (name === "") {
        document.getElementById("alertName").innerHTML = "<p>Fullname invalid</p>";  
        //e.style.display="flex"
    }else cont++

    //console.log(cont)
    if (name.length < 4 || (name = (string) => /\s/g.test(string))===true) {
        document.getElementById("alertName").innerHTML = "<p>Fullname invalid</p>";
    }else cont++

    // verifica campo email
    if (email === "") {
        document.getElementById("alertEmail").innerHTML = "<p>Email invalid</p>";
    
    }else cont++
    if (emailRegex.test(email) === true){
        document.getElementById("alertEmail").innerHTML = "<p>Email invalid</p>";
        console.log("true");
    }else cont++

    //verifica campo password
    if(passwordRegex.test(password)===false){
        document.getElementById("alertPassword").innerHTML = "<p>Password invalid</p>";
    }else cont++
    if(password.length < 6 || password.length > 9){
        document.getElementById("alertPassword").innerHTML = "<p>Password invalid</p>"; 
    }else cont++

    //verifica campo phone 
    if(phoneRegex.test(phone)===false || phone.length > 11){
        document.getElementById("alertPhone").innerHTML = "<p>Phone invalid</p>";     
    }else cont++   

    //verifica campo birthday
    if(birthday === ""){
        document.getElementById("alertDate").innerHTML = "<p>Date invalid</p>";     
    }else cont++

    //verifica campo do checklist
    if(checkbox.checked===false) {  
        document.getElementById("alertCheck").innerHTML = "<p>You must accept the terms</p>";
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