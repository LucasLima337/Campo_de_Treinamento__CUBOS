/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('BOTÃO CLIQUE ME', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it('deve possuir o valor inicial "Clique Me!"', () => {
        cy.get(loc.BUTTONS.clique_me)
            .should('contain.value', 'Clique Me!')
    })

    it('deve alterar o valor do botão para "Obrigado!"', () => {
        cy.get(loc.BUTTONS.clique_me).click()
            .should('contain.value', 'Obrigado!')
    })
})