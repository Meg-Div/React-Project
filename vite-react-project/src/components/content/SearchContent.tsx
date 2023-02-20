import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../state/Hooks'
import * as BsIcons from "react-icons/bs"
import { addCart } from '../../state/ArtSlice'


export const SearchContent = () => {
    const dispatch = useAppDispatch();

    const artSearch = useAppSelector((state) => state.art.artSearch)
    const imageData = useAppSelector((state) => state.art.imageData)


    let filtered = false;

    let filteredArray = imageData;
    if (artSearch) {
        filteredArray = filteredArray.filter(((elem) => elem.title.toLowerCase().includes(artSearch.toLowerCase())))
        filtered = true;
    }

  return (
    <>
    <div className="pt-20 z-[-1]">
    <div className="">
        <div className="text-2xl pt-5 pb-5 grid text-center ">
        <div id="font"  className="text-5xl pb-2">Dalle</div>
        
        <div id="font" className={filtered ? 'hidden' : ""}>Full Collection</div>
        </div>
        <div className="grid grid-flow-rows auto-rows-min md:grid-cols-4 justify-items-center justify-center auto-cols-min">
            {filteredArray.map((item, index) => {
              return (
                <div className="md:w-[20vw]  w-[40vw]">
                  <Link to="#" state={item.id}>
                    <img className="object-fill" src={item.src}></img>
                  </Link>
                  <div className="flex flex-row pb-5 pt-1 justify-between	">

                      <div className="">{item.title}</div>
                      <div className="">{item.price}</div>
                      <button onClick={(e) => dispatch(addCart(item))}><BsIcons.BsFillBagPlusFill /></button>
                    </div>
                </div>
              );
            })}
        </div>
    </div>
    </div>
    </>
  )
}
