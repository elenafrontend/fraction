<template lang="pug">
  div Fraction page {{ $route.params.id }}
</template>

<script>
// import CATALOG from '@/const/catalog';

export default {
  name: 'FractionPage',

  data() {
    return {
      fraction: null,
    };
  },

  computed: {
    fractionId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    // this.fraction = CATALOG.find((item) => item.id === this.fractionId);
  },
};
</script>
