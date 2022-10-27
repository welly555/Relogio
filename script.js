const zero = n=>{
    return ('0' + n).slice(-2);
}

const intervalo = setInterval(()=>{
    const atualizado = new Date();
    document.getElementById('horas').innerText= zero(atualizado.getHours())
    document.getElementById('minutos').innerText= zero(atualizado.getMinutes())
    document.getElementById('segundos').innerText= zero(atualizado.getSeconds())
},1000)