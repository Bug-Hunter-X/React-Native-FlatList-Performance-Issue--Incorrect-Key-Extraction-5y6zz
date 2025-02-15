# React Native FlatList Performance Issue: Incorrect Key Extraction

This repository demonstrates a common performance issue in React Native's FlatList component and its solution.  Improper key extraction using the index can significantly impact performance with large datasets.  This example shows how to correctly extract keys and improve performance.

## Bug
The `FlatListBug.js` file demonstrates using the index as a key, which leads to inefficient re-renders.

## Solution
The `FlatListSolution.js` file demonstrates the correct way to extract keys, using a unique identifier from each item in the data array.