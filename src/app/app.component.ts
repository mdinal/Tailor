import { Component } from '@angular/core';
import { ElectronService, UIService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
      public electronService: ElectronService, 
      private translate: TranslateService, 
      public ui: UIService
    ) {
    
    // default language
    translate.setDefaultLang('en');

    // log current env
    console.log('AppConfig', AppConfig);

    // log more apis
    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode WEB');
    }
  }
}
