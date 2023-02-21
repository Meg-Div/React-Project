import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setOpen } from "../state/ArtSlice";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-primary py-8 flex justify-center text-center">
      <div className="container mx-auto">
        <p>Copyright &copy; Dalle Ecommerce Site 2023</p>
      </div>
    </footer>
  );
}
