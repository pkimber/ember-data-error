import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('string') firstName
  @attr('string') lastName
}