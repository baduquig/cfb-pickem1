import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPicks } from './actions/picks.js';
import TopNav from './components/TopNav/topNav.js';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPicks());
    }, [dispatch])

    return(
        <div>
            <TopNav />
        </div>
    )
}

export default App;