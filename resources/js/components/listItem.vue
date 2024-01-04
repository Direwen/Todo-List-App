<template>
    <div
        class="w-full rounded-sm text-slate-700 flex justify-between items-center "
        :class="{
            'bg-slate-500 text-slate-300': item.completed,
            'bg-slate-400 text-white': !item.completed,
        }"
    >
        <!-- left side -->
        <span
            class="text-sm font-semibold grow py-1 px-2"
            :class="{ 'line-through': item.completed }"
            @click="update"
        >
            {{ item.name }}
        </span>
        <!-- right side -->
        <div>
            <!-- <input
                type="checkbox"
                @change="update"
                v-model="isChecked"
                hidden
            /> -->
            <button
                @click="store.deleteItem(item.id)"
                class="transition-all ease-in-out duration-200 active:scale-75 bg-white h-full rounded-r p-1"
            >
                <span
                    class="material-symbols-outlined align-middle text-md text-red-700"
                >
                    delete
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useItemStore } from "../store/itemStore";

const store = useItemStore();
const props = defineProps(["item"]);
//to convert 0 / 1 to boolean
// const isChecked = computed(() => props.item.completed !== 0);
const update = () => {
    //will change the completed value to the opposite of the current value
    props.item.completed = !props.item.completed;
    //will dispatch an action to update record
    store.updateItem(props.item);
};
</script>

<style></style>
