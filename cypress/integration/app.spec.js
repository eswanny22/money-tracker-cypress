
describe("Money Tracker UI Tests", () => {
    beforeEach(() => {
        indexedDB.deleteDatabase("_pouch_settings")
        indexedDB.deleteDatabase("_pouch_accounts")
        indexedDB.deleteDatabase("_pouch_transactions")
        indexedDB.deleteDatabase("_pouch_tags")
        cy.visit("http://localhost:3000", {timeout: 300000})
        cy.get('input[placeholder*="Account name"]').type("test")
        cy.get('input[placeholder*="Balance"]').type("10000")
        cy.contains('Save Account').click()
        cy.contains('Finish').click()

    });

    it("adds an expense", () => {
        cy.get('input[type*="number"]').type("100")
        cy.get('div[role*="combobox"]').type("food{enter}")
        cy.get('input[placeholder*="Note"]').type("fancy dinner")
        cy.contains('Add Expense').click()
    })
})
