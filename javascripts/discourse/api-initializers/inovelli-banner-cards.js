import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  api.registerConnectorClass('above-main-container', 'inovelli-banner-cards', {
    setupComponent() {
      const bannerCards = JSON.parse(settings.banner_cards);
      this.set('bannerCards', bannerCards);
    },
  });
});
