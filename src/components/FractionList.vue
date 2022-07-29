<template lang="pug">
  ul.fraction-list
    li.fraction-item(
      v-for="fraction in catalog"
      :key="fraction.id"
    )
      .fraction-item__content
        .fraction-item__caption {{ fraction.name }}
        a.fraction-item__link(href="#") Перейти
      .fraction-item__logo
        .fraction-item__logo-icon
          svg.svg-icon
            use(:href="`#icon-${fraction.icon}`")
</template>

<script>
import CATALOG from '@/const/catalog';

export default {
  name: 'FractionsList',

  data() {
    return {
      catalog: CATALOG,
    };
  },
};
</script>
