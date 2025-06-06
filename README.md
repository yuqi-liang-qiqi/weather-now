<p align="center">
  <img src="public/images/logo.svg" alt="Weather Now Logo" width="600" />
</p>

# Weather Now 天气预报应用

> 🎓 **教学项目说明**
> 
> 这是一个软件工程基础教学项目，旨在帮助学习者从零开始理解现代 Web 开发流程。
>
> 欲知这个天气预报应用的详情，请点击[这个网页](https://weather.yuqi-liang.tech/)。
> 
> - 本项目展示了如何构建一个基础但完整的 Web 应用
> - 涵盖了前端开发、API 调用、UI/UX 设计等核心概念
> - 融合了 AI 驱动开发的现代方法论
> - 作为入门项目，为学习更复杂的应用开发打下基础
> 
> 完整的教学系列项目，请访问我的 GitHub 主页查看更多进阶版本（目前正在开发中，欢迎提出任何建议）。
>

## ⚠️ 重要提示：API Key 使用说明

本项目使用 OpenWeather API 获取天气数据。为了保护 API Key 并确保项目的教育价值：

1. **获取自己的 API Key**
   - 访问 [OpenWeather](https://openweathermap.org/api) 注册账号
   - 在账号页面获取免费的 API Key
   - 新的 API Key 可能需要等待几小时才能激活

2. **配置环境变量**
   - 在项目根目录创建 `.env` 文件
   - 添加以下内容（替换为你的 API Key）：
     ```
     VITE_OPENWEATHER_API_KEY=你的API密钥
     ```
   - `.env` 文件已被添加到 `.gitignore`，不会被提交到 Git

3. **安全提示**
   - 永远不要在代码中直接硬编码 API Key
   - 不要将 `.env` 文件提交到版本控制系统
   - 在生产环境部署时，使用服务器的环境变量配置

4. **学习目的**
   - 本项目代码仅供学习参考
   - 请使用自己的 API Key 进行开发和测试
   - 这是一个良好的安全实践机会

## 🎯 学习要点

1. **基础知识**
   - React 组件开发
   - 现代 CSS 框架使用
   - API 调用和错误处理
   - 响应式设计实现

2. **进阶技能**
   - 状态管理
   - 组件复用
   - UI/UX 设计原则
   - 性能优化

3. **工程实践**
   - 项目结构组织
   - 代码规范
   - 文档编写
   - Git 版本控制

## 📑 相关产品需求文档

- [产品需求文档(PRD)](./docs/PRD.md)

## 🌟 特性

- 支持全球城市天气查询
- 展示未来三天天气预报
- 现代化的 UI 设计
- 响应式布局，支持移动端和桌面端
- 优雅的动画效果
- 支持回车快速搜索

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite 5
- **样式解决方案**: TailwindCSS
- **HTTP 请求**: Axios
- **API**: OpenWeather API
- **开发语言**: JavaScript/JSX

## 💡 主要功能

### 界面设计
- 渐变背景 (`bg-gradient-to-br from-blue-50 to-indigo-100`)
- 磨砂玻璃效果卡片设计
- 悬浮动画效果
- 响应式布局设计

### 交互优化
- 输入框焦点效果
- 按钮悬浮效果
- 天气卡片悬浮缩放效果
- 错误提示优化

## 🌤️ 天气描述对照表

为了提供更自然的英语表达，我们对 OpenWeather API 的标准天气描述进行了优化：

| API 原始描述 | 优化后描述 | 中文含义 |
|------------|-----------|---------|
| clear sky | Sunny | 晴天 |
| few clouds | Partly Cloudy | 少云 |
| scattered clouds | Mostly Cloudy | 多云 |
| broken clouds | Cloudy | 阴天 |
| overcast clouds | Overcast | 阴天 |
| light rain | Slight Rain | 小雨 |
| moderate rain | Moderate Rain | 中雨 |
| heavy rain | Heavy Rain | 大雨 |
| thunderstorm | Thunderstorms | 雷暴 |
| snow | Snowing | 下雪 |
| mist | Misty | 薄雾 |
| shower rain | Showers | 阵雨 |
| rain | Rainy | 下雨 |
| light snow | Light Snow | 小雪 |
| heavy snow | Heavy Snow | 大雪 |
| drizzle | Drizzling | 毛毛雨 |
| fog | Foggy | 雾 |
| haze | Hazy | 霾 |
| dust | Dusty | 扬尘 |

## 📦 项目结构

```
weather-now/
├── src/
│   ├── components/
│   │   └── WeatherCard.jsx    # 天气卡片组件
│   ├── App.jsx               # 主应用组件
│   └── index.css            # 全局样式
├── docs/                    # 项目文档
│   └── PRD.md              # 产品需求文档
├── public/                  # 静态资源
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
├── postcss.config.js       # PostCSS 配置
└── tailwind.config.js      # Tailwind 配置
```

## 🚀 如何运行

1. 克隆项目
```bash
git clone https://github.com/yuqi-liang-qiqi/weather-now
```

2. 安装依赖
```bash
npm install
```

3. 创建环境变量文件
创建 `.env` 文件并添加你的 OpenWeather API Key：
```
VITE_OPENWEATHER_API_KEY=你的API密钥
```

具体的API密钥信息，请见调用的第三方网站平台 [Open Weather Map](https://openweathermap.org/forecast5).

4. 启动开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

## 🎨 样式特点

1. **渐变效果**
   - 背景使用优雅的渐变色
   - 标题文字使用渐变色
   - 按钮使用渐变背景

2. **阴影效果**
   - 卡片阴影
   - 按钮立体感
   - 输入框细腻阴影

3. **动画效果**
   - 卡片悬浮放大
   - 按钮点击反馈
   - 输入框焦点动画

4. **响应式设计**
   - 移动端单列布局
   - 桌面端三列布局
   - 自适应间距和大小

## 📝 注意事项

1. 城市名称需要使用英文输入，例如：
   - 北京 → Beijing
   - 上海 → Shanghai
   - 广州 → Guangzhou
   - 深圳 → Shenzhen

2. API 限制
   - 免费版 API 有调用频率限制
   - 建议合理控制请求频率

## 🔨 补充信息：前端技术栈选型的原因说明

### React 18
   1. **成熟稳定**：React 拥有大规模的社区支持和丰富的生态系统，已在无数生产环境中得到验证
   2. **新特性支持**：React 18 引入了自动批处理、Suspense SSR 等新特性，可提升应用性能
   3. **学习曲线**：相比其他框架，React 的学习曲线相对平缓，适合作为教学项目
   4. **就业导向**：React 在业界拥有广泛的应用，掌握 React 有利于学生未来的职业发展
   5. **组件化开发**：React 的组件化思想非常适合天气应用这种 UI 交互密集的项目

### Vite 5
   1. **极速启动**：基于 ESM (ECMAScript Modules) 的开发服务器，提供近乎即时的冷启动速度（现代浏览器原生支持，无需转换或打包，浏览器可以并行加载多个模块，只加载实际需要的模块，提高性能）
   2. **快速热更新**：HMR (Hot Module Replacement) 性能优秀，开发体验顺畅（HMR 是一种开发时的功能，允许在应用运行时更新模块，而无需完全刷新页面）
   3. **优化构建**：使用 Rollup 进行生产构建，输出高度优化的静态资源（Rollup 是一个 JavaScript 模块打包器，专注于生产环境的代码打包和优化，特别擅长处理 JavaScript 库和应用的构建）
   4. **配置简单**：开箱即用的配置，无需复杂的 webpack 配置过程
   5. **现代化**：原生支持 TypeScript、JSX、CSS 等现代前端特性

### TailwindCSS
   1. **开发效率**：直接在 HTML 中使用原子类，无需切换文件编写 CSS
   2. **可维护性**：避免了 CSS 命名困扰，减少了样式冲突
   3. **响应式设计**：内置响应式设计系统，轻松实现多端适配
   4. **性能优化**：自动清除未使用的 CSS，最终打包体积小
   5. **设计一致性**：预设设计标准，确保整个应用的视觉一致性

### Axios
   1. **易用性**：提供简洁的 API，易于使用和理解
   2. **拦截器**：支持请求和响应拦截器，便于统一处理 API 调用
   3. **安全性**：自动转换 JSON 数据，内置 XSRF 防护
   4. **兼容性**：支持多种环境，包括浏览器和 Node.js
   5. **错误处理**：统一的错误处理机制，便于调试和维护

### 技术栈协同优势
1. **开发体验**：
   - Vite + React 提供极速的开发体验
   - TailwindCSS 的即时预览加快样式调整
   - Axios 的 Promise 基础与 React 异步处理完美配合

2. **学习价值**：
   - 涵盖现代前端开发的主流技术
   - 体现了当前企业级应用的技术选型思路
   - 为学习者提供全面的技术栈体验

3. **维护性能**：
   - 各个技术都有完善的文档和社区支持
   - 工具链集成度高，降低维护成本
   - 构建优化到位，确保生产环境性能