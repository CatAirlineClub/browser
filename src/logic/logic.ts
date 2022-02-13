export class File {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
};

export class Shortcut {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
};

export class Folder {
  name: string;
  children: Item[];
  constructor(name: string, children: Item[]) {
    this.name = name;
    this.children = children;
  }
};

export class Volumn {
  name: string;
  children: Item[];
  constructor(name: string, children: Item[]) {
    this.name = name;
    this.children = children;
  }
};

export class ClickableView {
  content: Item;
  name: string;
  onClick: () => void;
  path: number[];
  children: ClickableView[];
  constructor(item: Item, path: number[]) {
    this.children = [];
    this.name = item.name;
    this.content = item;
    this.path = path;
    this.onClick = click.bind(this);

    function click(this: ClickableView) {
      console.log(this);
      if (this.content instanceof Shortcut || this.content instanceof File) return;
      const children = this.content.children;
      if (this.children.length) return;
      for (const idx of children.keys()) {
        const path = this.path.slice();
        path.push(idx as number);
        this.children.push(new ClickableView(children[idx], path));
      }
      this.children = this.children;
      console.log('children', this.children, this);
    }
  };
};

export default class ViewTree {
  view: ClickableView[];
  prelude: Item[];
  constructor(prelude: Item[]) {
    this.prelude = prelude;
    this.view = prelude.map((item, idx) => new ClickableView(item, [idx]));
  }
};

export type Item = File | Shortcut | Folder | Volumn;

function copy<T extends Item>(obj: T): T {
  if (obj instanceof File || obj instanceof Shortcut) {
    return obj;
  }
  if (obj instanceof Folder) {
    return new Folder(obj.name, []) as T;
  }
  if (obj instanceof Volumn) {
    return new Volumn(obj.name, []) as T;
  }
}
