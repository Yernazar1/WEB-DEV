# online-store

Simple online store demo for Lab 4.

## Install

1. Перейдите в папку:

```bash
cd lab4/task2/online-store
```

2. Установите зависимости:

```bash
npm install
```

## Run

```bash
ng serve
```

Открыть `http://localhost:4200/`.

## Проект

- Angular 17+ с standalone компонентами
- Строгий TypeScript
- Роутинг: `/products` (редирект с `/`)
- Компоненты: `ProductListComponent`, `ProductCardComponent`
- Модель: `Product` (`product.model.ts`)
- Данные: 10 реальных товаров с Kaspi.kz
- Share: WhatsApp + Telegram
- Галерея: переключение изображений миниатюрами
- Responsive стиль с CSS Grid/Flexbox

## Building

To build the project run:

```bash
ng build
```

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
