<template>
    <div class="w-full h-full relative">
        <input
            type="text"
            class="w-full text-lg py-1 pl-2 pr-10 border-none ring-0 outline-none rounded-md"
            v-model="itemName"
        />
        <button
            @click="create"
            class="w-fit h-full bg-slate-700 absolute right-0 top-0 py-1 px-1 rounded-r-md rounded-l-sm transition-all ease-in-out duration-200 active:scale-90"
        >
            <span
                class="material-symbols-outlined align-middle"
                :class="{ 'text-green-400': itemName, 'text-white': !itemName }"
            >
                add
            </span>
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useItemStore } from "../store/itemStore";

const store = useItemStore();
let itemName = ref("");
let create = () => {
    store.addItem(itemName.value);
    itemName.value = "";
}
</script>

<style></style>
