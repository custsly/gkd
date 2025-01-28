import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yiqixie.kem',
  name: 'Kim',
  groups: [
    {
      key: 1,
      name: '打开红包',
      desc: '打开红包',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yiqixie.kem.im.ui.messages.chat.ChatActivity',
          matches: '@[vid="open_icon"] + [text="拼手气红包"]',
        },
        {
          fastQuery: true,
          activityIds: 'com.yiqixie.kem.im.ui.messages.chat.ChatActivity',
          matches: '[vid="iv_open_red_packet"]',
        },
      ],
    },
  ],
});
