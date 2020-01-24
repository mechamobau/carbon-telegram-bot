import '../../../middlewares/user-config'
import { UserConfig, defaultUserConfig } from '../../../types/UserConfig'
import TelegrafInlineMenu from 'telegraf-inline-menu'

export function paddingHorizontal (menu: TelegrafInlineMenu) {
  menu.question('Horizontal', 'set_paddingH', {
    questionText: (ctx) => {
      const currentSize = ctx.userConfig.get<UserConfig>('paddingHorizontal') ?? defaultUserConfig.paddingHorizontal

      return `Please insert a new size in px or 0 (Current: ${currentSize})`
    },
    setFunc: (ctx, value) => {
      if (!value?.match(/^(?:\d+px|0)$/)) {
        ctx.reply('The value you provided is not a valid size. No changes were made')
        return
      }

      ctx.reply('Done!')
      ctx.userConfig.set<UserConfig>('paddingHorizontal', value)
    },
    uniqueIdentifier: 'paddingH'
  })
}

export default { install: paddingHorizontal }
