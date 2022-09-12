<template lang="pug">
  article.page-section
    .fraction-card
      .fraction-card__img
        img(src='https://github.com/elenafrontend/fraction/blob/main/src/assets/images/banner/hero-image.jpg')
      .fraction-card__info
        .title {{ fraction.name }}

        .fraction-card__section
          .subtitle Принимаем
          .fraction-card__note(v-if="fraction.note") {{ fraction.note }}
          ul.fraction-card__list
            li.fraction-card__item(v-for="item in fraction.items") {{ item }}

      .fraction-card__section.fraction-card__section--border(v-if="fraction.banList")
        .subtitle Не принимаем
        ul.fraction-card__list(v-if="fraction.banList.length > 1" )
          li.fraction-card__item(v-for="item in fraction.banList") {{ item }}
        .fraction-card__note(v-else) {{ fraction.banList[0] }}

      .fraction-card__section.fraction-card__section--border
        .subtitle Как подготовить
        .fraction-card__note {{ fraction.preparation }}
</template>

<script>
import CATALOG from '@/const/catalog';

export default {
  name: 'FractionPage',

  data() {
    return {
      fraction: {},
    };
  },

  computed: {
    fractionId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.fraction = CATALOG.find((item) => item.id === this.fractionId);
  },
};
</script>
