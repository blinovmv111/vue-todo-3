<template>
  <div id="app">
    <div class="todo">
      <div class="todo__sidebar">
        <ul class="list">
          <ListItem
            v-for="(item, index) in items"
            :title="item.title"
            :key="item.id"
            @addToTaskList="addToTaskList(index)"
          />
        </ul>
      </div>
      <div class="todo__tasks">
        <ul class="list">
          <TaskItem :item="selectedItem" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './components/ListItem';
import TaskItem from './components/TaskItem';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { ListItem, TaskItem },
  data() {
    return {
      // itemsTask: [],
      selected: -1,
    };
  },
  computed: {
    ...mapGetters({ items: 'getData' }),
    // items() {
    //   return this.$store.getters.getData;
    // },
    selectedItem() {
      if (this.selected === -1) return {};
      return this.items[this.selected];
    },
  },
  methods: {
    ...mapActions(['ActionGetData']),
    addToTaskList(index) {
      // this.itemsTask.push(this.items[index]);
      this.selected = index;
    },
  },
  created() {
    this.ActionGetData(1000);
    // this.$store.dispatch('ActionGetData', 1000);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.todo {
  width: calc(100vw - 400px);
  height: calc(100vh - 200px);
  box-shadow: 1px 2px 20px #d6d5d5;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 2fr 5fr;
  &__sidebar {
    background-color: #f4f6f8;
    border-right: 1px solid #f1f1f1;
    padding: 60px 20px;
  }
  &__tasks {
    padding: 60px;
  }
}
.list {
  display: grid;
  grid-template-rows: repeat(6, minmax(60px, auto));
  grid-auto-flow: row;
  align-items: center;
  text-align: start;
  text-overflow: ellipsis;
}
</style>
