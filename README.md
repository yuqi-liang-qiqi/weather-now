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

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。这也是一个很好的学习机会！

## 📖 许可

MIT License 
