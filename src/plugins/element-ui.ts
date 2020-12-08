import { App, Plugin, Component } from 'vue';
import { ElButton, ElSelect, ElCard, ElRow, ElCol, ElContainer, ElForm, ElFormItem, ElRadio } from 'element-plus';

const components: Component[] = [ElButton, ElSelect, ElCard, ElRow, ElCol, ElContainer, ElForm, ElFormItem, ElRadio];
const plugins: Plugin[] = [];

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
