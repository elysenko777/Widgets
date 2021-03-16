<template>
  <div class="info">
    <div class="info-container">
      <div class="info-what">
        <h2>Виджет</h2>
        <p>
          <em>Виджет</em> – это графическое отображение информации, компактное
          приложение, которое выполняет одну функцию. Как правило, он служит
          либо дополнением к основной программе, либо украшением интерфейса.
        </p>
      </div>
      <div class="info-why">
        <h2>Зачем нужны виджеты</h2>
        <ul class="info-why__list">
          <li class="info-why__item">
            <img class="info-why__icon" src="../assets/icon1.png" />
            <p class="info-why__text">
              Удобство в использовании сайта
            </p>
          </li>
          <li class="info-why__item">
            <img class="info-why__icon" src="../assets/icon3.png" />
            <p class="info-why__text">
              Работают на привлечение внимания зашедшего пользователя
            </p>
          </li>
          <li class="info-why__item">
            <img class="info-why__icon" src="../assets/icon4.png" />
            <p class="info-why__text">
              Способ увеличить конверсию и повысить уровень лояльности клиентов
            </p>
          </li>
          <li class="info-why__item">
            <img class="info-why__icon" src="../assets/icon5.png" />
            <p class="info-why__text">Непрерывный поток продаж</p>
          </li>
        </ul>
      </div>
      <div class="info-what-to-do">
        <h2>Функции виджетов на сайте</h2>
        <div class="info-what-to-do__container">
          <img src="../assets/widget-function.png" alt="widget function" />
          <ul class="info-what-to-do__list">
            <li class="info-what-to-do__item">
              <span class="info-what-to-do__id">1</span>
              <p class="info-what-to-do__text">
                Информируют зашедшего на сайт пользователя о свежих акциях,
                скидках и новинках коллекции
              </p>
            </li>
            <li class="info-what-to-do__item">
              <span class="info-what-to-do__id">2</span>
              <p class="info-what-to-do__text">
                Мотивируют клиента на покупку и невольно заставляют ознакомиться
                с торговым предложением
              </p>
            </li>
            <li class="info-what-to-do__item">
              <span class="info-what-to-do__id">3</span>
              <p class="info-what-to-do__text">
                Собирают контактные данные потенциальных клиентов
              </p>
            </li>
            <li class="info-what-to-do__item">
              <span class="info-what-to-do__id">4</span>
              <p class="info-what-to-do__text">
                Обеспечивают обратную связь и повышают уровень клиентского
                сервиса
              </p>
            </li>
            <li class="info-what-to-do__item">
              <span class="info-what-to-do__id">5</span>
              <p class="info-what-to-do__text">
                Стимулируют продажи. Например, отдельное окно сообщает юзеру о
                том, что сроки акции ограничены
              </p>
            </li>
            <li class="info-what-to-do__item">
              <span class="info-what-to-do__id">6</span>
              <p class="info-what-to-do__text">
                Делают сайт интерактивным. В результате время сессии
                растягивается, а пользователи проводят больше времени на
                странице. Это замечают поисковые системы, и сайт чаще попадает в
                топы поисковой выдачи.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="conclusion">
        <h2>Заключение</h2>
        <p>
          <em>Используйте</em> и добавляйте виджеты на сайт, чтобы повышать конверсию,
          объемы продаж и уровень лояльности. Сегодня <em>виджет</em> – <em>это</em> не просто
          маленькая и полезная функция в операционной системе или программе, но
          и <em>актуальный инструмент маркетинга</em>.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    console.log("info");
  }
};
</script>

<style scoped lang="scss">
h2 {
  padding: 15px 0px;
}
p {
  padding: 15px 0px;
  text-align: justify;
}
em {
  font-weight: bold;
  color: #ff8236;
}
.info {
  padding: 16px;
  &-container {
    max-width: 960px;
    margin: 0 auto;
  }
  &-why {
    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    &__item {
      display: flex;
      margin: 10px;
      padding: 20px;
      max-width: 414px;
      border: 3px solid #8891da;
      border-style: dashed;
      border-radius: 10px;
      align-items: center;
    }
    &__icon {
      width: 25%;
      height: fit-content;
    }
    &__text {
      padding: 0px 0px 0px 15px;
      font-size: 18px;
    }
  }
  &-what-to-do {
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
}
</style>
