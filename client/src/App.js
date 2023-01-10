import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPicks } from './actions/picks';
import TopNav from './components/TopNav/topNav';

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