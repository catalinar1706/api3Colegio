const db = require("../config/db.js");

function mostrarMaterias(callback) {
  const materias = "SELECT * FROM materias";
  db.query(materias, (err, result) => {
    if (!err) {
      console.log(`error al mostrar materias ${err}`);
    } else {
    }
    callback(result);
  });
}

function cambioMateria(materiaId, nuevosDatosMateria, callback) {
  const changeMateria =
    "UPDATE materias SET nombreMateria=?, horario=? WHERE idMateria =?";
  db.query(
    changeMateria,
    [nuevosDatosMateria.nombreMateria, nuevosDatosMateria.horario, materiaId],
    (err, result) => {
      if (err) {
        console.log(`error ${err}`);
      } else {
        callback(result);
      }
    }
  );
}

function quitarMateria(materiaId, callback) {
  let quitMateria = "DELETE FROM materias WHERE idMateria=?";
  db.query(quitMateria, [materiaId], (err, result) => {
    if (err) {
      console.log(`fatal error ${err}`);
    } else {
      callback(result);
    }
  });
}

function contarMaterias(callback){
    const cantidadMaterias = "SELECT COUNT(*) AS total from materias"
    db.query(cantidadMaterias, (err,result)=>{
        if(err){
            console.log(`fail ${err}`);
        }else{
            callback(result)

        }
        })
    }

function añadirMateria(profesorId, nuevaMateria, callback) {
  const agregarMateria =
    "INSERT INTO materias(nombreMateria, horario, id_Profesor)VALUES(?,?,?)";
  db.query(
    agregarMateria,
    [nuevaMateria.nombreMateria, nuevaMateria.horario, profesorId],
    (err, result) => {
      if (err) {
        console.log(`error ${err}`);
      } else {
        callback(result);
      }
    }
  );
}

module.exports = {
  añadirMateria,
  mostrarMaterias,
  cambioMateria,
  quitarMateria,
  contarMaterias
};
