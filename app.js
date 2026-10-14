const api=axios.create({baseURL : "http://localhost:3000/"});
const section="users";
const record =[];

const $ = selector => document.querySelector(selector);

async function listar(endpoint= `${section}`){
    try{
        const data = await api.get(endpoint);
        return data;
    } catch (tomate) {
        console.log("Error na consulta:" + tomate.message);
    }
}

async function carregar(){
    record = await listar();
}
carregar();
