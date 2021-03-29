import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactsRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('contact');
    // return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}

