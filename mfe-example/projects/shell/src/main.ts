// import('./bootstrap')
// 	.catch(err => console.error(err));

// Ideally, we load the Micro Frontend's remoteEntry.js before Angular bootstraps. This file contains meta data about the Micro Frontend, esp. about its shared dependencies. Knowing about them upfront helps Module Federation to avoid version conflicts
// import { loadRemoteEntry } from '@angular-architects/module-federation';

// Promise.all([
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:4201/remoteEntry.js',
//   }),
// ])
//   .catch((err) => console.error('Error loading remote entries', err))
//   .then(() => import('./bootstrap'))
//   .catch((err) => console.error(err));

// Using a Registry option: Real world option
import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mf.manifest.json')
.catch((err) => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch((err) => console.error(err));
