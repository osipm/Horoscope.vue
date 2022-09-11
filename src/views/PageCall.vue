<template>
  <p class="text-gratitude">Спасибо за Ваши ответы!</p>
  <p class="text-congratulations">
    Поздравляем! Прослушать свой персональный гороскоп возможно уже сейчас!
  </p>
  <p class="fatty-text">2021 год Вас ошарашит!</p>
  <p class="text">
    Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите совсем
    скоро, возможно это 17-18 ноября!
  </p>
  <p class="text">
    Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и
    позвонить со своего мобильного телефона. Позвоните и Прослушайте очень
    серьезную информацию!
  </p>
  <button class="btn" @click="getData">
    <img
      class="icon-call"
      src="../components/image/icon/call.svg"
      width="27"
      height="25"
    />Звонить и слушать
  </button>
  <p v-if="isVisibleMessage">Завантаження таблиці</p>
  <table class="table" v-if="isVisibleTable">
    <thead>
      <tr>
        <th>найменування</th>
        <th>значення</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>name</td>
        <td>{{ dataTable?.name }}</td>
      </tr>
      <tr>
        <td>height</td>
        <td>{{ dataTable?.height }}</td>
      </tr>
      <tr>
        <td>mass</td>
        <td>{{ dataTable?.mass }}</td>
      </tr>
      <tr>
        <td>hair_color</td>
        <td>{{ dataTable?.hair_color }}</td>
      </tr>
      <tr>
        <td>skin_color</td>
        <td>{{ dataTable?.skin_color }}</td>
      </tr>
      <tr>
        <td>eye_color</td>
        <td>{{ dataTable?.eye_color }}</td>
      </tr>
      <tr>
        <td>birth_year</td>
        <td>{{ dataTable?.birth_year }}</td>
      </tr>
      <tr>
        <td>gender</td>
        <td>{{ dataTable?.gender }}</td>
      </tr>
      <tr>
        <td>homeworld</td>
        <td>{{ dataTable?.homeworld }}</td>
      </tr>
      <tr>
        <td>films</td>
        <td>
          <p v-for="film in dataTable?.films" :key="film">{{ film }}</p>
        </td>
      </tr>
      <tr>
        <td>species</td>
        <td>
          <p v-for="specie in dataTable?.species" :key="specie">{{ specie }}</p>
        </td>
      </tr>
      <tr>
        <td>vehicles</td>
        <td>
          <p v-for="vehicle in dataTable?.films" :key="vehicle">
            {{ vehicle }}
          </p>
        </td>
      </tr>
      <tr>
        <td>starships</td>
        <td>
          <p v-for="starship in dataTable?.films" :key="starship">
            {{ starship }}
          </p>
        </td>
      </tr>
      <tr>
        <td>created</td>
        <td>{{ dataTable?.created }}</td>
      </tr>
      <tr>
        <td>edited</td>
        <td>{{ dataTable?.edited }}</td>
      </tr>
      <tr>
        <td>homeworld</td>
        <td>{{ dataTable?.url }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isVisibleTable = ref(false);
const isVisibleMessage = ref(false);
const dataTable = ref({});

function getData() {
  isVisibleMessage.value = true;
  fetch("https://swapi.dev/api/people/1/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataTable.value = data;
    })
    .catch(() => {
      console.log("Ошибка");
    })
    .finally(() => {
      isVisibleTable.value = true;
      isVisibleMessage.value = false;
    });
}
</script>

<style scoped>
p {
  margin-bottom: 19px;
  color: var(--vt-c-light-black);
  font-weight: 500;
}
.text-gratitude {
  font-size: 14px;
  line-height: 1.36;
  margin-top: 24px;
}
.text-congratulations {
  font-size: 14px;
  line-height: 1.5;
  color: var(--vt-c-blue);
}

.fatty-text {
  font-size: 18px;
  line-height: 1.06;
  margin: 0;
}

.text {
  font-size: 14px;
  line-height: 1.36;
}

.btn {
  height: 45px;
  width: 100%;
  background: var(--vt-c-blue);
  border: 1px solid var(--vt-c-blue);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.57;
  text-align: center;
  text-transform: uppercase;
  color: var(--vt-c-white);
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

@media screen and (min-width: 375px) {
  .btn {
    max-width: 329px;
    margin-left: auto;
    margin-right: auto;
  }
}

.btn:hover {
  background: var(--vt-c-dark-blue);
}

.icon-call {
  margin-left: 18px;
  margin-right: 18px;
}
@media screen and (min-width: 375px) {
  .icon-call {
    margin-left: 40px;
    margin-right: 28px;
  }
}

.table {
  border: 3px solid var(--vt-c-dark-blue);
  width: 100%;
  overflow-x: scroll;
  display: block;
}

th,
td {
  border: 1px solid var(--vt-c-dark-blue);
  padding: 0%;
}

@media screen and (min-width: 375px) {
  th {
    width: 310px;
  }
}
</style>
