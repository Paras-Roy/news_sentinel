import SideBar from "../components/sidebar/SideBar"
import FeedContainer from "../components/youtube/FeedContainer"


export default function Page() {
  const topSources = [
    {
      id: 1,
      name: 'Aaj Tak',
      value: 13,
      logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
    },
    {
      id: 2,
      name: 'ABP News',
      value: 8,
      logo: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'NDTV',
      value: 5,
      logo: 'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: 'India Today',
      value: 5,
      logo: 'data:image/jpeg;base64,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',
    },
  ]
    return (
      <div className="flex gap-3 w-full h-full">
          <FeedContainer/>
          <SideBar topSources={topSources} dialValue={37}/>
      </div>
    )
}
