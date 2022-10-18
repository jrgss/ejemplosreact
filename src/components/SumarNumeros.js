import tortuga from './../images/tortuga.jpg';
const sumarNumeros=(num1,num2) =>{
    var suma=  num1+num2;
    console.log(suma);  
}

function SumarNumeros(){
    var imagenEstilo ={
        width: "150px", height:"150px"
    }
    return(<div>
        <h1>Componente SumarNumeros</h1>
        <button onClick={()=> sumarNumeros(4,5)}>Sumar 4+5</button>
        <img src={tortuga} style={imagenEstilo}/>
    </div>)
}

export default SumarNumeros;