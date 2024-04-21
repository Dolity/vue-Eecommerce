import { defineStore } from "pinia"

export const useAdminProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        id: 1,
        name: "Product 1",
        image: "https://via.placeholder.com/150",
        price: 100,
        quality: 10,
        remainQuantity: 12,
        status: "active",
        updateAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: "Product 2",
        image: "https://via.placeholder.com/150",
        price: 200,
        quality: 20,
        remainQuantity: 25,
        status: "inactive",
        updateAt: new Date().toISOString(),
      },
      {
        id: 3,
        name: "Product 3",
        image: "https://via.placeholder.com/150",
        price: 300,
        quality: 30,
        remainQuantity: 37,
        status: "active",
        updateAt: new Date().toISOString(),
      },
    ],
  }),
  actions: {
    getProduct(index) {
      return this.list[index]
    },
    addProduct(productData) {
      productData.remainQuantity = productData.quality
      productData.updateAt = new Date().toISOString()
      this.list.push(productData)
    },
    updateProduct(index, productData) {
      this.list[index].name = productData.name
      this.list[index].image = productData.image
      this.list[index].quality = productData.quality
      this.list[index].remainQuantity = productData.quality
      this.list[index].status = productData.status
      this.list[index].updateAt = new Date().toISOString()
    },
    removeProduct(index) {
      this.list.splice(index, 1)
    },
  },
})
