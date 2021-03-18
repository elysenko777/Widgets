import { WidgetInfoItem } from "../models/index";

const widgetList: WidgetInfoItem[] = [
  {
    icon: "countdown.png",
    title: "countdown",
    description: `С помощью этого виджета, 
                вы легко проинформируете клиентов, сколько 
                времени осталось до акций или распродажи. Создайте 
                свой отсчет времени до любого важного события на вашем сайте.`
  },
  {
    icon: "popup.png",
    title: "popup",
    description: `Всплывающее окно, которое появляется во время посещения страницы. 
                Используйте для рекламы услуг и продуктов компании.`
  },
  {
    icon: "sticky-popup.png",
    title: "sticky popup redirect",
    description: `Статический, выезжающий popup, который находится сбоку на странице все время. 
                Используйте для показа рекламы, акций, и новостей. 
                Менее навязчивый, нежели обычный попап.`
  }
];

export default widgetList;
