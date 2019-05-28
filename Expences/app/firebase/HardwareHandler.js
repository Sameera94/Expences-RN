import { db } from '../config/config';

export function insertHardwareItem(object) {
  db.ref('/items').push(object);
}