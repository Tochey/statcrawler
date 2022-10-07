import React, { useState } from "react";
import GotoAssistData from "../services/GotoAssist";


export default function GotoModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-green-500 active:bg-green-500 font-bold px-6 py-3 shadow hover:shadow-md outline-none mr-1 mb-1"
        type="button"
        onClick={() => setModalOpen(true)}
      >
        full status
      </button>
      {modalOpen ? (
        <>
        <div className="w-screen overflow-auto py-[-30px] fixed inset-0 z-50 bg-black/50">
          <div className="w-7/12 bg-white rounded-md my-[80px] mx-auto">
            <div className="mt-6 h-5 flex justify-center items-center border-slate-200 rounded-t">
              <h3 className="text-lg font-semibold"> GotoAssist Service Status </h3>
            </div>
            <div className="w-full leading-relaxed">
              <GotoAssistData/>
            </div>
            <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
            <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
            </div>
          </div>
        </div>
        </>
      ): null}
    </div>
  );
}
