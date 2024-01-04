import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemStore = defineStore('item', {
    //State
    state: () => {
        return {
            records: ref([]),
        }
    },
    //Getter
    getters:  {
        getRecords: (state) => state.records.value,
    },
    //Actions
    actions: {
        async getItems()
        {
            try {
                const response = await axios.get("api/items");
                if(response.status == 200){
                    this.records.value = response.data;
                    console.log("set", this.records.value);
                }
            } catch (error) {
                console.log(error.message);
            }
        },
        async addItem(itemName) 
        {
            if (!itemName == "") {
                try {
                    const response = await axios.post("api/item/store", {
                        item: { name: itemName },
                    });
                    this.getItems();//will request all records again
                    console.log(response);
                } catch (error) {
                    console.log(error.message);
                }
            }
        },
        async updateItem(item)
        {
            console.log("api/item/" + item.id);
            try {
                const response = await axios.put("api/item/" + item.id, {
                    item: item,
                });
                this.getItems();
                console.log(response);
            } catch (error) {
                console.log(error.message);
            }
        },
        async deleteItem(itemId){
            try {
                const response = await axios.delete("api/item/" + itemId);
                this.getItems();
                console.log(response);
            } catch (error) {
                console.log(error.message);
            }
        }        
    }
})