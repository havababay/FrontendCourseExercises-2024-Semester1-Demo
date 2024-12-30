import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ "projectId": "onoair-6bcfd", "appId": "1:165015129337:web:91612b183fd5b949202628", "storageBucket": "onoair-6bcfd.firebasestorage.app", "apiKey": "AIzaSyDFi3cSIWMF1CPamlgwruhz12ZPqRPEXNY", "authDomain": "onoair-6bcfd.firebaseapp.com", "messagingSenderId": "165015129337" })), provideFirestore(() => getFirestore())]
};
