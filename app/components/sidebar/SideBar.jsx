import CircularDial from "../circular-dial/CircularDial";
import TopSources from "../topsources/TopSources";

export default function SideBar(props) {

  const topSources = props.topSources
  const dialValue = props.dialValue
  
  return (
    <div className='flex-1 gap-8 flex flex-col items-center bg-[#f5f6fd] h-full rounded-3xl p-4'>
        <CircularDial dialValue={dialValue} />
        <TopSources topSources = {topSources} />
    </div>
  )
}
