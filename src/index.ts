#! /usr/local/bin/node

interface data {
  [key: string]: string
}

class Boom {
  data: data;

  boomBin: string;

  constructor() {
    const fs: any = require('fs');
    const { HOME }: { HOME: string } = process.env;

    this.boomBin = `${HOME}/.boom`;
    this.data = fs.existsSync(this.boomBin) ? JSON.parse(fs.readFileSync(this.boomBin)) : {};
  }

  get(key: string) {
    return this.data[key];
  }
}
