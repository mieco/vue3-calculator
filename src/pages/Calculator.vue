<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCalculator } from '../composables/useCalculator'

const {
  displayValue,
  previousValue,
  handleNumber,
  handleOperator,
  handleEqual,
  handleClear,
  handleBackspace,
  handleDecimal,
  handlePercent
} = useCalculator()

const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('light-theme')
}
</script>

<template>
  <div class="calculator">
    <div class="background-effect"></div>
    <div class="status-bar">
      <div class="time">9:41</div>
      <div class="notch"></div>
      <div class="icons">
        <div class="signal"></div>
        <div class="wifi"></div>
        <div class="battery"></div>
      </div>
    </div>

    <div class="theme-toggle" @click="toggleTheme">
      <img v-if="isDarkMode" src="../assets/moon.svg" alt="Dark mode" />
      <img v-else src="../assets/sun.svg" alt="Light mode" />
    </div>

    <div class="display">
      <div class="previous-value" v-if="previousValue">{{ previousValue }}</div>
      <div class="current-value">{{ displayValue }}</div>
    </div>

    <div class="keypad">
      <div class="row">
        <button class="function" @click="handleClear">C</button>
        <button class="function" @click="handleBackspace">
          <img src="../assets/backspace.svg" alt="Backspace" />
        </button>
        <button class="function" @click="handlePercent">%</button>
        <button class="operator" @click="handleOperator('÷')">÷</button>
      </div>
      <div class="row">
        <button @click="handleNumber('7')">7</button>
        <button @click="handleNumber('8')">8</button>
        <button @click="handleNumber('9')">9</button>
        <button class="operator" @click="handleOperator('×')">×</button>
      </div>
      <div class="row">
        <button @click="handleNumber('4')">4</button>
        <button @click="handleNumber('5')">5</button>
        <button @click="handleNumber('6')">6</button>
        <button class="operator" @click="handleOperator('−')">−</button>
      </div>
      <div class="row">
        <button @click="handleNumber('1')">1</button>
        <button @click="handleNumber('2')">2</button>
        <button @click="handleNumber('3')">3</button>
        <button class="operator" @click="handleOperator('+')">+</button>
      </div>
      <div class="row">
        <button @click="handleDecimal">.</button>
        <button @click="handleNumber('0')">0</button>
        <button class="empty"></button>
        <button class="operator" @click="handleEqual">=</button>
      </div>
    </div>

    <div class="home-indicator"></div>
  </div>
</template>

<style scoped>
.calculator {
  max-width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.background-effect {
  position: absolute;
  width: 200px;
  height: 200px;
  background: #F1F2F3;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(100px);
  top: -100px;
  right: -100px;
  z-index: -1;
}

.status-bar {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  color: var(--text);
}

.time {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  font-size: 15px;
}

.notch {
  width: 164px;
  height: 32px;
  background: #000;
  border-radius: 0 0 24px 24px;
}

.icons {
  display: flex;
  gap: 8px;
}

.signal,
.wifi,
.battery {
  width: 20px;
  height: 12px;
  background: var(--text);
  opacity: 0.4;
}

.theme-toggle {
  width: 82px;
  height: 32px;
  background: var(--button);
  border-radius: 16px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
}

.theme-toggle img {
  width: 24px;
  height: 24px;
  opacity: 0.7;
  position: absolute;
  transition: transform 0.3s;
}

.theme-toggle img:first-child {
  transform: translateX(0);
}

.theme-toggle img:last-child {
  transform: translateX(50px);
}

.display {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 0;
  gap: 8px;
  min-height: 200px;
}

.previous-value {
  font-size: 40px;
  font-weight: 300;
  opacity: 0.4;
  line-height: 1.17;
}

.current-value {
  font-size: 96px;
  font-weight: 300;
  line-height: 1;
  word-break: break-all;
}

.keypad {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 8px;
}

.row {
  display: flex;
  gap: 16px;
}

button {
  flex: 1;
  height: 72px;
  border: none;
  border-radius: 24px;
  background: var(--button);
  color: var(--text);
  font-size: 32px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  line-height: 1.25;
  -webkit-tap-highlight-color: transparent;
}

button:active {
  opacity: 0.8;
}

button.operator {
  background: var(--operator);
}

button.function {
  background: var(--function);
}

button.empty {
  background: transparent;
  cursor: default;
}

button img {
  width: 28px;
  height: 28px;
}

.home-indicator {
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-indicator::after {
  content: '';
  width: 134px;
  height: 5px;
  background: var(--text);
  border-radius: 100px;
}
</style>