/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('EVENTO PROMPT', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it.only('deve inserir um número e obter um retorno positivo', () => {

    })
    
    it('deve inserir um número e obter um retorno negativo', () => {

    })

    it('não deve aceitar caracteres inválidos no campo de entrada', () => {
   
    })

    it('não deve aceitar o campo de entrada vazio', () => {
   
    })

    it('deve ter um retorno null quando é clicado em cancelar sem inserir nenhum dado', () => {
   
    })
})