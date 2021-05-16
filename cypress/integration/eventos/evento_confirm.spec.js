/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('EVENTO CONFIRM', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it('deve exibir um campo de confirmação com uma mensagem específica', () => {
        cy.get(loc.BUTTONS.btn_confirm).click()
        
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
    })
    
    it('deve exibir a mensagem "Confirmado" ao clicar em ok', () => {
        cy.mockAlert('alerta')

        cy.get(loc.BUTTONS.btn_confirm).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Confirmado')
    })

    it('deve exibir a mensagem "Negado" ao clicar em cancelar', () => {
        cy.mockAlert('alerta')

        cy.on('window:confirm', msg => {
            return false
        })

        cy.get(loc.BUTTONS.btn_confirm).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Negado')
    })
})