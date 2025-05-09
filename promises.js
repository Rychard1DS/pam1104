const promise = new Promise ((resoleve, reject)=> {
    var name = 'rc'

    if(name ==1){
        resolve('Promessa concluida')
    }else{
        reject('Promessa descumprida')
    }
})

promise.then((data)=> {
    return data.toUppercase()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})

const host ='https://dattebayo-api.onrender.com'
fetch(`${host}/characters`, {
    method:"GET",
    headers:{
        Accept: "application/json"
    }
}).then((response)=> {
    return response.json()
}).then((data)=> {
    let naruto = data.characters[0]
    console.log(naruto.images[0])
    
    for(let count= 0 ;count < naruto.jutsu.lenght; count++){
    console.log(naruto.jutsu[count].toUppercase)}
    let count = 0;
    
    while(count < naruto.jutsu.lenght){
        console.log(naruto.jutsu[count].toUppercase())
        count++
    }           
}).catch((error)=>{
    console.log(error)
})
