const locators = {
    BUTTONS: {
        cadastro: "#elementosForm\\:cadastrar"
    },

    INPUTS: {
        nome: "#elementosForm\\:nome",
        sobrenome: "#elementosForm\\:sobrenome"
    },

    RADIOS: {
        sexo: sexo => `#elementosForm\\:sexo [value=${sexo}]`
    },

    CHECKBOX: {
        comida: comida => `#elementosForm\\:comidaFavorita [value=${comida}]`
    },

    COMBOBOX: {
        escolaridade: "#elementosForm\\:escolaridade"
    },

    MULTIPLE_COMBOBOX: {
        esportes: "#elementosForm\\:esportes"
    },

    TEXT_AREA: {
        sugestoes: "#elementosForm\\:sugestoes"
    },

    FIELDS: {
        resultado: "#resultado"
    } 
}

export default locators