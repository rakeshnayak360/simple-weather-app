import React, {Component} from 'react';
import ExploreOffIcon from '@material-ui/icons/ExploreOff';

export class WithoutResult extends Component{

    render(){
        return(
            <div className='noResult'>
                <div className='weatherBox text-center mt-5 p-5'>
                    <ExploreOffIcon fontSize="large"/>
                    <p>OOPs!! Enter valid place name</p>
                </div>
            </div>
        );
    }
}

export default WithoutResult;