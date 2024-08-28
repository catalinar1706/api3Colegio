const express = require("express");
const {
  traerProfesores,
  inscribirProfesor,
  actualizarProfesor,
  quitarProfesor,
} = require("./models/profesoresmodels.js");

const {
  añadirMateria,
  mostrarMaterias,
  cambioMateria,
  quitarMateria,
  contarMaterias
} = require("./models/materiasmodels.js");

const app = express();
const puerto = 3002;
app.use(express.json());

app.get("/profesores", (req, res) => {
  traerProfesores((results) => {
    res.json(results);
  });
});

app.post("/profesores", (req, res) => {
  let agregarProfesor = req.body;
  if (
    !agregarProfesor.nombreProfesor ||
    !agregarProfesor.apellidoProfesor ||
    !agregarProfesor.edadProfesor ||
    !agregarProfesor.telefonoProfesor
  ) {
    res.send("se requiere mas info");
  } else {
    inscribirProfesor(agregarProfesor, (results) => {
      res.json({ message: "el profesor fue agregado muy biennnn " });
    });
  }
});

app.put("/profesores/:id", (req, res) => {
  let profesorId = req.params.id;
  const nuevoDatosProfesor = req.body;
  actualizarProfesor(profesorId, nuevoDatosProfesor, (err, result) => {
    if (!err) {
      res.send(`error ${err}`);
    } else {
      res.json({ message: "nuevo usuario cambiado" });
    }
  });
});

app.delete("/profesores/:id", (req, res) => {
  let profesorId = req.params.id;
  quitarProfesor(profesorId, (err, result) => {
    if (!err) {
      res.send(`error al eliminar al profesor`);
    } else {
      res.json({ message: "fue quitado" });
    }
  });
});

app.get("/materia", (req, res) => {
  mostrarMaterias((result) => {
    res.json(result);
  });
});

app.post("/materias/:id", (req, res) => {
  const profesorId = req.params.id;
  const nuevaMateria = req.body;
  añadirMateria(profesorId, nuevaMateria, (err, result) => {
    if (!err) {
      res.send(`errores ${err}`);
    } else {
      res.json({ message: "materia añadida biennnnn" });
    }
  });
});

app.put("/materia/:id", (req, res) => {
  let materiaId = req.params.id;
  const nuevosDatosMateria = req.body;
  cambioMateria(materiaId, nuevosDatosMateria, (err, result) => {
    if (!err) {
      res.send(`error al cambiar la materia ${err}`);
    } else {
      res.json({ message: "materia cambiada" });
    }
  });
});

app.delete("/materia/:id", (req, res) => {
  let materiaId = req.params.id;
  quitarMateria(materiaId, (err, result) => {
    if (!err) {
      res.send(`error al quitar la materia ${err}`);
    } else {
      res.json({ message: "materia quitada" });
    }
  });
});

app.get('/materia/count', (req,res)=>{
   contarMaterias((result)=>{
      res.json(result)
   })
})

app.listen(puerto, () => {
  console.log("el servidor esta corriendo bien");
});
