import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((respond) => console.log(`${respond[0].body} ${respond[1].firstName} ${respond[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
