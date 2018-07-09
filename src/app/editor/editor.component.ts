import { Component } from '@angular/core';

@Component({
    selector: 'dm-editor',
    templateUrl: './editor.component.html'
})

export class EditorComponent {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\nconsole.log("Hello world!");\n}';
}
