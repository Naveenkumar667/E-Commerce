'use client'

import { createSlice } from '@reduxjs/toolkit'

// Load cart from localStorage for persistence
const loadCartFromStorage = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : { items: [], total: 0 }
  }
  return { items: [], total: 0 }
}

const initialState = loadCartFromStorage()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
      
      if (existingItemIndex >= 0) {
        // Item already exists, increase quantity
        state.items[existingItemIndex].quantity += 1
      } else {
        // New item, add to cart
        state.items.push({ 
          ...action.payload, 
          quantity: 1
        })
      }
      // Recalculate total in INR
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter(item => item.id !== itemId)
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload
      const item = state.items.find(item => item.id === itemId)
      
      if (item && quantity > 0) {
        item.quantity = quantity
        state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(state))
        }
      }
    },
  },
})

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer