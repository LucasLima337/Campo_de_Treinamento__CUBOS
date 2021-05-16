/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('BOTÃO RESPOSTA DEMORADA', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it('deve exibir um campo de entrada de texto', () => {
        cy.get('#buttonDelay').click()

        cy.get('#novoCampo')
            .should('exist')
    })

    it('deve ser capaz de escrever algo na nova entrada de texto', () => {
        cy.get('#buttonDelay').click()

        cy.get('#novoCampo').type('Escrevendo algo aqui...')
            .should('have.value', 'Escrevendo algo aqui...')
    })
})