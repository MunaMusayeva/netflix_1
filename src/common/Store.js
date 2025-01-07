import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const themeStore = create(
  persist(
    set => ({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVkZjNkZDhhMmVhMTFhMzBkMDIwYzYiLCJpYXQiOjE3MzYyNDU0MjIsImV4cCI6MTczNzU0MTQyMn0.95QPd5DSTi8SReYnZuDR27h4I0VIrGDD5fIt48uEul4',
      addToken: (token) => set((prevState) => ({ ...prevState, token: token })),
    })
  )
)
