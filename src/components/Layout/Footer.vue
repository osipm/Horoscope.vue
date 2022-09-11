<template>
  <footer class="footer" v-if="$route.meta.footer">
    2020 © HOROSCOP PERSONAL
  </footer>
  <p class="text" v-if="$route.meta.footerText">
    TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA
    LUI DECLARATI CA AVETI 18
  </p>
</template>
<style scoped>
.footer {
  font-weight: 400;
  font-size: 10px;
  line-height: 2.2;
  text-align: center;
  text-transform: lowercase;
  color: var(--vt-c-gray);
  padding: 5px;
}

@media screen and (min-width: 623px) {
  .footer {
    font-size: 12px;
    line-height: 1.83;
  }
}

.text {
  font-weight: 700;
  font-size: 6px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0 16px;
  color: #c9c9c9;
  max-width: 288px;
  margin: auto;
}
</style>
