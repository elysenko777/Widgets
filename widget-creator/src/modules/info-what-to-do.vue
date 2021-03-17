<template lang="">
  <div class="info-what-to-do">
    <h2>Функции виджетов на сайте</h2>
    <div class="info-what-to-do__container">
      <img src="../assets/widget-function.png" alt="widget function" />
      <ul class="info-what-to-do__list" v-html="functionsBlock"></ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const widgetFunctions = [
      "Информируют зашедшего на сайт пользователя о свежих акциях, скидках и новинках коллекции",
      "Мотивируют клиента на покупку и невольно заставляют ознакомиться с торговым предложением",
      "Собирают контактные данные потенциальных клиентов",
      "Обеспечивают обратную связь и повышают уровень клиентского сервиса",
      "Стимулируют продажи. Например, отдельное окно сообщает юзеру о том, что сроки акции ограничены",
      "Делают сайт интерактивным. В результате время сессии растягивается, а пользователи проводят больше времени на странице. Это замечают поисковые системы, и сайт чаще попадает в топы поисковой выдачи."
    ];
    const functionsBlock = widgetFunctions
      .map((item, index) => {
        return `<li class="info-what-to-do__item">
              <span class="info-what-to-do__id">${++index}</span>
              <p class="info-what-to-do__text"> ${item} </p>
            </li>`;
      })
      .join("");
    return {
      functionsBlock
    };
  }
};
</script>

<style lang="scss">
.info-what-to-do {
  &__list {
    position: relative;
  }
  &__item {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }
  &__id {
    font-size: xx-large;
    font-weight: 700;
    color: #8891da;
  }
  &__text {
    padding: 0px 0px 0px 20px;
  }
  &__container {
    display: flex;
    align-items: center;
    img {
      width: 40%;
      margin-right: 20px;
    }
  }
}
</style>
