

const Formulario = () => {
  return (
    <>
        <p className="text-lg text-center mb-10">
            Añade a tus pacientes y {''}
            <span className="text-indigo-600 font-bold">
                Administralos
            </span>
        </p>
        <form
            className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        >
            <div className="mb-5">
                <label 
                    htmlFor="mascota"
                    className="text-gray-700 uppercase font-bold"
                >Nombre Mascota
                </label>
                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="propietario"
                    className="text-gray-700 uppercase font-bold"
                >Nombre Propietario
                </label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-gray-700 uppercase font-bold"
                >Email Propietario
                </label>
                <input 
                    id="email"
                    type="text"
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="fecha"
                    className="text-gray-700 uppercase font-bold"
                >Fecha de Alta
                </label>
                <input 
                    id="fecha"
                    type="date"
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="sintomas"
                    className="text-gray-700 uppercase font-bold"
                >Sintomas
                </label>
                <textarea 
                    id="sintomas"
                    placeholder="Describe los sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value="Agregar Paciente"
            />
        </form>
    </>
  )
}

export default Formulario