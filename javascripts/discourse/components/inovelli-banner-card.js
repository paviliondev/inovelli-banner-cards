import Component from '@ember/component';
import { action } from '@ember/object';
import DiscourseURL from 'discourse/lib/url';

export default Component.extend({
  tagName: 'li',
  classNames: ['inovelli-banner-card'],

  // TODO only appear on homepage route:

  @action
  toggleCard(card) {
    DiscourseURL.routeTo(card.link_url);
  },
});
