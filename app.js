let products = [
    {
        name: 'Aqua',
        price: 200,
    },
    {
        name: 'Emoción',
        price: 180,
    },
    {
        name: 'Alegría',
        price: 160,
    },
    {
        name: 'Frescura',
        price: 150,
    },
];
let pedroSold = [];
let juanaSold = [];
let allSold = [];
const sellsReportDiv = document.getElementById('products-report');
sellsReportDiv.style.display = 'none';
let selected = null;
const aqua = document.getElementById('Aqua');
const emocion = document.getElementById('Emocion');
const alegria = document.getElementById('Alegria');
const frescura = document.getElementById('Frescura');
let totalSells = document.getElementById('total-sells');
let productsSold = [];
let revenue = 0;
let pedroRevenue = 0;
let juanaRevenue = 0;

const productsList = function(){
    selected = this.value;
    sellsReportDiv.style.display = 'block';
    if(selected == 0){
        sellsReportDiv.style.display = 'none';
    } else if (selected == 1){
        aqua.value = pedroSold[0];
        emocion.value = pedroSold[1];
        alegria.value = pedroSold[2];
        frescura.value = pedroSold[3];
    } else if (selected == 2){
        aqua.value = juanaSold[0];
        emocion.value = juanaSold[1];
        alegria.value = juanaSold[2];
        frescura.value = juanaSold[3];
    }
}

const soldList = function(){
    if (selected == 1){
        for(let i = 0; i<4; i++){
            let soldPrices = products[i].price;
            switch(i){
                case 0:
                    pedroRevenue = Number(aqua.value) * soldPrices;
                    pedroSold.push(aqua.value);
                    break;
                case 1:
                    pedroRevenue = Number(emocion.value) * soldPrices + pedroRevenue;
                    pedroSold.push(emocion.value);
                    break;
                case 2:
                    pedroRevenue = Number(alegria.value) *soldPrices + pedroRevenue;
                    pedroSold.push(alegria.value);
                    break;
                case 3:
                    pedroRevenue = Number(frescura.value) * soldPrices + pedroRevenue;
                    pedroSold.push(frescura.value);
                    revenue += pedroRevenue;
                    totalSells.textContent = "Ventas totales: " + revenue;
            }
        }   

    } else if (selected == 2){
        for(let i = 0; i<4; i++){
            let soldPrices = products[i].price;
            switch(i){
                case 0:
                    juanaRevenue = Number(aqua.value) * soldPrices;
                    juanaSold.push(aqua.value);
                    break;
                case 1:
                    juanaRevenue = Number(emocion.value) * soldPrices + juanaRevenue;
                    juanaSold.push(emocion.value);
                    break;
                case 2:
                    juanaRevenue = Number(alegria.value) *soldPrices + juanaRevenue;
                    juanaSold.push(alegria.value);
                    break;
                case 3:
                    juanaRevenue = Number(frescura.value) * soldPrices + juanaRevenue;
                    juanaSold.push(frescura.value);
                    revenue += juanaRevenue;
                    totalSells.textContent = "Ventas totales: "  + revenue;
            }
        }    

    }
}

let bestEmployee = function(){
    if(pedroRevenue =! 0 && juanaRevenue != 0){
        if (pedroRevenue > juanaRevenue){
            alert("Pedro es el empleado del mes");
        } else if(juanaRevenue > pedroRevenue){
            alert("Juana es la empleada del mes");
        } else if (pedroRevenue == juanaRevenue){
            alert("Ambos ganaron");
        }
    } else{
        alert('falta informacion');
    }
}


document.getElementById("Employee").addEventListener('change', productsList);
document.getElementById("save-sales").addEventListener('click', soldList);
document.getElementById("mvp").addEventListener('click', bestEmployee);