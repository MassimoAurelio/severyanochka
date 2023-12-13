import { defineStore } from 'pinia'

interface NavItem {
  label: string
  icon: string
  count: number
  link: string
}

export const useNavStore = defineStore('nav', {
  state: () => ({
    items: [
      { label: 'Избранное', icon: 'favorite', count: 0, link: '/favorites' },
      { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
      { label: 'Корзина', icon: 'cart', count: 1, link: '/cart' }
    ] as NavItem[]
  })
})