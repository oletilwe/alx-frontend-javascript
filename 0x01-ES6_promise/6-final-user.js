/*
 * contain  a function defination
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, photo) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(photo)])
    .then((res) => (
      res.map((r) => ({
        status: r.status,
        value: r.status === 'fulfilled' ? r.value : String(r.reason),
      }))));
}
