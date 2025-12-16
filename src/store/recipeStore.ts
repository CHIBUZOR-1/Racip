"use client";

import { create } from "zustand";
import axios from "axios";
import { getIngredients } from "@/lib/ingredients";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
interface Ingredient {
  ingredient: string;
  measure: string;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

interface RecipeStore {
    loading: boolean;
    recipes: Category[];
    recipe: Meal[];
    meal: any;
    getCategories: () => Promise<void>;
    getRecipeByCategory: (cat: string) => Promise<void>;
    getCategoryMealById: (id: string)=> Promise<void>;
};

export const recipeStore = create<RecipeStore>((set) => ({
    loading: false,
    recipes: [],
    recipe: [],
    meal: {},
    getCategories: async () => {
        try {
            set({ loading: true});
            const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            set({ recipes: data.categories, loading: false});
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            set({ loading: false, recipes: [] });
        } finally {
            set({ loading: false});
        }
    },
    getRecipeByCategory: async(cat) => {
        try {
            set({ loading: true});
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
            set({ recipe: data.meals, loading: false});
            console.log(data)
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            set({ loading: false, recipe: [] });
        } finally {
            set({ loading: false});
        }
    },
    getCategoryMealById: async(id) => {
        try {
            set({ loading: true});
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            set({ meal: { ...data.meals[0], ingredients: getIngredients(data.meals[0])}, loading: false});
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            set({ loading: false, meal: {} });
        } finally {
            set({ loading: false});
        }
    }
    
}));