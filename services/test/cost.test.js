import { expect, test } from 'vitest'
import { calculateCost } from '../util/cost'

test('Lowest tier', () => {
	const storage = 10

	const cost = 4000
	const expectedCost = calculateCost(storage)

	expect(cost).toEqual(expectedCost)
})

test('Middle tieer', () => {
	const storage = 100

	const cost = 20000
	const expectedCost = calculateCost(storage)

	expect(cost).toEqual(expectedCost)
})

test('Highest Tier', () => {
	const storage = 101

	const cost = 10100
	const expectedCost = calculateCost(storage)

	expect(cost).toEqual(expectedCost)
})
