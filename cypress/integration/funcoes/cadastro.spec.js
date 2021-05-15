/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('CADASTRO', () => {
    before(() => {
        cy.visit('../../../app/toTest.html')
    })

    beforeEach(() => cy.reload())

    it('não deve ser capaz de cadastrar um usuário com o campo "Nome" vazio', () => {
        cy.mockAlert('alerta')
        
        cy.get(loc.BUTTONS.cadastro).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Nome eh obrigatorio')
    })

    it('não deve ser capaz de cadastrar um usuário com o campo "Sobrenome" vazio', () => {
        cy.mockAlert('alerta')

        cy.get(loc.INPUTS.nome).type('Lucas')
        cy.get(loc.BUTTONS.cadastro).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Sobrenome eh obrigatorio')
    })

    it('não deve ser capaz de cadastrar um usuário com o campo "Sexo" vazio', () => {
        cy.mockAlert('alerta')

        cy.get(loc.INPUTS.nome).type('Lucas')
        cy.get(loc.INPUTS.sobrenome).type('Lima')
        cy.get(loc.BUTTONS.cadastro).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Sexo eh obrigatorio')
    })

    it('deve ser capaz de cadastrar um usuário com credenciais válidas', () => {
        const userData = {
            nome: 'Lucas',
            sobrenome: 'Lima',
            sexo: 'M',
            comida: 'pizza',
            escolaridade: 'superior',
            esportes: ['futebol', 'Corrida'],
            sugestoes: 'Não tenho nenhuma sugestão para colocar aqui...'
        }

        cy.cadastro(userData)

        cy.get(loc.FIELDS.resultado)
            .should('contain.text', 'Cadastrado!')
    })

    const comidas = ['carne', 'frango', 'pizza', 'vegetariano']
    comidas.forEach(comida => {
        it(`deve ser capaz de cadastrar um usuário com o seguinte item: [ ${comida} ]`, () => {
            const userData = {
                nome: 'Lucas',
                sobrenome: 'Lima',
                sexo: 'M',
                comida: comida,
                escolaridade: 'superior',
                esportes: ['futebol', 'Corrida'],
                sugestoes: 'Não tenho nenhuma sugestão para colocar aqui...'
            }

            cy.cadastro(userData)

            cy.get(loc.FIELDS.resultado)
                .should('contain.text', 'Cadastrado!')
        })
    })

    it('deve exibir um popup quando o usuário se cadastra com as opções "Carne" e "Vegetariano"', () => {
        cy.mockAlert('alerta')
        
        cy.get(loc.INPUTS.nome).type('Lucas')
        cy.get(loc.INPUTS.sobrenome).type('Lima')
        cy.get(loc.RADIOS.sexo('M')).click()

        cy.get(loc.CHECKBOX.comida('carne')).click()
        cy.get(loc.CHECKBOX.comida('vegetariano')).click()

        cy.get(loc.BUTTONS.cadastro).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Tem certeza que voce eh vegetariano?')
    })

    it('não deve ser capaz de cadastrar um usuário com os campos "Nome" e "Sobrenome" inválidos', () => {
        cy.mockAlert('alerta')
        
        cy.get(loc.INPUTS.nome).type('544&**$%#56')
        cy.get(loc.INPUTS.sobrenome).type('45)6(#4@%645')
        cy.get(loc.RADIOS.sexo('M')).click()

        cy.get(loc.BUTTONS.cadastro).click()

        cy.get('@alerta')
            .should('be.calledWith', 'Nome e/ou sobrenome inválidos!')
    })
})