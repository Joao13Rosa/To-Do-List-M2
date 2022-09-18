export default class USERREQUISICOES {
    static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async atualizarPerfil(alteracaoPerfil) {
        return await fetch('https://habits-kenzie.herokuapp.com/api/user/profile', {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(alteracaoPerfil)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }



}