import VueNotifications from 'vue-notifications'
import App from "./App.vue";
import miniToastr from 'mini-toastr'// https://github.com/se-panfilov/mini-toastr
import { createApp } from '@vue/runtime-dom';

miniToastr.init()

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

createApp(App).use(VueNotifications, options)