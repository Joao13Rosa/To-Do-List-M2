export default class HABITOSREQUISICOES {
    static token = JSON.parse(localStorage.getItem("@kenzie-habito:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async criarHabito(dadosHabito) {
        return await fetch('https://habits-kenzie.herokuapp.com/api/habits', {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(dadosHabito)
            })
            .then((res) => {
                if(res.status === 200){
                    return res.json()
                }
                else {
                    alert('Preencha todos os campos')
                }
            })
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async todosHabitos() {
        return await fetch('https://habits-kenzie.herokuapp.com/api/habits', {
                method: "GET",
                headers: this.headers,
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async habitosCategoria() {
        return await fetch('https://habits-kenzie.herokuapp.com/api/habits/category/:habit_category', {
                method: "GET",
                headers: this.headers,
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async alterarPost(alteracaoHabito, habito_id) {
        return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${habito_id}`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(alteracaoHabito)
            })
            .then((res) => {
                if(res.status === 200){
                    return res.json()
                }
                else {
                    alert('Altere pelo menos um campo')
                }
            })
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async habitoCompleto(habito_id) {
        return await fetch('https://habits-kenzie.herokuapp.com/api/habits/complete/' + habito_id, {
                method: "PATCH",
                headers: this.headers
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    static async deleteHabito(habito_id) {
        return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${habito_id}`, {
                method: "DELETE",
                headers: this.headers,
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
}