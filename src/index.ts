#! /usr/local/bin/node

// <list> <name> <value>

interface List {
  [name: string]: string
}

interface Lists {
  [listName: string]: List
}

class Boom {
  lists: Lists;

  boomBin: string;

  constructor() {
    const fs: any = require('fs');
    const { HOME }: { HOME: string } = process.env;

    this.boomBin = `${HOME}/.boom`;
    this.lists = fs.existsSync(this.boomBin) ? JSON.parse(fs.readFileSync(this.boomBin)) : {};
  }

  createList(list: string) {
    this.lists[list] = {};
  }

  getList(list: string) {
    let { lists } = this;
    return lists[list];
  }

  getAll() {
    let { lists } = this;
    return lists;
  }
}
