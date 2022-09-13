<template lang="pug">
  .wrapper
    SvgSprite
    PageHeader
    router-view
</template>

<script>
import SvgSprite from '@/components/SvgSprite.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'App',

  components: {
    SvgSprite,
    PageHeader,
  },
};
</script>
