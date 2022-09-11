<template>
  <header>
    <div class="block">
      <h1 class="title">Новый гороскоп на 2021 год!</h1>
      <p class="text">Узнайте, что Вас ждёт.</p>
    </div>
  </header>
</template>
<style scoped>
header {
  background: var(--vt-c-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 14px 12px;
}

@media screen and (min-width: 623px) {
  header {
    padding: 10px 12px;
  }
}

.block {
  max-width: 289px;
  margin: auto;
}

@media screen and (min-width: 375px) {
  .block {
    max-width: 329px;
  }
}
@media screen and (min-width: 623px) {
  .block {
    max-width: 623px;
  }
}
.title {
  font-weight: 700;
  font-size: 17px;
  line-height: 0.94;
  text-transform: uppercase;
  color: #afdce6;
}

@media screen and (min-width: 623px) {
  .title {
    font-size: 20px;
    line-height: 1.1;
  }
}

.text {
  font-weight: 700;
  font-size: 11px;
  line-height: 1.26;
  color: #afdce6;
}

@media screen and (min-width: 623px) {
  .text {
    font-size: 16px;
    line-height: 1.44;
  }
}
</style>
