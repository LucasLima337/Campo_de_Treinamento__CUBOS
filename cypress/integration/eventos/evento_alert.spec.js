/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('LINK VOLTAR', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    it('deve exibir um alerta com uma mensagem específica', () => {
        cy.mockAlert('alerta')

        cy.get('#alert').click()

        cy.get('@alerta')
            .should('be.calledWith', 'Alert Simples')
    })
})