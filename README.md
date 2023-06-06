# ITGIRLschool_JS_Week_22

## Теоретические вопросы

### 1. Что такое props и можно ли использовать props в функциональных компонентах?
`props` (сокращение от properties — свойства) - это объект, который содержит свойства, переданные родительским компонентом дочернему компоненту. В React компоненты обычно принимают `props` как первый параметр функции (обычно это объект, называемый `props`), который позволяет родительскому компоненту передавать данные в дочерний компонент.
Функциональные компоненты это обычные функции JavaScript, которые принимают входные параметры и возвращают React-элементы. В функциональных компонентах `props` можно использовать точно так же, как в классовых компонентах.

### 2. Нужно ли выделять в отдельный компонент статью в блоге?
Выделение статьи в отдельный компонент зависит от проекта. Это может улучшить читаемость и переиспользуемость кода. Если в проекте есть несколько статей, то выделение статьи в компонент может быть хорошей идеей. Можно создать отдельный компонент `Article` и разделить на отдельные компоненты контент, входящий в состав статьи: фото, картинки, текст, а затем использовать эти компоненты внутри компонента статьи.

### 3. Можно ли использовать React без JSX?
Да, можно использовать React без JSX. JSX - это просто синтаксический сахар, который упрощает разработку компонентов и позволяет описывать их в более естественном HTML-стиле. Но React может быть использован и без JSX с помощью метода React.createElement(). Однако это делает код более громоздким, в таком коде тяжело находить ошибки, и поддерживать его. Поэтому лучше все же использовать JSX.

### 4. Чем отличается JSX от HTML?
И JSX, и HTML являются языками разметки.
JSX - это язык разметки, который используется как часть React. Он оптимизирован для создания компонентов и имеет ряд специфических функций, связанных с рендерингом и поведением компонентов. Помимо HTML, он также включает в себя поддержку JavaScript.
Различия между JSX и HTML:
- Синтаксис: JSX использует синтаксис, который похож на HTML, но использует скобки вместо кавычек. Он также поддерживает JavaScript внутри своих тегов. HTML использует кавычки вокруг атрибутов и не предоставляет такой же уровень взаимодействия с JavaScript.
- Наименование: в JSX имена свойств задаются с использованием camelCase, HTML использует kebab-case.
- имена классов: в JSX - используется ключевое слово className, в HTML - class.
- Комментарии: в JSX комментарии обрамляются фигурными скобками, в HTML - закрывающими тегами.

### 5. Для чего нам нужны свойства (props) компонентов?
Свойства (props) в компонентах React - это переданные им значения, доступные через объект `props`. Они используются для передачи данных от родительского компонента к дочерним, чтобы конфигурировать их и подстроить под нужные нужды.
Пропсы позволяют переиспользовать компоненты, а также использовать динамически создаваемые элементы, не привязываясь к конкретному значению.

### 6. В примере с CardList чем можно было бы заменить <React.Fragment>?
Можно было бы заменить на короткий синтаксис `<> ... </>`. 
```
import React from 'react'
import Card from './Card';

function CardList() {
  return (
    <>
      <Card
        title="Зимние ботинки"
        price={99}
        description="Такие только у нас"
        imgLink="https://shop/winter_boots.jpg"
      />
      <Card
        title="Пляжные тапки"
        price={23}
        description="Надеюсь, пригодятся"
        imgLink="https://shop/slippers.jpg"
      />
      <Card
        title="Праздничные туфли"
        price={85}
        description="Теперь и в чёрном цвете"
        imgLink="https://shop/shoes.jpg"
      />
    </>
  );
}

export default CardList;
```
Но могут быть проблемы с поддержкой такого синтаксиса устаревшими браузерами.

### 7. Можно ли сказать, что классовые и функциональные компоненты равнозначны по функциональности?
Да, можно сказать, что классовые и функциональные компоненты равнозначны по функциональности. Однако, в зависимости от задачи и стиля программирования, один подход может быть более удобен и предпочтителен, чем другой. Функциональные компоненты обычно считаются более простыми и легкими в использовании, в то время как классы могут быть более удобными для работы с состояниями и жизненным циклом компонентов.

### 8. Можно ли полностью описать приложение, используя только функциональные компоненты?
Да, можно полностью описать приложение, используя только функциональные компоненты. Функциональные компоненты позволяют создавать компоненты на основе функций, которые принимают определенные параметры и возвращают некоторый JSX код. Таким образом, все элементы пользовательского интерфейса могут быть описаны с использованием функциональных компонентов. Кроме того, функциональные компоненты могут использоваться для описания бизнес-логики и управления состоянием приложения с помощью хуков, таких как useState, useEffect, useContext и т.д. В результате, используя только функциональные компоненты, можно полностью описать приложение, включая его пользовательский интерфейс и бизнес-логику.

### 9. Какой командой мы делаем экспорт компонента для возможности его использования в других местах приложения? 
```
export default ComponentName;
```
где ComponentName - название экспортируемого компонента.

### 10. Изучите структуру компонентов в проекте https://github.com/alisa-tsvetkova/EthereumUI и напишите, какой именно компонент является самым верхним, а какой самым «глубоким»?
Самым верхним компонентом в проекте является компонент App, так как он является корневым компонентом, который рендерит все остальные компоненты внутри себя.
Самым «глубоким» компонентом можно считать компоненты, которые не имеют дочерних компонентов и являются самостоятельными элементами интерфейса. Например, это могут быть компоненты Popup и Alert. Однако, можно рассмотреть и другую перспективу, считая самыми «глубокими» компонентами те, которые находятся на самом нижнем уровне вложенности. То есть в данном случае, это компоненты, которые находятся в папке src/components.

### 11. Какой командой можно сгенерировать разметку/компоненты на основе заранее заданного массива элементов? Приведите пример.
Одним из способов генерации компонентов на основе массива в React является использование функции `map()`. 
У нас есть массив объектов, каждый из которых представляет определенный элемент с изображением и названием:
```
const items = [
  { id: 1, name: "Item 1", img: "image1.jpg" },
  { id: 2, name: "Item 2", img: "image2.jpg" },
  { id: 3, name: "Item 3", img: "image3.jpg" },
  { id: 4, name: "Item 4", img: "image4.jpg" },
];
```
Для отображения элементов мы можем создать отдельный компонент `Item`, который будет принимать на вход свойства из объекта элемента:

```
function Item({id, name, img}) {
  return (
    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}
```
Затем мы можем использовать функцию `map()` для создания компонентов `Item` на основе массива объектов:
```
function App() {
  const items = [
    { id: 1, name: "Item 1", img: "image1.jpg" },
    { id: 2, name: "Item 2", img: "image2.jpg" },
    { id: 3, name: "Item 3", img: "image3.jpg" },
    { id: 4, name: "Item 4", img: "image4.jpg" },
  ];

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
```
Здесь мы проходим по массиву `items` с помощью `map()`, создавая для каждого элемента компонент `Item` и передавая в него свойства из объекта элемента с помощью оператора расширения. 