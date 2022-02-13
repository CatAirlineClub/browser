import {default as View, Folder, Volumn} from '../logic/logic';

export default new View([
    new Folder('Quick Access', []),
    new Folder('One Drive', []),
    new Folder('This PC', [
        new Folder('Desktop', []),
        new Folder('Documents', []),
        new Folder('Music', []),
        new Folder('Pictures', []),
        new Folder('Videos', []),
        new Folder('Desktop', []),
        new Volumn('OS (C:)', []),
        new Volumn('Blue (D:)', []),
    ]),
]);
