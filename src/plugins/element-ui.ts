import { App, Component } from 'vue';
import {
  ElButton,
  ElSelect,
  ElCard,
  ElRow,
  ElCol,
  ElContainer,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElOption,
  ElDivider,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElAutocomplete,
} from 'element-plus';

const components: Component[] = [
  ElButton,
  ElSelect,
  ElOption,
  ElCard,
  ElRow,
  ElCol,
  ElContainer,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElDivider,
  ElAutocomplete,
];
const plugins = [ElMessage, ElMessageBox, ElNotification];

export default {
  install: function (app: App): void {
    components.forEach(component => {
      app.component(component.name as string, component);
    });
    plugins.forEach(plugin => {
      app.use(plugin);
    });
    // 全局 provide/inject
    app.provide('$message', ElMessage);
  },
};
