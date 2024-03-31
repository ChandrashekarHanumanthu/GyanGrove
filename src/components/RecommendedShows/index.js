import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Shows from '../Shows'
import './index.css'

class RecommendedShows extends Component {

    state = {recommendedShowsData:[]}

    componentDidMount() {
        this.getRecommendedShows()
    }

    getRecommendedShows =  async () => {
        const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
        const data = await response.json()
        console.log(data)

        const updatedData = data.events.map(each=> ({
            id:uuidv4(),
            cityName : each.cityName,
            date : each.date,
            distance: each.distanceKm,
            imageUrl:each.imgUrl,
            weather:each.weather
        }))

        this.setState({recommendedShowsData:updatedData})
    }

    render() {
        const {recommendedShowsData} = this.state;
        return (
            <div className="slider-container">
              <p className='rec-heading'>RecommendedShows</p>
            <div className='shows-container'>
              {recommendedShowsData.map(each => <Shows key={each.id} showData={each}/> )}
            </div>
            </div>
          )
    }
}

export default RecommendedShows