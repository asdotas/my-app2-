import ReactDOM  from 'react-dom';

import { App } from "./App"
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

ReactDOM.render(
    <AdminFlagContext>
        <App />
    </AdminFlagContext>,
    document.getElementById("root")
);
