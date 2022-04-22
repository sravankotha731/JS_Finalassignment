class resourceCaller {
    constructor(url) {
        this.url = url
    }
    async getData() {
        return await fetch(this.url)
            .then((data) => {
                return data.json()
            }).then((data) => {
                console.log(data)
            }).catch(err => console.log(err))
    }
}
class getInfo extends resourceCaller {
    constructor(url) {
        super(url)
    }
    async show() {
        return await fetch(this.url)
            .then((data) => {
                return data.json()
            }).then((resdata) => {
                console.log(resdata)
                let table =`<tr>
                                <th>ID</th>
                                <th>email</th>
                                <th>Name</th>
                            </tr>`
                for (let r of resdata.data) {
                    table += `<tr>
                                <td>${r.id} </td>
                                <td>${r.email}</td>
                                <td>${r.first_name + " " + r.last_name}</td>        
                             </tr>`;
                }
                document.getElementById("Details1").innerHTML = table;
            }).catch(err => console.log(err))
       
    }
}
let res = new getInfo("https://reqres.in/api/users")
res.show()
res.getData()