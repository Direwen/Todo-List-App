<template>
    <div class="w-full h-screen flex flex-col justify-center items-center bg-slate-300 px-2 py-4 m-auto sm:rounded-xl sm:w-8/12 sm:h-96 xl:w-6/12">
        <div class="w-full flex flex-col justify-center items-center gap-2">
            <h2 id="title" class="text-2xl font-bold text-slate-700 tracking-wider">Todo List</h2>
            <addItemForm></addItemForm>
        </div>
        <div class="w-full mt-4 grow overflow-y-scroll no-scrollbar">
            <div class="text-center text-slate-700 tracking-wider text-md" v-if="store.getRecords == 0">Nothing Here Yet...</div>
            <listView :items="store.getRecords" v-else/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import addItemForm from './components/addItemForm.vue';
import listView from './components/listView.vue';
import { useItemStore } from './store/itemStore';

//defining pinia store.
const store = useItemStore();
//life cycle hooks
onMounted(async () => {
    await store.getItems();
})
</script>