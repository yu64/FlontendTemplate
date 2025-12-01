import { createApp } from '@src/app.js';

const app = createApp();
const root = document.getElementById('app');

if(root !== null)
{
  root.appendChild(app);
}
