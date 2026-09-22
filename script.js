let btn = document.querySelector("button");
let p = document.querySelector("p");

let url = "https://facts.bobthecow.org/random";    

async function getFacts() {
    try{
        let res = await axios.get(url);
        p.innerHTML = res.data.fact;
    } catch(err) {
        p.innerHTML = "Something went wrong!";
        console.log(err);
    }
}

btn.addEventListener("click", getFacts);