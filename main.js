
var auxElemento;

class Contacto {
    constructor(nombre){
        this.nombre= nombre;
    }

}


class UI{
    AgregarContacto(contacto){
        const lista =    document.getElementById('lista');
        const elemento=document.createElement('div');
        elemento.innerHTML=`
            <div>
                <strong>${contacto.nombre}</strong>  <button name="Eliminar">Eliminar</button>
                <button name="Actualizar">Actualizar</button>
            </div>
        `;
        lista.appendChild(elemento);
        this.reiniciarUI();
    }
    reiniciarUI(){
            document.getElementById('Agendado').reset();

    }
        EliminarContacto(elemento){
            if(elemento.name === 'Eliminar'){
                elemento.parentElement.remove()
            }
           

    }

    ActualizarContacto(elemento)
    {
        if(elemento.name === 'Actualizar')
        {
            auxElemento =elemento.previousElementSibling.previousElementSibling;
            console.log(auxElemento);
            inputA.value= auxElemento.innerHTML;  
        }
    }
}
function actualizar2daParte(){

    auxElemento.innerHTML = inputA.value;
    console.log("2el elemento es",auxElemento,auxElemento.innerHTML);
    inputA.value='';
    inputA.placeholder='Contacto Actualizado';
   
   }

//  Eventos
document.getElementById('Agendado')
            .addEventListener('submit',function(e){ 
             const contacto = new Contacto(document.getElementById('Nombre').value)
             console.log(contacto);

             const ui = new UI()

             ui.AgregarContacto(contacto);
            

             e.preventDefault();
            }
            )
document.getElementById('lista')
            .addEventListener('click',function(e){
                 ui =new UI();
                 ui.EliminarContacto(e.target);
                 ui.ActualizarContacto(e.target)
                ;
            })