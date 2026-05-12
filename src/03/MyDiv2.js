import MyDiv3 from "./MyDiv3"
// export default function MyDiv2(probs) {
export default function MyDiv2({dn1, dn2, dn3}) {
return (
    <div className="flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    justify-center items-center
                    bg-lime-700 text-white">
        <div className="w-full flex justify-start items-center">
            {/*{`${probs.dn1} > ${probs.dn2}`}*/}
            {`${dn1} > ${dn2}`}
            {/*구조분해 할당으로 probs를 {dn1, dn2, dn3}로 바꿔주면 probs.dn1 대신 dn1로 바로 사용할 수 있다.*/}
        </div>
        <MyDiv3 d1={dn1} d2={dn2} d3={dn3} />
    </div>
  )
}
