const express = require('express');
const app = express();
app.use(express.json());

const port = 3800;

let alumnos =[
    {id:1,Nombre: 'Memo' },
    {id:2,Nombre: 'Gali' },
    {id:3,Nombre: 'Tocayo' }
]

app.get("/alumnos",(req,res) => {
    res.send(alumnos);
});
app.post("/alumnos", (req,res)=>{
    const {body} = req
    console.log(body)
    alumnos.push(body);
    res.send("Alumno agregado satisfactoriamente");
});
app.patch("/alumnos/:id", (req,res) => {
    const {body} = req
    const {id} = req.params
    const {Nombre} = body

    let alumno = alumnos.find((a) => a.id == id)
    alumno.Nombre = Nombre
    res.send({message: "Se actualizo alumno"})
});
app.delete("/alumnos/:id",(req,res) => {
    const {id} = req.params;
    alumnos = alumnos.filter((alumnos) => alumnos.id != id );
    res.send({message:"Alumno eliminado"})
});
app.listen(port , ()=>{console.log(`Server is running on ${port}`)});
app.get('/', (req,res) => {
    res.send("Hola a todos!!!")
})

/*Get por ID*/
app.get("/alumnos/:id", (req, res) => {
    const { id } = req.params;
    const alumno = alumnos.find((a) => a.id == id);

    if (alumno) {
        res.send(alumno);
    } else {
        res.status(404).send({ message: "Alumno no encontrado" });
    }
});
