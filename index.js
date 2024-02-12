const express = require('express');
const app = express();

const port = 3800;

let alumnos =[
    {id:1,Nombre: 'Memo' },
    {id:2,Nombre: 'Gali' },
    {id:3,Nombre: 'Tocayo' }
]


app.get('/', (req,res)=>{
    res.send('hola a todos')
})
app.get("/alumnos",(req,res) => {
    res.send(alumnos);
});
app.post("/alumnos ", (req,res)=>{
    const {body} = req
    alumnos.push(body);
    res.send("Alumno agregado satisfactoriamente");
});
app.patch("/alumnos", (req,res) => {
    const {body} = req
    const {id} = req
    const {nombre} = req

    let alumnos = alumnos.find((alumnos) => alumnos.id == id)
    alumnos.Nombre = Nombre
    res.send({message: "Se quito alumno"})
});
app.delete("/alumnos/:id",(req,res) => {
    const {id} = req.params;
    alumnos= alumnos.filter((alumnos) => alumnos.id != id );
    res.send({message:"Alumno eliminado"})
});
app.listen(port , ()=>{console.log('Server is running on ${port}')});
app.get('/', (req,res) => {
    res.send("Hola a todos!!!")
})

/*Get por ID*/