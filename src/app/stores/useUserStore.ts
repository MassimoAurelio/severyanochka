import { defineStore } from 'pinia'
import avatarSvg from '@/assets/avatar.svg'

export const useUserMenuStore = defineStore('userMenu', {
  state: () => ({
    avatar: avatarSvg,
    name: 'Алексей',
    menu: [
      { label: 'Профиль', link: '/profile' },
      { label: 'Выйти', action: 'logout' }
    ],
    isOpen: false,
    isAuth: true,
    isLogoutClicked: false
  }),
  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    onClickItem(action: string) {
      if (action === 'logout') {
        this.logout()
        this.isLogoutClicked = true
      }
      if (action === 'login') {
        this.logIn()
        this.isAuth = true
      }
    },
    logout() {
      this.isAuth = false
    },
    logIn() {
      this.isAuth = true
    }
  }
})
