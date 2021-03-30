import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import { tracked } from "@glimmer/tracking"

export default class DirectorComponent extends Component {
  @service store
  @tracked director


  constructor() {
    super(...arguments)
    self = this
    // this.store.findRecord('contact', 22),
    // this.store.findRecord('contact', 22)  // => GET /blog-posts/1
    //   .then(function(contact) {
    //   self.director = contact
    // }).catch(function(reason) {;
    //   console.log("reason")
    //   console.log("reason")
    //   console.log("reason")
    //   console.log(reason)
    // })
    this.doStuff.perform();

    // let userPromise = this.store.findRecord('contact', 22)  // => GET /blog-posts/1
    // userPromise.then((contact) => {
    //   console.log("then")
    //   console.log("then")
    //   console.log("then")

    //   self.director = contact
    // });

    // userPromise.catch((error) => {
    //   // transition to another route and show some error notification saying your team is doing their best to fix the problem
    //   console.log("reason")
    //   console.log("reason")
    //   console.log("reason")
    //   console.log(error)
    // });
  }

  // normal
  //@task *doStuff() {
  //  let contact = yield this.store.findRecord("contact", 22)
  //  this.director = contact
  //}
  //
  @task *doStuff() {
    // let contact = yield this.store.findRecord("contact", 22, { reload: true })
    // this.director = contact
    //
    //
    try {
      // if we don't have reload == ``true``, then I guess it does a peek
      // record and succeeds....
      // Then the background reload fails, but the exception isn't caught!?
      // let contact = yield this.store.findRecord("contact", 22, { reload: true })
      //
      // If we disable background reload, then all is well...
      // https://github.com/emberjs/data/issues/3809
      // Search Ember Discord for backgroundReload
      // This is still an open issue!
      // let contact = yield this.store.findRecord("contact", 22, { backgroundReload: false })
      let contact = yield this.store.findRecord("contact", 22, { reload: true })
      this.director = contact
    } catch(e) {
      console.log("catch, doStuff .........................................")
      // console.log(e)
    } finally {
      console.log("finally, doStuff .......................................")
    }
  }

}
