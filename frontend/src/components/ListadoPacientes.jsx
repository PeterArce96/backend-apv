import usePacientes from "../hooks/usePacientes"

const ListadoPacientes = () => {

  const { pacientes } = usePacientes()

  console.log(pacientes)

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : 
      (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apacererán en este lugar</span>
          </p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes