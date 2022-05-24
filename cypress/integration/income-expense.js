
describe("Money Tracker UI Income/Expense", () => {
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

    it("adds an expense", () => {
        cy.get('input[type*="number"]').type("100")
        cy.get('div[role*="combobox"]').type("food{enter}")
        cy.get('input[placeholder*="Note"]').type("fancy dinner")
        cy.contains('Add Expense').click()
        cy.get('.transaction-item').should(($t) => {
            expect($t).to.contain('100')
            expect($t).to.contain('food')
            expect($t).to.contain('fancy dinner')
        })
    })

    it("adds an income", () => {
        cy.contains('Income').click()
        cy.get('input[type*="number"]').type("1000")
        cy.get('div[role*="combobox"]').type("paycheck{enter}")
        cy.get('input[placeholder*="Note"]').type("weekly pay")
        cy.contains('Add Income').click()
        cy.get('.transaction-item').should(($t) => {
            expect($t).to.contain('1,000')
            expect($t).to.contain('paycheck')
            expect($t).to.contain('weekly pay')
        })
    })
})
