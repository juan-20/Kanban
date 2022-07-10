export {};
describe('Criar uma lista', () => {
  it('acessar', () => {
    // cy.visit('https://kanban-juan-20.vercel.app/')
    cy.visit('http://localhost:3000/')
  })

})
describe('Criar uma lista', () => {
  it('Criar lista', () => {
    cy.contains('Adicionar outra lista').click();
    cy.get('.custom-input > form > input').click();
    cy.get('.custom-input > form > input').type('Nova-lista');
    cy.contains('Adicionar Lista').click();
  })
  
  
})


describe('Adicionar tarefa', () => {
  it('Criar lista', () => {
  cy.get('#Nova-listaCreateTask').click();
  cy.get('.custom-input > form > input').type('Nova-tarefa');
  cy.contains('Enviar').click();
  cy.wait(2000);
})
it('Editar lista', () => {
  cy.contains('Nova-tarefa').click();
  cy.get('#2Color').click();
  cy.contains('Adicionar nova Tag').click();
  cy.get('.custom-input > form > input').type('Tag 4');
  cy.contains('Enviar').click();
  cy.get('#Nova-tarefaModalTitle > .custom-input > p').click();
  cy.get('.custom-input > form > input').type('Novo-nome');
  cy.contains('Editar Nome da task').click();
  cy.visit('http://localhost:3000/')
  cy.wait(2000);
})
it('Excluir lista', () => {
  cy.get('#Nova-listatrash').click();
  })
})
