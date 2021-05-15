import loc from './locators'

Cypress.Commands.add('cadastro', ({
    nome, sobrenome,
    sexo, comida,
    escolaridade, esportes,
    sugestoes
}) => {
    cy.get(loc.INPUTS.nome).type(nome)
    cy.get(loc.INPUTS.sobrenome).type(sobrenome)

    cy.get(loc.RADIOS.sexo(sexo)).click()
    cy.get(loc.CHECKBOX.comida(comida)).click()

    cy.get(loc.COMBOBOX.escolaridade).select(escolaridade)
    cy.get(loc.MULTIPLE_COMBOBOX.esportes).select(esportes)

    cy.get(loc.TEXT_AREA.sugestoes).type(sugestoes)

    cy.get(loc.BUTTONS.cadastro).click()
})