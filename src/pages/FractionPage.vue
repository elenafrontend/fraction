<template lang="pug">
  main.page-content.page-content--color
    .container
      article.page-section
        .fraction-card
          .fraction-card__img
            //img(src='')
          .fraction-card__title.title {{ fraction.name }}

          .fraction-card__info(v-if="fractionInfo")
            .fraction-card__section
              .subtitle Принимаем
              .fraction-card__note(v-if="fractionInfo.note") {{ fraction.note }}
              ul.fraction-card__list
                li.fraction-card__item(v-for="item in fractionInfo.items") {{ item }}

            .fraction-card__section.fraction-card__section--border(v-if="fractionInfo.banList")
              .subtitle Не принимаем
              ul.fraction-card__list(v-if="fractionInfo.banList.length > 1" )
                li.fraction-card__item(v-for="item in fractionInfo.banList") {{ item }}
              .fraction-card__note(v-else) {{ fractionInfo.banList[0] }}

            .fraction-card__section.fraction-card__section--border
              .subtitle Как подготовить
              .fraction-card__note {{ fractionInfo.preparation }}

          .fraction-card__section(v-else) Скоро здесь будет описание фракции
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

    fractionInfo() {
      return this.fraction.info;
    },
  },

  mounted() {
    this.fraction = CATALOG.find((item) => item.id === this.fractionId);
  },
};
</script>
