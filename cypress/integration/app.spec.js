
describe("Money Tracker", () => {
    before(() => {
        indexedDB.deleteDatabase("_pouch_settings")
        indexedDB.deleteDatabase("_pouch_accounts")
        indexedDB.deleteDatabase("_pouch_transactions")
        indexedDB.deleteDatabase("_pouch_tags")
        cy.visit("http://localhost:3000", {timeout: 30000})
    });

    it("adds an account", () => {
        cy.get('input[placeholder*="Account name"]').type("test")
        cy.get('input[placeholder*="Balance"]').type("10000")
        cy.contains('Save Account').click()
        cy.contains('Finish').click()
    })
})
