import { App } from './App'
import dotenv from 'dotenv'

const app = new App();
dotenv.config({path:"./"});
app.server.listen(app.port,()=>{console.log(`http://localhost:${app.port}`)});
