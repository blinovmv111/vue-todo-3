<template>
  <div>
    <h2>{{ item.title }}</h2>
    <li class="list-item">
      {{ item.description }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
}
.list-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 30px;
  &:hover {
    .text {
      opacity: 0.7;
    }
  }
}
</style>
