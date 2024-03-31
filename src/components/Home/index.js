import {Component} from 'react';
import RecommendedShows from '../RecommendedShows'
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className='bg-container'>
                <div className='content'>
                <h1 className='heading'>Discover Exciting Events Happening
                    Near You-Stay Tuned for  Updates!
                </h1>
                <p className='para'>Dorem ipsum dolor sit amet, consectetur adipiscing edit.Nunc vulpurate libero et interdum, ac aliquet 
                    odio mattis. Class aptent taciti sociosqu ad litro torquent per coubia nostra, per
                </p>
                </div>
                <RecommendedShows/>
            </div>
        )
    }
}

export default Home