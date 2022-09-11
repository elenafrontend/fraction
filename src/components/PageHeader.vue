<template lang="pug">
  header.page-header
    router-link(to="/").page-header__logo
      svg.page-header__logo-img.svg-icon
        use(xlink:href="#icon-logo")
      span.page-header__logo-title Fraction
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>
