/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('BOTÃO RESPOSTA DEMORADA', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it('deve exibir um campo de entrada de texto', () => {
        cy.get(loc.BUTTONS.resposta_demorada).click()

        cy.get(loc.INPUTS.input_demorado)
            .should('exist')
    })

    it('deve ser capaz de escrever algo na nova entrada de texto', () => {
        cy.get(loc.BUTTONS.resposta_demorada).click()

        cy.get(loc.INPUTS.input_demorado).type('Escrevendo algo aqui...')
            .should('have.value', 'Escrevendo algo aqui...')
    })
})