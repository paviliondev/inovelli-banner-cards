import Component from '@ember/component';
import { action } from '@ember/object';
import discourseComputed from 'discourse-common/utils/decorators';
import DiscourseURL from 'discourse/lib/url';

export default Component.extend({
  tagName: 'li',
  classNames: ['inovelli-banner-card'],

  @discourseComputed('card.image_url')
  noImage(imageUrl) {
    if (imageUrl === 'none') {
      return true;
    } else {
      return false;
    }
  },

  @action
  toggleCard(card) {
    DiscourseURL.routeTo(card.link_url);
  },
});
