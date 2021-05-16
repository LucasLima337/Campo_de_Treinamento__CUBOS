/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('LINK VOLTAR', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    it('deve exibir um elemento DOM com o texto "Voltou!"', () => {
        cy.get(loc.FIELDS.resultado)
            .should('have.text', 'Status: Nao cadastrado')
        
        cy.get(loc.LINKS.voltar).click()

        cy.get(loc.FIELDS.resultado)
            .should('have.text', 'Voltou!')
    })
})