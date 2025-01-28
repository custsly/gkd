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
          matches: '[vid="tv_redpacket_title_msg_redpacket_part"]',
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
