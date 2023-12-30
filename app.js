let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener('click', async()=>{
    let country = document.querySelector("input").value;
    let collArr = await getUniversity(country);
    show(collArr);
})

function show(collArr){
    
    let list = document.querySelector("ul");
    list.innerText = "";
    for(col of collArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
    
}

async function getUniversity(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log("error : ", err);
        return [];
    }
}
