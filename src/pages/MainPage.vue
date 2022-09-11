<template lang="pug">
  section.page-section
    .page-banner
      img(src="@/assets/images/banner/hero-image.jpg")
  section.page-section
    FractionList
</template>

<script>
import FractionList from '@/components/FractionList.vue';

export default {
  name: 'MainPage',

  components: {
    FractionList,
  },
};
</script>
