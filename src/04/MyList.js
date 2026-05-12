
import MyListData from './MyListData.json';
import MyListItem from './MyListItem';
export default function MyList() {
    return (
    <div className='w-full grid grid-cols-2 gap-4'>
        <MyListItem />
        <MyListItem />
        <MyListItem />
        <MyListItem />
    </div>
  )
}
