import copy from 'copy-to-clipboard';
import { App, FunctionalComponent, h } from 'vue';

interface Options {
  debug?: boolean;
  message?: string;
  format?: string;
  onCopy?: (clipboardData: object) => void;
}

type ClipboardProps = { text: string; options?: Options; onCopy: (text: string, result: boolean) => void };

const CopyToClipboard: FunctionalComponent<ClipboardProps> = (props, ctx) => {
  const { slots } = ctx;
  const { text, options, onCopy } = props || {};
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const result = copy(text, options);
    if (onCopy) {
      onCopy(text, result);
    }
  };
  return h('span', { onClick: handleClick }, slots);
};

CopyToClipboard.displayName = 'CopyToClipboard';

export default {
  install: function(app: App) {
    app.component(CopyToClipboard.displayName as string, CopyToClipboard);
  },
};
