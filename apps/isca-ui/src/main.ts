import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from '@aws-amplify/core';
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);
Amplify.configure({
  Storage: {
      AWSS3: {
          bucket: 'iscabucket124810-dev', //REQUIRED -  Amazon S3 bucket name
          region: 'us-east-1', //OPTIONAL -  Amazon service region
      }
  }
})
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
