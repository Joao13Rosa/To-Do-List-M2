export default class LOGINREQUISICOES {
    static token = JSON.parse(localStorage.getItem("@kenzie-habito:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(loginData) {
        return await fetch('https://habits-kenzie.herokuapp.com/api/userLogin', {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(loginData)
            })
            .then((res) => {
                if (res.status == 200) {
                    return res.json()
                } else {
                    alert('Ops, algo deu errado')
                }
            })
            .then((res) => {
                console.log(res)
                localStorage.setItem("@kenzie-habito:token", JSON.stringify(res.token))
                localStorage.setItem("@kenzie-habito:dados", JSON.stringify(res.response))
                window.location.href = 'src/html/homePage.views.html'
            })
            .catch(err => console.log(err))
    }
}