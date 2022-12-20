// Сюда импрортируется функция App(), которая создаёт содержимое body
// Затем здесь создаётся body и в него аппендится вызов App()
import createApp from './components/App'

const body: HTMLElement | null = document.getElementById('body')
body!.append(createApp())