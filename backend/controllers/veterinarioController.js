

const registrar = (req, res) => {
    res.json({ msg: 'Registrando Usuario...'})
};

const perfil = (req, res) => {
    res.json({ msg: 'Mostrando Perfil'})
}

export{
    registrar, perfil
}