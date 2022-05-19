
describe("Money Tracker UI Create/Delete", () => {
    beforeEach(() => {
        indexedDB.deleteDatabase("_pouch_settings")
        indexedDB.deleteDatabase("_pouch_accounts")
        indexedDB.deleteDatabase("_pouch_transactions")
        indexedDB.deleteDatabase("_pouch_tags")
        cy.visit("http://localhost:3000")
        cy.get('input[placeholder*="Account name"]').type("test")
        cy.get('input[placeholder*="Balance"]').type("10000")
        cy.contains('Save Account').click()
        cy.contains('Finish').click()

    });

    it("creates a new account", () => {
        cy.get('a[href*="/accounts"]').click()
        cy.contains('New').click()
        cy.get('input[placeholder*="Account name"]').type("Eric")
        cy.get('input[placeholder*="Balance"]').type("100")
        cy.contains('Save Account').click()
    })

    it("deletes all data", () => {
        cy.get('a[href*="/settings"]').click()
        cy.contains('Delete data').click()
        cy.contains('Confirm').click()
        cy.get('.content').should(($t) => {
            expect($t).to.contain('Money Tracker Setup')
        })
    })
})