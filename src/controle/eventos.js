import LOGINREQUISICOES from "../api/login.api.js"
import HABITOSREQUISICOES from "../api/habitos.api.js";
import CRIARMODAIS from "./criarModais.controle.js";

export default class EVENTOS {
    static email = document.querySelector('#email');
    static senha = document.querySelector('#senha');

    static btnEntrar = document.querySelector('#entrar');
    static btnSair   = document.querySelector('.deslogar');

    static btnCriarModal = document.querySelector('.btnCriar-main');

    static eventoLogin(){
        this.btnEntrar.addEventListener('click', (evento) => {
            evento.preventDefault()
            LOGINREQUISICOES.login({email:this.email.value, password:this.senha.value})
        })
    }

    static eventoLogout(){
        this.btnSair.addEventListener('click', (evento) => {
            window.location.href = '/index.html'
            localStorage.clear()
        })
    }

    static eventoAbrirModalCriar(){
        this.btnCriarModal.addEventListener('click', (evento) => {
            document.querySelector('.div-ModalCriarHabito').style.top = '0'
            
        })
    }

    static fecharModalCriar(){
        document.querySelector('.p-sair-ModalCriarHabito').addEventListener('click', (evento) => {
            document.querySelector('.div-ModalCriarHabito').style.top = '-150%' 
        })
    }

    static abrirModalEditar(){
        document.querySelector("body").addEventListener('click', (evento) => {
            if(evento.target.className === "btnEditar"){
                document.querySelector('.div-modalEditar').style.top = '0'
                CRIARMODAIS.id = evento.target.id
            }
        })
    }

    static fecharModalEditar(){
        document.querySelector("body").addEventListener('click', (evento) => {
            if(evento.target.className === "p-sair-modalEditar"){
                document.querySelector('.div-modalEditar').style.top = '-200%'
                
            }
        })
    }

    static abrirModalEditarPerfil(){
        document.querySelector(".editarPerfil").addEventListener("click", () => {
            document.querySelector(".div-ModalEditarPerfil").style.top = '0'
        })
    }

    static fecharModalEditarPerfil(){
        document.querySelector(".p-sair-ModalEditarPerfil").addEventListener("click", () => {
            document.querySelector(".div-ModalEditarPerfil").style.top = '-300%'
        })
    }

    static eventoCriarHabito(){
        document.querySelector('.button-criar-ModalCriarHabito').addEventListener('click',async (evento) => {
            evento.preventDefault()
            let titulo = document.querySelector('.input-titulo-ModalCriarHabito').value;
            let descricao = document.querySelector('.input-descricao-ModalCriarHabito').value;
            let categoria = document.querySelector('.select-categoria-ModalCriarHabito').value;
            let data = {habit_title:titulo, habit_description:descricao, habit_category:categoria}
            if(await HABITOSREQUISICOES.criarHabito(data) !== undefined){
                window.location.reload()
            }
            
        })
    }

    static eventoEditHabit(){
        document.querySelector('body').addEventListener('click',async (evento) => {
            if(evento.target.className === 'button-salvar-modalEditar'){
            evento.preventDefault()
            let titulo      = document.querySelector('.input-titulo-modalEditar').value
            let descricao   = document.querySelector('.input-descricao-modalEditar').value
            let categoria   = document.querySelector('.select-categoria-modalEditar').value
            let data        = {habit_title:titulo, habit_description:descricao, habit_category:categoria}
            await HABITOSREQUISICOES.alterarPost(data, CRIARMODAIS.id)
            window.location.reload()
            }
        })
    }

    static eventoApagarHabit(){
        document.querySelector('body').addEventListener('click',async (evento) => {
            if(evento.target.className === 'button-excluir-modalEditar'){
                evento.preventDefault()
                await HABITOSREQUISICOES.deleteHabito(CRIARMODAIS.id)
                window.location.reload()
            }
        })
    }
}