import { CommandInteraction, MessageEmbed } from 'discord.js';
import Command from '../libs/command';

class Server extends Command {
  public constructor() {
    super({
      name: 'server',
      description: 'Information about the Server',
    });
  }

  public async sendResponse(interaction: CommandInteraction): Promise<void> {
    const { guild } = interaction;
    if (!guild?.available) return;

    const {
      channels,
      createdAt,
      description,
      emojis,
      maximumMembers,
      memberCount,
      name,
      ownerID,
      premiumSubscriptionCount,
      premiumTier,
      region,
      roles,
    } = guild;

    const channelAmount = channels.cache.filter(
      (channel) => channel.type !== 'category',
    ).size;
    const emojiAmount = (await emojis.fetch()).size;
    const icon = guild.iconURL();
    const roleAmount = (await roles.fetch()).size;

    const response = new MessageEmbed()
      .setColor('BLUE')
      .setTitle(name)
      .addField('Owner', `<@${ownerID}>`)
      .addField('Description', description || '-')
      .addField(
        'Level',
        `Level ${premiumTier} | ${premiumSubscriptionCount} Boosts`,
        true,
      )
      .addField('Region', region.toLocaleUpperCase(), true)
      .addField('Created', createdAt.toUTCString(), true)
      .addField('Members', `${memberCount} / ${maximumMembers} Members`)
      .addField('Roles', `${roleAmount} Roles`, true)
      .addField('Channels', `${channelAmount} Channels`, true)
      .addField('Emojis', `${emojiAmount} Emojis`, true);

    if (icon) response.setThumbnail(icon);

    await interaction.reply(response);
  }
}

export default Server;
