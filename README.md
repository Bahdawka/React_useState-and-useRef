# Controlled and Uncontrolled Forms React

## English (UA version below)

### About the Project
This project demonstrates the implementation and comparison of controlled and uncontrolled forms in React using TypeScript. It showcases two different approaches to handling form data:
- Controlled Form using `useState`
- Uncontrolled Form using `useRef`

### Getting Started
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

### Features
- **Controlled Form:**
  - Real-time form validation
  - State management using useState
  - Immediate feedback on user input

- **Uncontrolled Form:**
  - Direct DOM access using useRef
  - Form submission handling
  - Traditional form behavior

### Technical Stack
- React 18
- TypeScript
- Bootstrap 5
- Vite
- Axios

### API Integration
The project includes integration with JSONPlaceholder API to demonstrate:
- Asynchronous data fetching
- Loading states handling
- Error handling
- Display of user data

### Extended Features
- **API Integration:**
  - Fetches user data from JSONPlaceholder
  - Implements loading states
  - Handles errors gracefully
  - Displays user list

- **Form Components:**
  - Custom hook `useInput` for form state management
  - Bootstrap styling integration
  - Type-safe implementation with TypeScript
  - Form submission handling

### Project Structure
```
src/
├── components/
│   ├── ControlledForm.tsx   # Form with useState
│   └── UncontrolledForm.tsx # Form with useRef
├── utils/
│   └── api.ts              # API integration logic
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

### Best Practices Demonstrated
- TypeScript type safety
- React hooks usage
- Component composition
- Error boundary implementation
- Loading state management

## Українська

### Про проект
Цей проект демонструє реалізацію та порівняння контрольованих та неконтрольованих форм у React з використанням TypeScript. Представлено два різні підходи до обробки даних форми:
- Контрольована форма з використанням `useState`
- Неконтрольована форма з використанням `useRef`

### Початок роботи
1. Клонуйте репозиторій
2. Встановіть залежності:
```bash
npm install
```
3. Запустіть сервер розробки:
```bash
npm run dev
```

## Розгортання React Vite проекту на Vercel
посилання на перегляд проекту: https://react-use-state-and-use-ref.vercel.app/

### Особливості
- **Контрольована форма:**
  - Валідація форми в реальному часі
  - Управління станом за допомогою useState
  - Миттєвий відгук на введення користувача

- **Неконтрольована форма:**
  - Прямий доступ до DOM через useRef
  - Обробка відправки форми
  - Традиційна поведінка форми

### Технічний стек
- React 18
- TypeScript
- Bootstrap 5
- Vite
- Axios

### Інтеграція з API
Проект включає інтеграцію з API JSONPlaceholder для демонстрації:
- Асинхронного отримання даних
- Обробки станів завантаження
- Обробки помилок
- Відображення даних користувача

### Розширені можливості
- **Інтеграція з API:**
  - Отримання даних користувача з JSONPlaceholder
  - Реалізація станів завантаження
  - Грамотна обробка помилок
  - Відображення списку користувачів

- **Компоненти форм:**
  - Користувацький хук `useInput` для управління станом форми
  - Інтеграція стилізації Bootstrap
  - Реалізація з урахуванням типізації TypeScript
  - Обробка відправки форми

### структура проекту
```
src/
├── components/
│   ├── ControlledForm.tsx   # Форма з useState
│   └── UncontrolledForm.tsx # Форма з useRef
├── utils/
│   └── api.ts              # Логіка інтеграції з API
├── App.tsx                 # Головний компонент додатку
├── main.tsx               # Точка входу додатку
└── index.css              # Глобальні стилі
```

### Найкращі практики
- Типізація TypeScript
- Використання хуків React
- Композиція компонентів
- Реалізація обробки помилок
- Управління станом завантаження

## Розгортання React Vite проекту на Vercel
посилання на перегляд проекту: https://react-use-state-and-use-ref.vercel.app/
