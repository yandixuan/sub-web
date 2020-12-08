import { App } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';

const req = require.context('../icons/svg', false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().map(requireContext);
};

export function install(app: App): void {
  app.component('svg-icon', SvgIcon);
  requireAll(req);
}
export default install;
