<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
  </base-card>
  <base-card>
    <component :is="selectedTab"></component>
  </base-card>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
}
</script>

<style scoped></style>