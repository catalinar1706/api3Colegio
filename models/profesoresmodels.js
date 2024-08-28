const db = require("../config/db.js");

function traerProfesores(callback) {
  const buscarProfesores = "SELECT * FROM  profesores";
  db.query(buscarProfesores, (err, results) => {
    if (err) {
      console.log("Error al mostrar profesores");
    } else {
      callback(results);
    }
  });
}

function calcularAlumnos(callback){
  const calcularAlumnos = "SELECT COUNT(*) AS total "
}






function inscribirProfesor(agregarProfesor, callback) {
  let añadirProfesor =
    "INSERT INTO profesores (nombreProfesor, apellidoProfesor, edadProfesor, telefonoProfesor)VALUES(?,?,?,?)";
  db.query(
    añadirProfesor,
    [
      agregarProfesor.nombreProfesor,
      agregarProfesor.apellidoProfesor,
      agregarProfesor.edadProfesor,
      agregarProfesor.telefonoProfesor,
    ],
    (err, result) => {
      if (err) {
        console.log("no se pudo agregar el profesor");
      } else {
        callback(result);
      }
    }
  );
}












function actualizarProfesor(profesorId, nuevoDatosProfesor, callback){
    let actualProfesor = "UPDATE profesores SET nombreProfesor=?, apellidoProfesor=?, edadProfesor=?, telefonoProfesor=? WHERE idProfesores=?"
    db.query(actualProfesor, [nuevoDatosProfesor.nombreProfesor, nuevoDatosProfesor.apellidoProfesor, nuevoDatosProfesor.edadProfesor, nuevoDatosProfesor.telefonoProfesor,profesorId], (err,result)=>{
        if(err){
            console.log(`faillllllll error ${err}`)
        }else{
            callback(result)

        }
        })
    }

    function quitarProfesor(profesorId, callback){
      let quitProfesor ="DELETE FROM profesores WHERE idProfesores =?"
      db.query(quitProfesor, [profesorId], (err, result)=>{
        if(err){
          console.log(`Error fatal ${err}`);
        }else{
          callback(result)

        }
        })
      }
    


module.exports = { traerProfesores, inscribirProfesor, actualizarProfesor, quitarProfesor}
