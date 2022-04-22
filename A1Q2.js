let getapi = async ()=>{
    return await fetch("https://reqres.in/api/users")
}
getapi().then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
    show(data)
}).catch(err => console.log(err))
getapi();
let show = (resdata) => {
    let table =
        `<tr>
            <th>ID</th>
            <th>email</th>
            <th>Name</th>
        </tr>`;
    for (let r of resdata.data) {
        table += `<tr>
                    <td>${r.id} </td>
                    <td>${r.email}</td>
                    <td>${r.first_name + " " + r.last_name}</td>        
                </tr>`;
    }
    document.getElementById("Details").innerHTML = table;
}