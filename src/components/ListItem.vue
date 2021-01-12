<template>
  <li class="list-item" @click="addToTaskList">
    <!-- <i class="badge" :class="`badge--${badgeColor}`"></i> -->
    <span class="text">
      <strong>{{ index + 1 }}.</strong>
      {{ title }}</span
    >
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  filters: {
    uppercase(value) {
      return value.toUppercase();
    },
  },
  methods: {
    addToTaskList() {
      this.$emit('addToTaskList');
    },
  },
};
</script>

<style lang="scss" scoped>
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
