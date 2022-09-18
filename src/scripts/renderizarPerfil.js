export default class RENDERIZARPERFIL {
    static infoLocalStorage = JSON.parse(localStorage.getItem("@kenzie-habito:dados"))

    static montardados() {

        const tagImg = document.querySelector(".imgPerfil")
        /* tagImg.src = this.infoLocalStorage.urs_image */

        const tagNome = document.querySelector(".nome-cabecalho")
        /* tagNome.innerText = this.infoLocalStorage.usr_name */

    }
}