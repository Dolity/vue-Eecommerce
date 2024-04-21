import { defineStore } from "pinia"

export const useUserProductStore = defineStore("user-product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl:
          "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test2",
        imageUrl:
          "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
        quantity: 10,
        about: "testt2",
        status: "open",
        price: 100,
      },
    ],
    loaded: false,
  }),
  actions: {
    // search contains text ex. all test will show
    filterProduct(searchText) {
      return this.list.filter((product) => product.name.includes(searchText))
    },
  },
})
