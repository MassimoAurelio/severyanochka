import { defineStore } from 'pinia'
import avatarSvg from '@/assets/avatar.svg'

export const useUserMenuStore = defineStore('userMenu', {
  state: () => ({
    avatar: avatarSvg,
    name: 'Алексей',
    menu: [
      { label: 'Профиль', link: '/profile' },
      { label: 'Выйти', action: 'loguot' }
    ],
    isOpen: false,
    isAuth: false
  }),
  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    onClickItem(action: string) {
      console.log(action)
    }
  }
})

