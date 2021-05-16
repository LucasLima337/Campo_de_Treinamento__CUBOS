/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('EVENTO CONFIRM', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    it('deve exibir um alerta com uma mensagem específica', () => {
        cy.mockAlert('alerta')

        

        cy.get('@alerta')
            .should('be.calledWith', 'Alert Simples')
    })

    it('', () => {

    })

    it('', () => {

    })
})