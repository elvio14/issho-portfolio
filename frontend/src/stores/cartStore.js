import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const storeOrderTotal = ref(0)
  const hasChanged = ref(false)
  const itemsLength = computed(()=>
      items.value.length
    )

  const setOrderTotal = (total) => {
    storeOrderTotal.value = total
  }
  
  return { items, hasChanged, itemsLength, storeOrderTotal, setOrderTotal}
})
