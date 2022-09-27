import React, { useState } from "react";
import EgnyteService from "../services/Egnyte";

// todo: fix the modal div to be responsive

export default function EgnyteModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-green-500 active:bg-green-500 
            font-bold px-6 py-3 shadow hover:shadow-md outline-none mr-1 mb-1"
        type="button"
        onClick={() => setModalOpen(true)}
      >
        full status
      </button>
      {modalOpen ? (
        <>
          {/* the modal box */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-3xl">
              {/* content body */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* modal header */}
                <div className="flex items-start justify-between p-5 border-b border-slate-200 rounded-t">
                  <h3 className="text-lg flex justify-center font-semibold">Egnyte Service Status</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => modalOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <EgnyteService/>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}