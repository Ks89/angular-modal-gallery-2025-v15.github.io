import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  forwardRef,
  AfterViewInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EditorView, lineNumbers } from '@codemirror/view';
import { EditorState, EditorStateConfig, Extension } from '@codemirror/state';
import { materialDark } from '@ddietr/codemirror-themes/material-dark';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';

/**
 * CodeMirror component
 * Usage :
 * <codemirror [(ngModel)]="data" [config]="{...}"></codemirror>
 */
@Component({
  selector: 'codemirror',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodemirrorComponent),
      multi: true
    }
  ],
  template: `<div #host></div>`
})
export class CodemirrorComponent implements AfterViewInit {
  @Input() content: string = 'placeholder text';
  @Input() appendExtensions: Extension[] = [];
  @Input() language: string = '';

  @ViewChild('host') host: ElementRef | undefined;

  ngAfterViewInit(): void {
    let lang;
    switch(this.language) {
      case 'html':
        lang = html();
        break;
      case 'javascript':
        lang = javascript(
          {typescript: false, jsx: false});
        break;
      case 'typescript':
        lang = javascript({typescript: true, jsx: false});
        break;
      // case 'css':
      //   break;
      default:
        throw new Error('Internal library error - unrecognized language');
    }

    const extensions = [
      lineNumbers(),
      lang,
      materialDark,
      EditorState.readOnly.of(true),
      ...this.appendExtensions
    ];
    const config: EditorStateConfig = {
      doc: this.content,
      extensions: extensions
    };
    this.codemirrorInit(config);
  }

  codemirrorInit(config: EditorStateConfig): void {
    if (!this.host) {
      throw new Error('Internal library error - host must be defined');
    }
    new EditorView({
      parent: this.host.nativeElement,
      state: EditorState.create(config)
    });
  }
}
