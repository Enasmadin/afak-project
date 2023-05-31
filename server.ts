// import 'zone.js/dist/zone-node';

// import { enableProdMode } from '@angular/core';

// import { renderModuleFactory } from '@angular/platform-server';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import * as express from 'express';
// import { join } from 'path';

// import { AppServerModuleNgFactory } from './src/main.server';

// enableProdMode();

// const app = express();
// const port = process.env.PORT || 4000;
// const distFolder = join(process.cwd(), 'dist/browser');
// const indexHtml = join(distFolder, 'index.html');

// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModuleNgFactory
// }));

// app.set('view engine', 'html');
// app.set('views', distFolder);

// app.use(express.static(distFolder, { index: false }));

// app.get('*', (req, res) => {
//   res.render(indexHtml, { req });
// });

// app.listen(port, () => {
//   console.log(`Node server listening on http://localhost:${port}`);
// });