
import MyDiv2 from "./MyDiv2"
// function 앞에 export를 붙여서 내보내는 방식도 가능
export default function MyDiv1() {
  return (
    <div className="flex flex-col p-5 
                    justify-center items-center 
                    w-2/3 h-2/3 text-2xl
                    bg-lime-900 text-white">
                    {/* flex는 플렉스 박스를 사용하는 것, flex-col은 수직 방향으로 배치하는 것, p-5는 패딩, justify-center는 수평 중앙 정렬, items-center는 수직 중앙 정렬, w-2/3은 너비를 2/3로 하는 것, h-2/3은 높이를 2/3로 하는 것, text-2xl은 글자 크기, bg-lime-900은 배경색, text-white는 글자 색상 */}
        <div className="w-full h-10 flex justify-start items-center">
            {/* w-full은 너비를 100%로 하는 것, h-10은 높이, flex는 플렉스 박스를 사용하는 것, justify-start는 왼쪽 정렬, items-center는 수직 중앙 정렬 */  }
            MyDiv1
        </div>
        <MyDiv2 />
    </div>
  )
}
