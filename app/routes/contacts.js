import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class ContactsRoute extends Route {
  @service store;

  model() {
    return {
      contacts: this.doMoreStuff.perform()
    };
    // return this.store.findAll('contact')
    /**
    return RSVP.hash({
      // return {
      contact: this.store.findRecord('contact', 22),
      contacts: this.store.findAll('contact'),
    })
    */
  }

  // try {
  //   return this.store.findAll('contact');
  // } catch (e) {
  //   console.log("Before.................................................")
  //   console.log(e)
  //   console.log("After..................................................")
  // }

  @action
  error(error, transition) {
    console.log("Before, contacts.js ...................................")
    console.log(error)
    console.log(transition)
    console.log("After, contacts.js ....................................")
    return false
    // if (error.status === '403') {
    //   this.replaceWith('login');
    // } else {
    //   // Let the route above this handle the error.
    //   return true;
    // }
  }

  @task *doMoreStuff() {
    try {
      let contacts = yield this.store.findAll("contact", { reload: true })
      // let contacts = yield this.store.query("contact", { criteria: "e" } )
      return contacts
    } catch(e) {
      console.log("catch, doMoreStuff .....................................")
      // console.log(e)
    } finally {
      console.log("finally, doMoreStuff ...................................")
    }
  }
}

