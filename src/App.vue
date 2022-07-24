<template lang="pug">
  .wrapper
    PageHeader
    main.page-content
      .container
        section.page-section
          .page-banner
            img(src="@/assets/images/4-3.jpg")
        section.page-section
          FractionList
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import FractionList from '@/components/FractionList.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    FractionList,
  },
};
</script>
