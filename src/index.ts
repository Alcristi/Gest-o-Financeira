import { App } from './App'
import dotenv from 'dotenv'

dotenv.config();
const app = new App();
app.server.listen(app.port,()=>{console.log(`http://localhost:${app.port}`)});
