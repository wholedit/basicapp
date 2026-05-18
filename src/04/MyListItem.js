
import { useState } from "react";
export default function MyListItem({title, imgUrl, content}) {
  // let cnt = 0; // 이렇게 하면 화면이 업데이트 되지 않음. 리액트는 상태가 변경되었을 때 화면을 업데이트 하는데, cnt는 상태가 아니기 때문.
    const [cnt, setCnt] = useState(0);
    const handleClick = () => {
        //cnt= cnt + 1;
        setCnt(cnt + 1); // 이렇게 하면 화면이 업데이트 됨. setCnt 함수를 호출하면 cnt의 값이 변경되고, 리액트는 상태가 변경되었다고 인식하여 화면을 업데이트 함.   
        console.log('cnt=',cnt); // 하지만 setCnt(cnt + 1) 호출 후 바로 cnt를 출력하면, cnt는 아직 업데이트 되지 않은 이전 값을 출력함. setCnt는 비동기적으로 작동하기 때문. 따라서 cnt의 최신 값을 확인하려면 useEffect를 사용하거나, setCnt의 콜백 함수를 활용해야 함.
    }
  return (
    <div className="flex w-full h-full 
                    justify-center items-start 
                    p-2 border border-slate-400">
        <div className="flex w-1/3 m-2">
            <img src={imgUrl} alt={title} />
        </div>
        <div className="flex flex-col justify-between
                        p-2 m-2
                        w-2/3 h-full">
            <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{content}</p>
            </div>
            <div className="flex justify-end items-center">
                <span onClick={handleClick} className="cursor-pointer">❤️</span>
                <span className="inline-flex mx-2 font-bold">좋아요</span>
                <span className="font-bold text-xl">{cnt}</span>
            </div>
        </div>
    </div>
  )
}
