<template lang="pug">
  ul.fraction-list
    li.fraction-item(
      v-for="fraction in catalog"
      :key="fraction.id"
    )
      .fraction-item__content
        .fraction-item__caption {{ fraction.name }}
        router-link.fraction-item__link(:to="{ path: `/fraction/${fraction.id}` }")
          | Перейти
          svg.fraction-item__link-icon.svg-icon
            use(href="#icon-arrow")
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
