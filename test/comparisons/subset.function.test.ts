import { describe, expect, it } from '@jest/globals';
import { subset } from '../../src';
import { empty, setA, setB, setC, universal } from '../constants/testing-constants';

describe('subset', () => {
	it('no sets are subsets', () => {
		expect(subset()).toBe(true);
	});

	it('single set is a subset', () => {
		expect(subset(setA)).toBe(true);
	});

	it('same set is a subset', () => {
		expect(subset(setA, setA)).toBe(true);
	});

	it('many of the same set are subsets', () => {
		expect(subset(setA, setA, setA)).toBe(true);
	});

	it('two sets with different values are not subsets', () => {
		expect(subset(setA, setB)).toBe(false);
	});

	it('three sets with different values are not subsets', () => {
		expect(subset(setA, setB, setC)).toBe(false);
	});

	it('following sets with lower cardinalities are not subsets', () => {
		expect(subset(setA, empty)).toBe(false);
	});

	it('any set is a subset of the universal set', () => {
		expect(subset(setA, universal)).toBe(true);
	});

	it('the empty set is a subset of every set', () => {
		expect(subset(empty, setA, setB, setC, universal)).toBe(true);
	});
});
