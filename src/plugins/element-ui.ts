import { App, Plugin, Component } from 'vue';
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
const plugins: any[] = [ElMessage, ElMessageBox, ElNotification];

export default {
  install: function(app: App) {
    components.forEach(component => {
      app.component(component.name as string, component);
    });
    plugins.forEach(plugin => {
      app.use(plugin);
    });
  },
};
