import { defineAction } from 'astro:actions';

const categories: any[] = []

 export const server = {
  getCategories: defineAction({
    handler: async () => {
      const categoryResponse = await fetch(
        "https://dummyjson.com/products/categories"
      );
      
      return await categoryResponse.json();
    }
  })
}