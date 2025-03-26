import { ref, computed } from 'vue'

export function useCalculator() {
  const currentValue = ref('0')
  const previousValue = ref('')
  const operator = ref('')
  const shouldResetDisplay = ref(false)

  const displayValue = computed(() => {
    const value = parseFloat(currentValue.value)
    if (isNaN(value)) return '0'
    return formatNumber(value)
  })

  function formatNumber(num: number): string {
    const parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  function handleNumber(num: string) {
    if (shouldResetDisplay.value) {
      currentValue.value = num
      shouldResetDisplay.value = false
    } else {
      currentValue.value = currentValue.value === '0' ? num : currentValue.value + num
    }
  }

  function handleOperator(op: string) {
    if (operator.value && !shouldResetDisplay.value) {
      calculate()
    }
    previousValue.value = currentValue.value + ' ' + op
    operator.value = op
    shouldResetDisplay.value = true
  }

  function handleEqual() {
    if (!operator.value) return
    calculate()
    previousValue.value = ''
    operator.value = ''
  }

  function calculate() {
    const prev = parseFloat(previousValue.value)
    const current = parseFloat(currentValue.value)
    let result = 0

    switch (operator.value) {
      case '+':
        result = prev + current
        break
      case '−':
        result = prev - current
        break
      case '×':
        result = prev * current
        break
      case '÷':
        if (current === 0) {
          currentValue.value = 'Error'
          return
        }
        result = prev / current
        break
    }

    currentValue.value = result.toString()
    shouldResetDisplay.value = true
  }

  function handleClear() {
    currentValue.value = '0'
    previousValue.value = ''
    operator.value = ''
    shouldResetDisplay.value = false
  }

  function handleBackspace() {
    if (currentValue.value.length === 1) {
      currentValue.value = '0'
    } else {
      currentValue.value = currentValue.value.slice(0, -1)
    }
  }

  function handleDecimal() {
    if (shouldResetDisplay.value) {
      currentValue.value = '0.'
      shouldResetDisplay.value = false
    } else if (!currentValue.value.includes('.')) {
      currentValue.value += '.'
    }
  }

  function handlePercent() {
    const value = parseFloat(currentValue.value)
    if (!isNaN(value)) {
      currentValue.value = (value / 100).toString()
    }
  }

  return {
    displayValue,
    previousValue,
    handleNumber,
    handleOperator,
    handleEqual,
    handleClear,
    handleBackspace,
    handleDecimal,
    handlePercent
  }
}