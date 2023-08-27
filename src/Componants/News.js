import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spiner from './Spiner'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
    }
    articles = [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Sean O’Malley KOs Aljamain Sterling at UFC 292 - UFC",
            "description": "Watch Sean O'Malley's TKO finish of Aljamain Sterling. OFFICIAL UFC 292 RESULTS 👉 https://ufc.ac/45qj93kSubscribe to get all the latest UFC content: http://...",
            "url": "https://www.youtube.com/watch?v=eY5cZITcrF4",
            "urlToImage": "https://i.ytimg.com/vi/eY5cZITcrF4/maxresdefault.jpg",
            "publishedAt": "2023-08-20T05:54:27Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Nicholas McEntyre",
            "title": "Emmy-winning 'This Is Us' actor Ron Cephas Jones dead at 66 - New York Post ",
            "description": "Jones was best known for his role as William Hill on the NBC drama “This Is Us,” where he won two Emmy Awards for Outstanding Guest Actor in a Drama Series in 2018 and 2020.",
            "url": "https://nypost.com/2023/08/20/ron-cephas-jones-emmy-winning-this-is-us-actor-dead-at-66/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/08/newspress-collage-qaq433vp8-1692508316945.jpg?quality=75&strip=all&1692493981&w=1024",
            "publishedAt": "2023-08-20T05:29:00Z",
            "content": "Ron Cephas Jones, the two-time Emmy Award-winning and Tony Award-nominated actor, has died at 66 years old.\r\nJones had a “long-standing pulmonary issue,” a representative for the late actor told Peop… [+3821 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Lyric Li",
            "title": "Russia's Luna-25 lander reports 'emergency' before moon landing - The Washington Post - The Washington Post",
            "description": "Luna-25 was unable to perform a pre-landing maneuver within “specified parameters,” the Roscosmos space agency said, without providing further details.",
            "url": "https://www.washingtonpost.com/technology/2023/08/19/russia-luna-25-moon-emergency/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YPBUCRAQSDB42DL6AI4KI27NOI.JPG&w=1440",
            "publishedAt": "2023-08-20T05:28:17Z",
            "content": "Comment on this story\r\nComment\r\nRussias space agency on Saturday reported an emergency on its Luna-25 spacecraft the countrys first lunar mission in almost half a century as it was trying to enter pr… [+1642 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": null,
            "title": "Nashville SC 1-1 Inter Miami CF (Aug 19, 2023) Game Analysis - ESPN",
            "description": "Expert recap and game analysis of the Inter Miami CF vs. Nashville SC Leagues Cup game from August 19, 2023 on ESPN.",
            "url": "https://www.espn.com/soccer/report/_/gameId/685799",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/soccer.png",
            "publishedAt": "2023-08-20T04:07:30Z",
            "content": "NASHVILLE, Tenn. -- Lionel Messi scored early in regulation and converted the first shot in penalty kicks as Inter Miami CF beat Nashville SC 10-9 on penalties in the Leagues Cup final on Saturday ni… [+3506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WDSU New Orleans"
            },
            "author": "Fletcher Mackel",
            "title": "Saints TE Jimmy Graham experienced medical episode Friday night, taken into custody by LAPD - WDSU New Orleans",
            "description": "Saints TE Jimmy Graham experienced medical episode Friday night, taken into custody by LAPD",
            "url": "https://www.wdsu.com/article/saints-te-jimmy-graham-experienced-medical-episode-friday-night-taken-into-custody-by-lapd/44857449",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/wdsu/21509202-21509202.jpg?crop=1.00xw:0.940xh;0,0&resize=1200:*",
            "publishedAt": "2023-08-20T03:22:00Z",
            "content": "New Orleans Saints tight end Jimmy Graham experienced a medical episode last evening, which resulted in him becoming disoriented. He was taken into custody by local authorities and transported to a l… [+347 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "Ukraine updates: F-16 training has begun, Kyiv says – DW – 08/20/2023 - DW (English)",
            "description": "Ukrainian pilots are currently training to operate American-made F-16 fighter jets at an unknown location. Meanwhile, Volodymyr Zelenskyy vowed to retaliate after a fatal Russian missile strike in Chernihiv. DW has more.",
            "url": "https://www.dw.com/en/ukraine-updates-august-20/live-66580082",
            "urlToImage": "https://static.dw.com/image/66580097_6.jpg",
            "publishedAt": "2023-08-20T03:13:18Z",
            "content": "Training for Ukrainian pilots to operate F-16 fighter jets is already underway, officials reiterated on Saturday.\r\n\"Training has already started,\" Ukrainian Defense Minister Oleksii Reznikov told the… [+813 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Doc Louallen",
            "title": "Winning numbers for Powerball Jackpot August 19 drawing - USA TODAY",
            "description": "Check the winning numbers for the Aug. 19 Powerball jackpot, which reached $264 million ahead of Saturday night's drawing.",
            "url": "https://www.usatoday.com/story/money/2023/08/19/powerball-winning-numbers-august-19-jackpot/70632258007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2022/11/02/USAT/a8d29f2e-0972-4e82-b435-2a32c9a12020-AP_Lottery_Jackpot.JPG?crop=3348,1883,x404,y586&width=3200&height=1800&format=pjpg&auto=webp",
            "publishedAt": "2023-08-20T03:03:38Z",
            "content": "No winning ticket drawn Wednesday means the Powerball jackpot is an estimated $264 million ahead of Saturday's drawing.\r\nSaturday night's winning numbers were drawn just after 11 p.m. ET and we have … [+2981 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN India"
            },
            "author": null,
            "title": "Mariners' Julio Rodriguez gets record 17th hit in 4 games - ESPN - ESPN India",
            "description": "Julio Rodriguez stayed red-hot Saturday night against the Astros, going 4-for-6 to give him a record 17 hits in a four-game stretch.",
            "url": "https://www.espn.in/mlb/story/_/id/38224205/mariners-julio-rodriguez-gets-record-17th-hit-4-games",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0820%2Fr1213008_2_1296x729_16%2D9.jpg",
            "publishedAt": "2023-08-20T02:57:00Z",
            "content": "HOUSTON -- Julio Rodríguez set a major league record with his 17th hit in four games, helping to lead the Seattle Mariners past the Houston Astros10-3 for their fifth straight win Saturday night.\r\nRo… [+1423 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Valentina Gonzalez, Karol Suarez, Heather Chen",
            "title": "Ecuador: Shooting near presidential candidate Otto Sonnenholzner - CNN",
            "description": "One of Ecuador’s presidential candidates has demanded an investigation into a shooting that took place meters from where he was dining out with his family on Saturday – just one day before the country goes to the polls.",
            "url": "https://www.cnn.com/2023/08/19/americas/ecuador-shooting-presidential-election-otto-sonnenholzner-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230818211328-01-ecuador-otto-sonnenholzner-081323.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-20T02:13:00Z",
            "content": "One of Ecuadors presidential candidates has demanded an investigation into a shooting that took place meters from where he was dining out with his family on Saturday just one day before the country g… [+3711 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Sarah Rumpf-Whitten",
            "title": "California DMV requests Cruise to halve driverless car fleet after collision with firetruck in San Francisco - Fox Business",
            "description": "A day after one of its driverless taxis collided with a firetruck in a San Francisco intersection, autonomous vehicle operator Cruise agreed to a request from California state regulators to cut in half the number of vehicles it was operating in the city.",
            "url": "https://www.foxbusiness.com/markets/california-dmv-requests-cruise-halve-driverless-car-fleet-after-collision-with-firetruck-san-francisco",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/08/0/0/AV2.png?ve=1&tl=1",
            "publishedAt": "2023-08-20T01:38:21Z",
            "content": "Cruise, the autonomous vehicle (AV) operator owned by General Motors, has been asked by the California Department of Motor Vehicles to halve its operations in San Francisco following a crash into an … [+3161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Washington state wildfire leaves one dead and nearly 200 structures destroyed - The Guardian US",
            "description": "Evacuations ordered after wind-fueled blaze expands unchecked near eastern city of Spokane and shuts highway",
            "url": "https://www.theguardian.com/us-news/2023/aug/20/washington-state-wildfire-leaves-one-dead-and-nearly-200-structures-destroyed",
            "urlToImage": "https://i.guim.co.uk/img/media/5e0bc82e3b07f57c239c24a99b7aa28c1e5e23e2/55_655_1010_605/master/1010.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=124bb9a5b58d991a67f0d42fd20b5a43",
            "publishedAt": "2023-08-20T01:26:00Z",
            "content": "A wind-driven wildfire in eastern Washington state has destroyed at least 185 structures, closed a major highway and left one person dead, authorities have said.\r\nThe blaze began shortly after midday… [+2500 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Marshall Cohen",
            "title": "New York Times: Prosecutors insisted on harsher Hunter Biden plea deal around time IRS whistleblowers came forward - CNN",
            "description": "Special counsel David Weiss appeared to be willing to end the Hunter Biden probe earlier this year without any charges for the president’s son, but seems to have changed his mind around the time two IRS whistleblowers accused the Justice Department of stonewa…",
            "url": "https://www.cnn.com/2023/08/19/politics/hunter-biden-plea-deal-collapse/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230726124539-06-hunter-biden-072623.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-20T00:57:00Z",
            "content": "Special counsel David Weiss appeared to be willing to end the Hunter Biden probe earlier this year without any charges for the presidents son, but seems to have changed his mind around the time two I… [+2653 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Sarah Rumpf-Whitten",
            "title": "Canada's British Columbia declares state of emergency as thousands are forced to evacuate Kelowna - Fox News",
            "description": "Record-breaking wildfires in British Columbia, Canada, are forcing thousands of residents to evacuate their homes as the fires ravage the province.",
            "url": "https://www.foxnews.com/world/canadas-british-columbia-declares-state-emergency-thousands-forced-evacuate-kelowna",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/c665471b-2-1.jpg",
            "publishedAt": "2023-08-20T00:26:00Z",
            "content": "British Columbia has declared a state of emergency as massive wildfires tore through the western Canadian province, forcing residents to flee their homes and seek shelter.\r\nThe province was declared … [+3651 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ca.gov"
            },
            "author": null,
            "title": "Governor Newsom Proclaims State of Emergency As Hurricane Hilary Approaches California | California Governor - Office of Governor Gavin Newsom",
            "description": "WHAT YOU NEED TO KNOW: California continues to mobilize ahead of Hurricane Hilary’s projected landfall in Southern California. People are urged to take all necessary precautions today.",
            "url": "https://www.gov.ca.gov/2023/08/19/governor-newsom-proclaims-state-of-emergency-as-hurricane-hilary-approaches-california/",
            "urlToImage": "https://www.gov.ca.gov/wp-content/uploads/2023/08/375A3649.jpeg",
            "publishedAt": "2023-08-20T00:21:39Z",
            "content": "WHAT YOU NEED TO KNOW: California continues to mobilize ahead of Hurricane Hilarys projected landfall in Southern California. People are urged to take all necessary precautions today.\r\nSACRAMENTO  To… [+5817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Press of Atlantic City"
            },
            "author": "JOE MARTUCCI Staff Reporter",
            "title": "Taylor Swift seen at Long Beach Island wedding Friday - Press of Atlantic City",
            "description": "Taylor Swift fans on Long Beach Island and beyond were in awe Friday evening as the mega-celebrity was spotted on the island.",
            "url": "https://pressofatlanticcity.com/news/local/taylor-swift-long-beach-island-lbi-wedding/article_6612fe76-3e98-11ee-a7d4-87c495012f2d.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/pressofatlanticcity.com/content/tncms/assets/v3/editorial/6/61/6612fe76-3e98-11ee-a7d4-87c495012f2d/64e0d5b6edab8.preview.jpg?crop=1689%2C887%2C0%2C170&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2023-08-20T00:00:00Z",
            "content": "Taylor Swift fans on Long Beach Island and beyond were in awe Friday evening as the mega-celebrity was spotted on the island. \r\nThe 12-time Grammy Award winner, currently in the midst of the immensel… [+2010 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Dana Kennedy",
            "title": "Marion city council refuses to address Kansas newspaper raid, uses 47 exclamations points in bizarre message - New York Post ",
            "description": "Madison KS city council has refused to take up newspaper raid at its next meeting, an agenda for the scheduled get together shows.",
            "url": "https://nypost.com/2023/08/19/madison-ks-city-council-refuses-to-address-newspaper-raid/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000025045560.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-08-19T23:32:00Z",
            "content": "No comment!\r\nCity council members in Marion, Kansas where police raided a small newspaper and seized documents, computers and cell phones earlier this month are making it clear they will not discuss … [+2777 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Valentyn Ogirenko",
            "title": "Seven killed, 144 wounded in Russian missile strike on Ukraine's Chernihiv - Reuters",
            "description": "Seven people including a 6-year-old girl were killed, 144 wounded, and 41 were in hospital after a Russian missile struck a central square in the historic northern Ukrainian city of Chernihiv on Saturday, Ukrainian officials said.",
            "url": "https://www.reuters.com/world/europe/russian-missile-strike-ukraine-city-chernihiv-kills-people-zelenskiy-says-2023-08-19/",
            "urlToImage": "https://www.reuters.com/resizer/AS68kQK1ZpmmVJm_qBXDPUd1UgM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KK3AXDPST5O7TPT4NG7O7D2DS4.jpg",
            "publishedAt": "2023-08-19T23:26:46Z",
            "content": "CHERNIHIV, Ukraine, Aug 20 (Reuters) - Seven people including a 6-year-old girl were killed, 144 wounded, and 41 were in hospital after a Russian missile struck a central square in the historic north… [+2962 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "WBZ-News Staff",
            "title": "Tourists asked to stay away after fire at Harborside Inn on Block Island - CBS Boston",
            "description": "A state of emergency has been issued after a large fire at a hotel on Block Island early Saturday morning.",
            "url": "https://www.cbsnews.com/boston/news/fire-harborside-inn-block-island/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/08/19/6105b770-2339-43ed-a389-183a2cd9b369/thumbnail/1200x630/1b74343415bc29617aa120756c5e9756/block-island-fire.jpg?v=0b4ae642db52799a178d90d83603a9dc",
            "publishedAt": "2023-08-19T22:42:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Shania Shelton",
            "title": "Grandson of Jimmy and Rosalynn Carter, says 'we're in the final chapter' in health update - CNN",
            "description": "The grandson of former President Jimmy Carter and his wife Rosalynn Carter said “it’s clear we’re in the final chapter” in an interview with People published Saturday.",
            "url": "https://www.cnn.com/2023/08/19/politics/josh-carter-carters-health-update/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230819170731-jimmy-carter-rosalynn-carter-2018.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-19T22:39:00Z",
            "content": "The grandson of former President Jimmy Carter and his wife Rosalynn Carter said its clear were in the final chapter in an interview with People published Saturday. \r\nJimmy Carter, 98, entered hospice… [+2127 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Deciphering Quantum Complexity: A Pioneering Algorithm for Accurate Qubit Calculation - SciTechDaily",
            "description": "Practical quantum computing is another step closer. Researchers have introduced a novel algorithm called Automated Compression of Arbitrary Environments (ACE) designed to study the interactions of qubits with their surrounding environment and the ensuing chan…",
            "url": "https://scitechdaily.com/deciphering-quantum-complexity-a-pioneering-algorithm-for-accurate-qubit-calculation/",
            "urlToImage": "https://scitechdaily.com/images/Quantum-Physics-Algorithm-Art.jpg",
            "publishedAt": "2023-08-19T22:29:14Z",
            "content": "ByNational Research University Higher School of EconomicsAugust 19, 2023\r\nScientists have developed the ACE algorithm to study qubit interactions and changes in their quantum state, simplifying quant… [+6499 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91d3e5a3b5c946f194e06679beca4f1d&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }
    manageNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91d3e5a3b5c946f194e06679beca4f1d&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    managePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&  apiKey=91d3e5a3b5c946f194e06679beca4f1d&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    render() {

        return (
            <div>
                <div className="container my-5">
                        <h1  style={{marginTop:"63px", textAlign:"center"}}>NewzZ-Hot news</h1>
                    <div className="row">
                        {!this.state.loading ? false : <Spiner />}
                        {this.state.loading ? false :this.state.articles.map((elements) => {
                            return <div className="col-md-4" key={elements.url}>
                                <NewsItems title={elements.title ? elements.title : ""} description={elements.description} imgurl={elements.urlToImage ? elements.urlToImage : "https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg"} newsurl={elements.url} author={elements.author} date={elements.publishedAt} />
                            </div>
                        })}
                        <div className="container d-flex justify-content-between p-3">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.managePrevious}>&larr; Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.manageNext}>Next &rarr;</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default News
