import { CardDemo } from "../Components/AceternityUi/BackgroundOverlayCard";
import soloTravel from "../../public/assets/soloTravel.jpg"
export default function Categories() {
  return (
    <div className="bg-black">
        <h1 className="text-white text-center pt-14 ">Who’s Your Ultimate Travel Buddy?</h1>
        <div className="choosePartner flex p-20 gap-10">
          <CardDemo title={"Travel with Friends"} description={"Turn trips into legendary stories you'll be telling for years!"} imageLink={"https://www.tourradar.com/days-to-come/wp-content/uploads/2019/04/QuotesOG.jpg"}/>
          <CardDemo title={"Explore Solo"} description={"Go where you want, when you want—no limits, just freedom!"}imageLink={soloTravel}/>
          <CardDemo title={"Getaway for Two"} description={"Discover romance in the wild, the calm, and everywhere in between."}imageLink={"https://i.pinimg.com/originals/0d/fc/05/0dfc0542ce45baa195f160d30a56136e.jpg"}/>
          <CardDemo title={"Family Adventures"} description={"Epic experiences, endless laughs—make memories together that matter!"}imageLink={"https://img.freepik.com/premium-photo/happy-family-with-two-kids-walking-beach-beautiful-sunset-sunrise-happy-family-walks-hand-hand-down-paradise-beach-sunset-ai-generated_538213-8978.jpg"}/>

        </div>
    </div>
  )
}