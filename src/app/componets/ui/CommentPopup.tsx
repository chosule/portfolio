'use client';

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import Link from "next/link";
import Popup from 'reactjs-popup';
import CustomButton, { CloseBox } from "./CustomButton";


export default function CommentPopup({className,children}:React.ComponentProps<'div'>) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        간단 구현 코멘트 보기 🙋‍♀️
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} >
        <div className="flex flex-col rounded-xl bg-neutral-50 w-[700px] h-[600px] p-6">
          <a className="close self-end text-2xl cursor-pointer" onClick={closeModal}>
            &times;
          </a>
          <div className="overflow-y-scroll flex gap-2 flex-col">
              {children}
          </div>
        </div>
      </Popup>
    </div>
    )
}