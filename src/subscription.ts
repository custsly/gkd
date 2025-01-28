import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 19950122,
  name: 'custsly的个人配置',
  version: 0,
  author: 'custsly',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/custsly/gkd/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
