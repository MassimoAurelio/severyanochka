import { defineStore } from 'pinia'
import managerSvg from '@/assets/manager.svg'

export const useManagerMenuStore = defineStore('managerStore', {
    
    state: () => ({
      avatar: managerSvg,
      name: 'Менеджер',
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
  