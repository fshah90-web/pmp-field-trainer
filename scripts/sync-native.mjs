import {cp, readdir, mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const web=path.join(root,'web'), target=path.join(root,'capacitor','www');
await mkdir(target,{recursive:true});
for(const item of await readdir(web,{withFileTypes:true})){
  if(item.name.startsWith('.')||item.name==='DEPLOY.md')continue;
  await cp(path.join(web,item.name),path.join(target,item.name),{recursive:true});
}
console.log('Synced the canonical web app, lessons, and professor assets to capacitor/www.');
