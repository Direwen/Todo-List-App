<template>
    <div class="flex flex-col gap-1 justify-center items-center">
        <listItem
            v-for="item in items"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script setup>
import listItem from "./listItem.vue";

const props = defineProps(["items"]);
</script>

<style></style>
