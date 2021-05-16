/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('BOTÕES CLIQUE AQUI', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    const nomes = ['Francisco', 'Maria', 'Usuario A', 'Doutorado', 'Usuario B']
    nomes.forEach(nome => {
        it(`deve exibir o nome correspondente a linha da tabela ao clicar no botão | [ ${nome} ]`, () => {
            cy.mockAlert('alerta')

            cy.get(loc.BUTTONS.clique_aqui(nome)).click()
            
            cy.get('@alerta')
                .should('be.calledWith', nome)
        })
    })
})