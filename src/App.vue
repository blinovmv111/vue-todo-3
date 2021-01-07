<template>
  <div id="app">
    <div class="todo">
      <div class="todo__sidebar">
        <ul class="list">
          <ListItem
            v-for="item in items"
            :badgeColor="item.badgeColor"
            :title="item.title"
            :key="item.id"
          />
        </ul>
      </div>
      <div class="todo__tasks"></div>
    </div>
  </div>
</template>

<script>
import ListItem from './components/ListItem';

export default {
  name: 'App',
  components: { ListItem },
  data() {
    return {
      items: [
        {
          id: 1,
          badgeColor: 'grey',
          title: 'Изучение НТМL',
        },
        { id: 2, badgeColor: 'lime', title: 'Изучение СSS' },
        { id: 3, badgeColor: 'purple', title: 'Изучение препроцессоров' },
        { id: 4, badgeColor: 'black', title: 'Изучение JavaScript' },
        { id: 5, badgeColor: 'red', title: 'Изучение фреймворка Vue' },
        { id: 6, badgeColor: 'green', title: 'Разработка личного Pet-проекта' },
      ],
    };
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
  align-items: center;
  text-align: start;
  text-overflow: ellipsis;
}
.list-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    .text {
      opacity: 0.7;
    }
  }
}
.badge {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 30px;

  &--grey {
    background-color: #c9d1d3;
  }

  &--lime {
    background-color: #b6e6bd;
  }

  &--purple {
    background-color: #c355f5;
  }

  &--black {
    background-color: #08001a;
  }

  &--red {
    background-color: #ff6464;
  }

  &--green {
    background-color: #42b883;
  }
}
.text {
  padding-left: 10px;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  white-space: nowrap;
}
</style>
