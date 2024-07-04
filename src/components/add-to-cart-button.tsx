'use client'

import { useCart } from '@/contexts/cart-context'
export interface AddToCartButtonProps {
  productID: number
}

export function AddToCartButton({ productID }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productID)
  }
  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
