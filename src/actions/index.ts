import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

const categories: any[] = []

 export const server = {
  getCategories: defineAction({
    handler: async () => {
      const categoryResponse = await fetch(
        "https://dummyjson.com/products/categories"
      );
      
      return await categoryResponse.json();
    }
  }),
  addToCartAction: defineAction({
    input: z.object({
      id: z.string(),
    }),
    handler: async (input) => {
      console.log('helloo')
    }
  })
}