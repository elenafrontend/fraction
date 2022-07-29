<template lang="pug">
  .wrapper
    SvgSprite
    PageHeader
    main.page-content
      .container
        section.page-section
          .page-banner
            img(src="@/assets/images/banner/hero-image.jpg")
        section.page-section
          FractionList
</template>

<script>
import SvgSprite from '@/components/SvgSprite.vue';
import PageHeader from '@/components/PageHeader.vue';
import FractionList from '@/components/FractionList.vue';

export default {
  name: 'App',
  components: {
    SvgSprite,
    PageHeader,
    FractionList,
  },
};
</script>
