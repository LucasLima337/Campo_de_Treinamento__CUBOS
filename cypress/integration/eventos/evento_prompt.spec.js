/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('EVENTO PROMPT', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it('deve inserir um número e obter um retorno positivo', () => {
        cy.mockAlert('alerta')
        cy.mockPrompt(12)

        cy.get(loc.BUTTONS.btn_prompt).click()

        cy.get('@alerta').should('be.calledWith', ':D')
    })
    
    it('deve inserir um número e obter um retorno negativo', () => {
        cy.mockAlert('alerta')
        cy.mockPrompt(23)

        cy.on('window:confirm', msg => false)

        cy.get(loc.BUTTONS.btn_prompt).click()

        cy.get('@alerta').should('be.calledWith', ':(')
    })

    it('não deve aceitar caracteres inválidos no campo de entrada', () => {
        cy.mockAlert('alerta')
        cy.mockPrompt('string')

        cy.get(loc.BUTTONS.btn_prompt).click()

        cy.get('@alerta').should('be.calledWith', 'O dado inserido deve ser um número')
    })

    it('não deve aceitar o campo de entrada vazio', () => {
        cy.mockAlert('alerta')
        cy.mockPrompt('')
        
        cy.get(loc.BUTTONS.btn_prompt).click()

        cy.get('@alerta').should('be.calledWith', 'O campo de entrada não pode estar vazio')
    })
})