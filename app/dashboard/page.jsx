import SideBar from "../components/sidebar/SideBar"
import FeedContainer from "../components/dashboard/FeedContainer"


export default async function Page() {
  
    return (
      <div className="flex gap-3 w-full h-full">
          <FeedContainer/>
      </div>
    )
}
