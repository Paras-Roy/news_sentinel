import SideBar from "../components/sidebar/SideBar"
import FeedContainer from "../components/discussion/FeedContainer"

export default function Page() {
  
    return (
      <div className="flex gap-3 w-full rounded-3xl bg-white h-full">
          <FeedContainer/>
      </div>
    )
  }
  