const locators = {
    BUTTONS: {
        cadastro: "#elementosForm\\:cadastrar",
        clique_me: "#buttonSimple",
        resposta_demorada: "#buttonDelay",
        clique_aqui: nome => `tr td:contains(${nome}):nth-child(1) ~ td input[value="Clique aqui"]`,
        btn_alert: "#alert",
        btn_confirm: "#confirm"
    },

    INPUTS: {
        nome: "#elementosForm\\:nome",
        sobrenome: "#elementosForm\\:sobrenome",
        input_demorado: "#novoCampo"
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
    },

    LINKS: {
        voltar: "body a:contains('Voltar')"
    }
}

export default locators