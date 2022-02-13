/* 

*/

const baseDeDadosTstMunka = []

function cadastrar(){
   const nomeTst = document.querySelector('.nome')
   const telefoneTst = document.querySelector('.telefone')
   const emailTst = document.querySelector('.email')

   let nome = nomeTst.value
   let telefone = telefoneTst.value
   let email = emailTst.value

   baseDeDadosTstMunka.push({
           nome,
           telefone,
           email
       })
       mostrarDadosNaTela()
       console.log(baseDeDadosTstMunka)
}

function mostrarDadosNaTela(){
    const campoBaseDados = document.querySelector('.campoBaseDados')
    campoBaseDados.innerHTML = "";
    
    for(let i = 0; i < baseDeDadosTstMunka.length; i++){
        const novoTst = baseDeDadosTstMunka[i] 

        const li = `
        
            <li>
               Nome: ${novoTst.nome} <br><br>
               Telefone: ${novoTst.telefone} <br><br>
               Email: ${novoTst.email}
            </li>

        `
        campoBaseDados.innerHTML += li
    }

}


