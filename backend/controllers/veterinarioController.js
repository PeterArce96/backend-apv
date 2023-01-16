

const registrar = (req, res) => {

    const { email, password, nombre } = req.body
    console.log(email)
    console.log(password);
    console.log(nombre)

    res.json({ msg: 'Registrando Usuario...'})
};

const perfil = (req, res) => {
    res.json({ msg: 'Mostrando Perfil'})
}

export{
    registrar, perfil
}