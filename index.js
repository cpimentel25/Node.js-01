import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

import fs from 'fs';
// const fs = require('fs');

let newContect = ""

for (let i = 0; i < 1000; i++){
    newContect += `${i+1}. ${faker.name.fullName()}\n`
};

fs.writeFile('names.txt', newContect, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
