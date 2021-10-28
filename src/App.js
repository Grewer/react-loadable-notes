import './App.css';
import Loadable from 'react-loadable';

import Loading from './my-loading-component';

const LoadableComponent = Loadable({
    loader: () => import('./my-component'),
    loading: Loading,
});

export default function App() {
    return <LoadableComponent/>;
}
