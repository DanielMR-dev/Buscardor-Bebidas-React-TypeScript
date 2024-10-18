import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExist: (id: Recipe['idDrink']) => boolean;
};

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }));
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));
        }
        createRecipesSlice(set, get, api).closeModal();
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id);
    }
});
