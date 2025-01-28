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
          fastQuery: false,
          activityIds: 'com.yiqixie.kem.im.ui.messages.chat.ChatActivity',
          matches:
            '[vid="open_icon"] + [vid="tv_redpacket_status_msg_redpacket_part" && text="拼手气红包"]',
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
