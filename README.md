# Vue 3 计算器

一个使用 Vue 3 + TypeScript + Tailwind 构建的精美计算器应用，完美还原Figma设计。

## 特性

- 🎨 完美还原Figma设计
- 🌓 支持亮色/暗色主题切换
- 📱 移动端优先的响应式设计
- ⌨️ 完整的计算器功能
  - 基本运算（加减乘除）
  - 百分比计算
  - 小数点输入
  - 清除和退格功能
- 🎯 精确的数字格式化
- ✨ 流畅的动画效果

## 技术栈

- Vue 3
- TypeScript
- Tailwind CSS
- Vite
- Composition API

## 开始使用

1. 克隆项目
```bash
git clone https://github.com/mieco/vue3-calculator.git
cd vue3-calculator
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 设计规范

### 颜色系统

#### 暗色主题
- 背景色：#17171C
- 按钮背景：#2E2F38
- 运算符按钮：#4B5EFC
- 功能按钮：#4E505F
- 文字颜色：#FFFFFF

#### 亮色主题
- 背景色：#F1F2F3
- 按钮背景：#FFFFFF
- 运算符按钮：#4B5EFC
- 功能按钮：#4E505F
- 文字颜色：#000000

### 字体

- 主字体：Work Sans
- 数字显示：96px (当前值) / 40px (历史值)
- 按钮文字：32px
- 状态栏：SF Pro Text

## 许可证

MIT