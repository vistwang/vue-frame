<template>
  <div>
      <button @click="addItem()">add</button>
  </div>
</template>

<script>
import store from '@/store';
export default {
    name: 'add-info',
    
    data: () => {
        return {

        }
    },
    methods: {
        addItem() {
            store.commit('add');
        }
    }
}
</script>

<style>

</style>