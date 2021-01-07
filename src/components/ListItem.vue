<template>
  <li class="list-item">
    <i class="badge" :class="`badge--${badgeColor}`"></i>
    <span class="text">{{ title }}</span>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    badgeColor: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
