// const name = nome;
const nome = window.prompt('Seja bem-vinda, jogadora! Qual é o seu nome?')

let decisao =  window.prompt('Deseja continuar com processo?')

        if (decisao =='sim') { 
            alert(`Você esta no jogo ${nome}`)
            perguntas();
        } else {
            console.log('Até a próxima')
        }

       function perguntas() {

            const resposta = window.prompt('Quem nasceu em São Paulo é? a) Paulista b)Paulistano c) São Paulino')
            const resCorreta = 'a';

            if(resposta == resCorreta) {

            } else  {
                
            }
            const resposta1 = window.prompt('Quem nasceu em Rio de Janeiro é? a) Capixaba b)Carioca c) São Paulino')
            const resCorreta1 = 'b';
    
             if(resposta1 == resCorreta1) {
    
             }else{
                 
             }
          const resposta2 = window.prompt('Quem nasceu em brasilia norte é? a) Paulista b)Carioca c)brasiliense')
             const resCorreta2= 'c';
     
              if(resposta2 == resCorreta2) {
     
            } else {

          }
         }
         
         let docu = document.getElementById('docu').textContent ;
         resresultados1.innerHTML = resCorreta;
         

         