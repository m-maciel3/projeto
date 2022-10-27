      function mostrarOcultarSenha(){    
        var mostrarSenha = document.querySelector("#mostrarSenha").style.display;
        
        if(mostrarSenha == "block"){
        document.querySelector("#ocultarSenha").style.display="block";
        document.querySelector("#mostrarSenha").style.display="none";
        document.querySelector("#novaSenha").type="text";
        }
            else 
            {
                document.querySelector("#ocultarSenha").style.display="none";
                document.querySelector("#mostrarSenha").style.display="block";
                document.querySelector("#novaSenha").type="password";     
            }
    }
    function mostrarOcultarNovaSenha(){    
        var mostrarSenha = document.querySelector("#mostrarNovaSenha").style.display;
        
        if(mostrarSenha == "block"){
        document.querySelector("#ocultarNovaSenha").style.display="block";
        document.querySelector("#mostrarNovaSenha").style.display="none";
        document.querySelector("#confirmarNovaSenha").type="text";
        }
            else 
            {
                document.querySelector("#ocultarNovaSenha").style.display="none";
                document.querySelector("#mostrarNovaSenha").style.display="block";
                document.querySelector("#confirmarNovaSenha").type="password";     
            }
    }