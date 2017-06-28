import {
  CHANGE_TRANSACTION_KIND,
  changeTransactionKind,
  CHANGE_ACCOUNT,
  changeAccount,
  CHANGE_LINKED_ACCOUNT,
  changeLinkedAccount,
  CHANGE_AMOUNT,
  changeAmount,
  CHANGE_LINKED_AMOUNT,
  changeLinkedAmount,
  CHANGE_TRANSACTION_CURRENCY,
  changeCurrency,
  CHANGE_LINKED_CURRENCY,
  changeLinkedCurrency,
  CHANGE_DATE,
  changeDate,
  ADD_EXPENSE_TAG,
  addExpenseTag,
  ADD_INCOME_TAG,
  addIncomeTag,
  CHANGE_EXPENSE_TAGS,
  changeExpenseTags,
  CHANGE_INCOME_TAGS,
  changeIncomeTags,
  CHANGE_NOTE,
  changeNote
} from './transactionForm'

it('creates CHANGE_TRANSACTION_KIND action', () => {
  expect(changeTransactionKind('transfer')).toEqual({
    type: CHANGE_TRANSACTION_KIND,
    kind: 'transfer'
  })
})

it('creates CHANGE_ACCOUNT action', () => {
  expect(changeAccount('A12345')).toEqual({
    type: CHANGE_ACCOUNT,
    accountId: 'A12345'
  })
})

it('creates CHANGE_AMOUNT action', () => {
  expect(changeAmount(123)).toEqual({
    type: CHANGE_AMOUNT,
    amount: 123
  })
})

it('creates CHANGE_TRANSACTION_CURRENCY action', () => {
  expect(changeCurrency('EUR')).toEqual({
    type: CHANGE_TRANSACTION_CURRENCY,
    currency: 'EUR'
  })
})

it('creates CHANGE_LINKED_ACCOUNT action', () => {
  expect(changeLinkedAccount('A12345')).toEqual({
    type: CHANGE_LINKED_ACCOUNT,
    accountId: 'A12345'
  })
})

it('creates CHANGE_LINKED_AMOUNT action', () => {
  expect(changeLinkedAmount(123)).toEqual({
    type: CHANGE_LINKED_AMOUNT,
    amount: 123
  })
})

it('creates CHANGE_LINKED_CURRENCY action', () => {
  expect(changeLinkedCurrency('EUR')).toEqual({
    type: CHANGE_LINKED_CURRENCY,
    currency: 'EUR'
  })
})

it('creates CHANGE_DATE action', () => {
  expect(changeDate('2017-06-21')).toEqual({
    type: CHANGE_DATE,
    date: '2017-06-21'
  })
})

it('creates ADD_EXPENSE_TAG action', () => {
  expect(addExpenseTag('food')).toEqual({
    type: ADD_EXPENSE_TAG,
    tag: 'food'
  })
})

it('creates ADD_INCOME_TAG action', () => {
  expect(addIncomeTag('salary')).toEqual({
    type: ADD_INCOME_TAG,
    tag: 'salary'
  })
})

it('creates CHANGE_EXPENSE_TAGS action', () => {
  expect(changeExpenseTags(['food'])).toEqual({
    type: CHANGE_EXPENSE_TAGS,
    tags: ['food']
  })
})

it('creates CHANGE_INCOME_TAGS action', () => {
  expect(changeIncomeTags(['salary'])).toEqual({
    type: CHANGE_INCOME_TAGS,
    tags: ['salary']
  })
})
it('creates CHANGE_NOTE action', () => {
  expect(changeNote('foo')).toEqual({
    type: CHANGE_NOTE,
    note: 'foo'
  })
})
