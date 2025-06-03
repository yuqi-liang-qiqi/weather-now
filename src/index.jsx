// 这段代码的作用是：找到页面中 id 为 root 的元素，并用 React 来控制它的内容，从 App 组件开始渲染

console.log('App started');

// 必须在 React 渲染之前引入，否则 Tailwind 样式不会生效
import './index.css';

// 引入 React 库，这是使用 JSX（像 <App /> 这样的语法）的前提。
// 虽然 React 18+ 中你可能不直接用 React 对象，但它仍然是 JSX 编译所需的依赖。
import React from 'react';

// 这里用的是 react-dom/client，是 React 18 开始的新 API，支持 createRoot（之前用的是 ReactDOM.render()）。
import ReactDOM from 'react-dom/client';

// 引入定义的 App 组件，它是应用的主组件，所有的 UI 和功能都会从这里开始。
import App from './App';

// 找到 HTML 页面中的 <div id="root"></div> 元素（一般在 public/index.html 中）
// 调用 ReactDOM.createRoot() 创建一个“根 React 渲染容器”，React 会把所有的组件渲染进这里面
const root = ReactDOM.createRoot(document.getElementById('root'));

// 把 App 组件渲染到这个根容器里。React 会从 <App /> 开始构建整个组件树，然后显示在页面上。
root.render(<App />);



